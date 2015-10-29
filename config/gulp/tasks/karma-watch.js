var karma = require('karma').Server;
var ROOT = require('../const').ROOT;
var args = require('../util').args;

// Make full build of JS and CSS
exports.dependencies = ['build'];

exports.task = function (done) {
  new karma({
    singleRun: false,
    autoWatch: true,
    configFile: ROOT + '/config/karma/karma.conf.js',
    browsers: args.browsers ? args.browsers.trim().split(',') : ['Chrome']
  }, done).start();
};
