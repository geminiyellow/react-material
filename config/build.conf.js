var pkg = require('../package.json');
var fs = require('fs');

module.exports = {
  reactVersion: '0.14.1',
  version: pkg.version,
  repository: pkg.repository.url
    .replace(/^git/, 'https')
    .replace(/(\.git)?\/?$/, '')
};
