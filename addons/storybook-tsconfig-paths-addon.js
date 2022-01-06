const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpackFinal(config = {}) {
    if (Array.isArray(config.resolve.plugins)) {
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({ extensions: config.resolve.extensions })
      );
    }

    return config;
  },
};
