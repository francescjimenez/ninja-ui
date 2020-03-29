/* eslint-disable no-console */
// import system dependencies
const {
    lstatSync,
    readdirSync,
    readdir,
    unlink,
    createReadStream,
    createWriteStream,
    writeFile,
    rename,
  } = require('fs');
  const { join } = require('path');
  const { spawn } = require('child_process');
  
  const rollup = require('rollup');
  const rollupSvg = require('rollup-plugin-svg');
  const babel = require('rollup-plugin-babel');
  const resolve = require('rollup-plugin-node-resolve');
  const commonjs = require('rollup-plugin-commonjs');
  
  const pkg = require('../package.json');
  
  // set flag to either publish on npm or create a tarball
  // eslint-disable-next-line radix
  const shouldPublish = false; // !!parseInt(process.env.PUBLISH_PACK);
  
  // Define reusable constants
  const COMPONENTS = 'src';
  
  // Configuration shared across builds
  const commonConfig = {
    // Make sure the 3rd party libs externals dependencies and prevent bundling them
    external: [
      ...Object.keys(pkg.devDependencies),
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.peerDependencies),
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.json'],
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react/index.js': [
            'Children',
            'Component',
            'PropTypes',
            'createElement',
            'ReactComponent',
          ],
          'node_modules/react-dom/index.js': ['render'],
        },
      }),
      rollupSvg(),
      babel({
        exclude: 'node_modules/**',
        plugins: [['transform-react-remove-prop-types', { removeImport: true }]],
      }),
    ],
  };
  
  const log = message => console.log(`---- ${message} ----`);
  const isDirectory = source => lstatSync(source).isDirectory();
  const isAcceptedExtension = source => {
    const ext = source.split('.').pop();
    return (
      (ext === 'js' || ext === 'jsx') &&
      !source.includes('stories') &&
      !source.includes('test') &&
      !source.includes('__')
    );
  };
  
  const getDirectories = source =>
    readdirSync(source)
      .map(name => join(source, name))
      .filter(isDirectory);
  
  const getFiles = source =>
    readdirSync(source)
      .map(name => join(source, name))
      .filter(f => !isDirectory(f) && isAcceptedExtension(f));
  
  const listFiles = () => {
    log('Finding files in .src/ directory');
    const directories = getDirectories(COMPONENTS);
    return directories.reduce(
      (list, directory) => [...list, ...getFiles(directory)],
      [...getFiles(COMPONENTS)],
    );
  };
  
  // Builds the filepath for the given file
  const getFileNameData = file => {
    const originalPath = file
      .split('/')
      .reverse()[0]
      .replace('jsx', 'js');
    const [name] = originalPath.split('.');
    const filepath = `dist/${originalPath}`;
    return { filepath, name };
  };
  
  // Builds the Rollup configuration for a new file
  function createFileConfiguration(input, format, outputName, fileName) {
    return {
      inputOptions: {
        input,
        ...commonConfig,
      },
      outputOptions: {
        globals: {
          react: 'React',
          classnames: 'cx',
          'prop-types': 'PropTypes',
          'react-modal': 'ReactModal',
          'react-dom': 'reactDom',
          'styled-components': 'styled',
          rebass: 'rebass',
          '@styled-system/css': 'css',
          'styled-system': 'styledSystem',
        },
        sourcemap: true,
        name: fileName || outputName,
        file: outputName,
        format,
      },
    };
  }
  
  // Creates ESM configs for components
  function buildESMConfigurations() {
    const format = 'es';
    return listFiles().reduce((acc, file) => {
      const { filepath, name } = getFileNameData(file, format);
      const config = createFileConfiguration(file, format, filepath, name);
      return [...acc, config];
    }, []);
  }
  
  function copyFile(source, target) {
    target = target || `dist/${source}`;
    const read = createReadStream(`./${source}`);
    const write = createWriteStream(target);
    return new Promise((resolve, reject) => {
      read.on('error', reject);
      write.on('error', reject);
      write.on('finish', resolve);
      read.pipe(write);
    }).catch(error => {
      read.destroy();
      write.end();
      throw error;
    });
  }
  
  function createPackageFile() {
    const packageData = JSON.stringify(
      {
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        main: pkg.main.replace('dist/', ''),
        module: pkg.module.replace('dist/', ''),
        repository: pkg.repository,
        dependencies: pkg.dependencies,
        peerDependencies: pkg.peerDependencies,
      },
      null,
      2,
    );
    return new Promise(resolve => {
      writeFile('dist/package.json', packageData, 'utf-8', resolve);
    }).catch(error => {
      throw error;
    });
  }
  
  function createExtraFiles() {
    log('Generating extra files');
    const filePromises = ['README.md', 'CHANGELOG.md'].map(f => copyFile(f));
    filePromises.push(createPackageFile());
    return Promise.all(filePromises);
  }
  
  // Run an NPM process on the dist/ dir
  function runNPMProcess(script, ...args) {
  
    const childProcess = spawn('npm run', [script, ...args], {
      sdio: 'inherit',
      cwd: 'dist/',
    });
    // eslint-disable-next-line no-shadow
    return new Promise((resolve, reject) => {
  
      let stdOut = '';
      // Capture STDOUT
      childProcess.stdout.on('data', err => {
        stdOut += err.toString();
      });
      let fullError = '';
      // Capture STDERR data to send in case of failure
      childProcess.stderr.on('data', err => {
        fullError += err.toString();
      });
      childProcess.on('error', reject);
      childProcess.on('close', code => {
        if (code !== 0) {
          return reject(fullError);
        }
        return resolve(stdOut);
      });
    });
  }
  
  function moveFile(oldPath, newPath) {
    return new Promise((resolve, reject) => {
      rename(oldPath, newPath, err => (err ? reject : resolve));
    });
  }
  
  async function runTests() {
    log('Running Tests');
    const childProcess = spawn('npm', ['run', 'test']);
    return new Promise((resolve, reject) => {
      childProcess.on('error', err => {
        reject(err);
      });
      childProcess.on('close', code => {
        if (code > 0) {
          reject('🛑 Tests failed');
        } else {
          console.log('✅ Tests Pass');
          resolve();
        }
      });
    });
  }
  
  async function packDistDir() {
    log('Packing dist/ directory');
    await runNPMProcess('pack');
    // Move tarball to root dir
    const tarName = `${pkg.name}-${pkg.version}.tgz`;
    log(`Saving tarball to ./${tarName}`);
    return moveFile(`./dist/${tarName}`, tarName);
  }
  
  // Publish package to NPM
  // only if PUBLISH_PACK env var is set to true
  function publishDist() {
    log('Running NPM publish');
    return runNPMProcess('release');
  }
  
  // Main function
  // Calls Rollup with a specific configuration for each file in the components/ directory
  // This creates a common-js and an ES module for each file, to allow importing them individually
  // Additionally, it creates an index.js in file to allow importing the whole library (and allow retrocompatibility),
  // A UMD build (index.umd.js) is created to allow loading the library in browsers
  async function build() {
    try {
      const configurations = [
        createFileConfiguration(
          `${COMPONENTS}/index.js`,
          'umd',
          'dist/ninja-ui.umd.js',
          pkg.name,
        ),
        // Build CJS
        createFileConfiguration(
          `${COMPONENTS}/index.js`,
          'cjs',
          'dist/index.cjs.js',
          pkg.name,
        ),
        // Build ESM
        ...buildESMConfigurations(),
      ];
  
      // await runTests();
  
      log('Clean directory');
      readdir('./dist', (err, files) => {
        if (err) throw err;
  
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
          unlink(join('./dist', file), errUnlink => {
            if (errUnlink) throw errUnlink;
          });
        }
      });
  
      log('Building modules');
      log('Please wait');
      // create a bundle
  
      // eslint-disable-next-line no-restricted-syntax
      for (const config of configurations) {
        const bundle = await rollup.rollup(config.inputOptions);
  
        // generate code and a sourcemap
        // eslint-disable-next-line no-await-in-loop
        await bundle.generate(config.outputOptions);
  
        // or write the bundle to disk
        // eslint-disable-next-line no-await-in-loop
        await bundle.write(config.outputOptions);
      }
  
      // Generate README, CHANGELOG, package.json of dist dir
      await createExtraFiles();
  
      if (shouldPublish) {
        // publish dist dir to npm
        const message = await publishDist();
        log(`Built version:\n`);
        console.log(message);
      } else {
        // package dist dir in tarball (npm pack)
        // await packDistDir();
      }
      log('Done!');
    } catch (err) {
      log('Finished with errors: ');
      console.error(err);
    }
  }
  
  return build();
  