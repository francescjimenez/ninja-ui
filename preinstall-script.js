/* eslint-disable no-console */
/**
 * Do NOT allow using `yarn` as package manager.
 */
if (process.env.npm_execpath.indexOf('npm') === -1) {
    console.error('You must use NPM to install dependencies:');
    console.error('  $ npm install');
    process.exit(1);
  }