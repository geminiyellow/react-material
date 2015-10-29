var concat = require('gulp-concat');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var insert = require('gulp-insert');
var named = require('vinyl-named');
var plumber = require('gulp-plumber');
var path = require('path');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

var util = require('../util');
var config = require('../config');
var webpackConfig = require('../../webpack/base.conf.js');

var constants = require('../const');
var IS_DEV = constants.IS_DEV;

exports.task = function () {
  var jsFiles = config.jsBaseFiles.concat([path.join(config.paths, '*.jsx')]);
  return gulp.src(jsFiles)
    .pipe(util.filterNonCodeFiles())
    .pipe(plumber())
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(insert.prepend(config.banner))
    .pipe(gulp.dest(config.outputDir))
    .pipe(gulpif(!IS_DEV, uglify({preserveComments: 'some'})))
    .pipe(concat('react-material.js'))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(config.outputDir));
};
