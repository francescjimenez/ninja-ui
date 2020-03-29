
// Export a function. Accept the base config as the only param.
module.exports = {
    addons: [
      '@storybook/preset-create-react-app',
      {
        name: "@storybook/addon-docs/preset",
        options: {
          configureJSX: true,
          babelOptions: {}
        }
      }
    ],
    webpackFinal: async (config, { configType }) => {
  
      // remove svg from existing rule
      config.module.rules = config.module.rules.map(rule => {
        if (
          String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
        ) {
          return {
            ...rule,
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
          }
        }
        return rule
      });
  
      // use svgr for svg files
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              native: true,
            },
          },
        ],
      });
  
      // Return the altered config
      return config;
    },
  };