'use strict';

var gulp      = require('gulp'),
    nodemon   = require('gulp-nodemon'),
    bs        = require('browser-sync'),
    reload    = bs.reload,
    when      = require('gulp-if'),
    shell     = require('gulp-shell'),
    sass = require('gulp-sass');


// the paths to our app files
var paths = {
  // all our client app js files, not including 3rd party js files
  scripts: ['client/app/**/*.js'],
  html: ['client/app/**/*.html', 'client/index.html'],
  styles: ['client/styles/style.css'],
  test: ['specs/**/*.js']
};

// any changes made to your
// client side code will automagically refresh your page
// with the new changes
gulp.task('start', ['serve', 'sass-watch'],function () {
  bs({
    notify: true,
    // address for server,
    // server: 'localhost:3000',
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:8000',
    port: 8888
  });
});

gulp.task('sass', function() {
  return gulp.src('./client/styles/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./client/styles/'))
});

gulp.task('sass-watch', function() {
  gulp.watch('./client/styles/sass/**/*.scss', ['sass']);
});

gulp.task('karma', shell.task([
  'karma start'
]));

// start our node server using nodemon
gulp.task('serve', function() {
  nodemon({script: './server/server.js', ignore: 'node_modules/**/*.js'});
});

gulp.task('default', ['start']);

