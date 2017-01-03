'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./app/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(['./app/components/**/*.scss', './app/main.scss'], ['sass']);
});