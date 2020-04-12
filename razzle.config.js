const makeLoaderFinder = require("razzle-dev-utils/makeLoaderFinder");

const babelLoaderFinder = makeLoaderFinder("babel-loader");

module.exports = {
  modify(baseConfig) {
    const config = Object.assign({}, baseConfig);

    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"];

    // Safely locate Babel-Loader in Razzle's webpack internals
    const babelLoader = config.module.rules.find(babelLoaderFinder);
    if (!babelLoader) {
      throw new Error("'babel-loader' not found");
    }

    // Setup babel to parse js, ts, and tsx files
    babelLoader.test = /\.(js|ts|tsx)$/;

    return config;
  },
};
