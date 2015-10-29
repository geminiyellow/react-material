var gulp = require('gulp');
var fs = require('fs');
var gulpTasksPath = './config/gulp/tasks/';

//-- include docs gulpfile (should eventually be factored out)
require('./docs/gulpfile');

//-- read in all files from gulp/tasks and create tasks for them
fs.readdirSync(gulpTasksPath)
  .filter(function (filename) {
    return filename.match(/\.js$/i);
  })
  .map(function (filename) {
    return {
      name: filename.substr(0, filename.length - 3),
      contents: require(gulpTasksPath + filename)
    };
  })
  .forEach(function (file) {
    gulp.task(file.name, file.contents.dependencies, file.contents.task);
  });
