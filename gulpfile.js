'use strict';

const gulp               = require('gulp');                 // Gulp.js
const sass               = require('gulp-sass');            // Compile SASS to CSS
const cleanCSS           = require('gulp-clean-css');       // Optimize CSS
const autoprefixer       = require('gulp-autoprefixer');    // Autoprefix CSS
const htmlmin            = require('gulp-htmlmin');         // Minify HTML
const tinypng           = require('gulp-tinypng');         // Optimize images
const webserver          = require('gulp-webserver');       // Webserver with Livereload


// Compile Sass and optimize CSS
gulp.task('sass', () => {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError)) 
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false })) 
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./build/css/'));
});

// Minify HTML
gulp.task('html', () => {
  return gulp.src('./html/*/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/html'))
});

// Minify Index HTML
gulp.task('IndexHtml', () => {
  return gulp.src('./index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/'))
});

// Optimize images
gulp.task('img', () => {
  gulp.src('./src/assets/*.*')
    .pipe(tinypng('dkXP52yPofvF2hGtUEgQmZQuZ0BwJpv4'))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch', () => {
  gulp.watch('./src/sass/*.*', ['sass']),
  gulp.watch('./html/*.html', ['html'])
});

gulp.task('default', ['sass', 'html', 'IndexHtml', 'webserver', 'watch']); 

gulp.task('build', ['sass', 'html', 'IndexHtml']); 