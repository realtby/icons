const iconsSizeLimit = require('./.size-limit.icons.cjs');

module.exports = [
  {
    name: '[cjs] bundle',
    path: './dist/icons.js',
    running: false,
    webpack: false,
    limit: '31 kb',
  },
  {
    name: '[esm] bundle',
    path: './dist/icons.esm.js',
    running: false,
    webpack: false,
    limit: '31 kb',
  },
].concat(iconsSizeLimit);
