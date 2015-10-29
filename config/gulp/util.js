var filter = require('gulp-filter');

var args = require('minimist')(process.argv.slice(2));
var autoprefixer = require('gulp-autoprefixer');

function autoprefix() {
  return autoprefixer({
    browsers: ['last 2 versions', 'last 4 Android versions']
  });
}

function filterNonCodeFiles() {
  return filter(function (file) {
    return !/demo|module\.json|script\.js|\.spec.js|README/.test(file.path);
  });
}

exports.args = args;
exports.autoprefix = autoprefix;
exports.filterNonCodeFiles = filterNonCodeFiles;
