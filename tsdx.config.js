const copy = require('./scripts/copy-files');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [{ src: './src/stubs', dest: './dist/' }],
        errorOnExist: false,
      })
    );

    return config;
  },
};
