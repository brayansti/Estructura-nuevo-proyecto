'use strict';
var gulp = require('gulp');
var server = require('gulp-server-livereload');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      port: 8000,
      open: true
    }));
});


gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dest/css/'));
});


gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('src/pug/*.pug')
    .pipe(pug({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('dest/'))
});


gulp.task('watch', function() {
  gulp.watch('src/pug/*', ['templates']);
  gulp.watch('src/sass/*', ['sass'])
});

gulp.task('default', ['webserver', 'sass', 'templates', 'watch']);
