var gutil = require('gulp-util');
var karma = require('karma').Server;
var util = require('../util');
var ROOT = require('../const').ROOT;
var args = util.args;

// Make full build of JS and CSS
exports.dependencies = ['build'];

exports.task = function (done) {
  var errorCount = 0;
  var karmaConfig = {
    logLevel: 'warn',
    singleRun: true,
    autoWatch: false,
    configFile: ROOT + '/config/karma/karma.conf.js'
  };

  /**
   * For each version of testings (unminified, minified)
   * capture the exitCode and update the error count...
   *
   * When all versions are done, report any errors that may manifest
   * [e.g. perhaps in the minified tests]
   *
   * NOTE: All versions must pass before the CI server will announce 'success'
   */
  function captureError(next, done) {
    return function (exitCode) {
      if (exitCode != 0) {
        gutil.log(gutil.colors.red("Karma exited with the following exit code: " + exitCode));
        errorCount++;
      }
      // Do not process next set of tests if current set had >0 errors.
      (errorCount > 0) && done() || next();
    };
  }

  if (args.browsers) {
    karmaConfig.browsers = args.browsers.trim().split(',');
  }

  if (args.reporters) {
    karmaConfig.reporters = args.reporters.trim().split(',');
  }

  gutil.log('Running unit tests on unminified source.');
  new karma(karmaConfig, captureError(testMinified, clearEnv)).start();

  function testMinified() {
    gutil.log('Running unit tests on minified source.');
    process.env.KARMA_TEST_COMPRESSED = true;
    karma.start(karmaConfig, captureError(clearEnv, clearEnv));
  }

  function clearEnv() {
    process.env.KARMA_TEST_COMPRESSED = undefined;

    if (errorCount > 0) { process.exit(errorCount); }
    done();
  }
};
