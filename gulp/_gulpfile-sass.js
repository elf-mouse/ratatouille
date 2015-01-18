/* jshint node:true */
'use strict';
// generated on 2015-01-18 using generator-gulp-webapp 0.2.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// set config (by Elf-mousE)
var config = {
  app: {
    root: 'app',
    css:  'sass', //'app/styles',
    js:   'app/scripts',
    img:  'app/images',
    font: 'app/fonts'
  },
  dist: {
    root: 'dist',
    css:  'dist/css',
    js:   'dist/js',
    img:  'dist/img',
    font: 'dist/font'
  },
  tmp: {
    root: '.tmp',
    css:  '.tmp/css'
  },
  AUTOPREFIXER_BROWSERS: ['last 1 version']
};

gulp.task('styles', function () {
  return gulp.src(config.app.css + '/**/*.scss')
    .pipe($.plumber())
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10
    }))
    .pipe($.autoprefixer({browsers: config.AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest(config.tmp.css));
});

gulp.task('build:sass', ['styles'], function () {
  return gulp.src(config.tmp.css + '/**/*.css')
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest(config.dist.css))
    .pipe($.size({showFiles: true, title: 'source'}))
    .pipe($.rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest(config.dist.css))
    .pipe($.size({showFiles: true, title: 'minified'}))
    .pipe($.size({showFiles: true, gzip: true, title: 'gzipped'}));
});

gulp.task('clean', require('del').bind(null, [config.tmp.root, config.dist.root]));

gulp.task('default', ['clean'], function () {
  gulp.start('build:sass');
});
