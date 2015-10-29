var config = require('./config');
var path = require('path');
var args = require('minimist')(process.argv.slice(2));

exports.ROOT = path.normalize(__dirname + '/../..');
exports.VERSION = args.version || require('../../package.json').version;
exports.LR_PORT = args.port || args.p || 8080;
exports.IS_DEV = args.dev;
exports.SHA = args.sha;
