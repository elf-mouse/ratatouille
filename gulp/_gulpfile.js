/* jshint node:true */
'use strict';
// generated on 2015-01-18 using generator-gulp-webapp 0.2.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// set config (by Elf-mousE)
var config = {
  app: {
    root: 'app',
    css:  'app/styles',
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
    root: '.tmp'
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
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('jshint', function () {
  return gulp.src(config.app.js + '/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('html', ['styles'], function () {
  var assets = $.useref.assets({searchPath: '{' + config.tmp.root + ',' + config.app.root + '}'});

  return gulp.src(config.app.root + '/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest(config.dist.root));
});

gulp.task('images', function () {
  return gulp.src(config.app.img + '/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(config.dist.img));
});

gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')().concat(config.app.font + '/**/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest(config.dist.font));
});

gulp.task('extras', function () {
  return gulp.src([
    config.app.root + '/*.*',
    '!' + config.app.root + '/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest(config.dist.root));
});

gulp.task('clean', require('del').bind(null, [config.tmp.root, config.dist.root]));

gulp.task('connect', ['styles'], function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic(config.tmp.root))
    .use(serveStatic(config.app.root))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex(config.app.root));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('serve', ['connect', 'watch'], function () {
  require('opn')('http://localhost:9000');
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src(config.app.css + '/*.scss')
    .pipe(wiredep())
    .pipe(gulp.dest(config.app.css));

  gulp.src(config.app.root + '/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest(config.app.root));
});

gulp.task('watch', ['connect'], function () {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    config.app.root + '/*.html',
    '.tmp/styles/**/*.css',
    config.app.js + '/**/*.js',
    config.app.img + '/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch(config.app.css + '/**/*.scss', ['styles']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src(config.dist.root + '/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
