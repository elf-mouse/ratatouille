# 01 Add a Build Process

Every site should have a development version and a production version.

The development version has all the HTML, CSS, JS and image files that make up your site in a clean format that you are happy to work on.

A production version will take these files, minify them, concatenate / merge them and optimise files like images.

**TL;DR**

- Your build process tools must optimise for performance; they should automatically minify and concatenate JavaScript, CSS, HTML, and images.
- Use tools like LiveReload to make your development process smoother.

## What Is a Build Process

A build process is a set of tasks which run over your projects files, compiling and testing code during development and used to create the deployment version of your site. Your build process shouldn’t be a set of tasks you run at the end of your development workflow.

The most popular tools for implementing a build process are [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com/), both of which are command line tools. If you have no experience of either, use Gulp, we use it for [Web Starter Kit](https://developers.google.com/web/starter-kit/) and recommend you do the same.

There are tools which have GUIs and may be a bit easier to get to grips with but will be less flexible.

Supported Platforms | Tool Name
------------------- | ---------
OS X / Windows | [Prepros](http://alphapixels.com/prepros/)
OS X / Windows | [Mixture](http://mixture.io/)
OS X | [CodeKit](https://incident57.com/codekit/)
OS X | [HammerForMac](http://hammerformac.com/)

## What Tasks Should be in a Build Process

If you are looking to create your own build process and you’re new to Gulp or Grunt, the quick start guides will be the best place to get into on installing and running your first build process:

- [Grunt Getting Started](http://gruntjs.com/getting-started)
- [Gulp Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Use Concatenation & Minification for a Faster Site

For minification, use the following:

Type of File | Gulp | Grunt
------------ | ---- | -----
CSS | [gulp-csso](https://github.com/ben-eb/gulp-csso) | [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
JS | [gulp-uglify](https://github.com/terinjokes/gulp-uglify/) | [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
HTML | [gulp-minify-html](https://github.com/jonathanepollack/gulp-minify-html) | [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

For concatenation, use the following:

Type of File | Gulp | Grunt
------------ | ---- | -----
CSS (Sass) | [gulp-sass](https://github.com/dlmanning/gulp-sass) or [gulp-useref](https://github.com/jonkemp/gulp-useref) | [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) or [grunt-usemin](https://github.com/yeoman/grunt-usemin)
JS | [gulp-useref](https://github.com/jonkemp/gulp-useref) | [grunt-usemin](https://github.com/yeoman/grunt-usemin) or [grunt-codekit](https://github.com/fatso83/grunt-codekit)

**Note**
You can use Sass by taking advantage of the ‘import’ feature ([See Web Starter Kit for an example](https://github.com/google/web-starter-kit/blob/master/app/styles/main.scss)).

### Optimise Your Images

Gulp | Grunt
---- | -----
[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) | [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)

### Don’t Trip Up with Vendor Prefixes

Gulp | Grunt
---- | -----
[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) | [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)

### Never Leave Your Text Editor with Live Reloading

Gulp | Grunt
---- | -----
[browser-sync](http://www.browsersync.io/docs/gulp/) | [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) & [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

**Note**
If you like the idea of Live Reloading, but don’t want to have a build process, [Addy Osmani’s write up on HTML5Rocks](http://www.html5rocks.com/en/tutorials/tooling/synchronized-cross-device-testing/) covers a range of alternatives (some free and some commercial).
