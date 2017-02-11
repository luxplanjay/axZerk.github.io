'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    plugins = require('gulp-load-plugins')(),
    rigger = require('gulp-rigger');

var paths = {
    globalImport: './src/blocks/core/tools/',

    srcSass: ['./src/blocks/core/*.scss', './src/blocks/**/*.scss'],
    srcJs: './src/blocks/**/*.js',
    srcHtml: './src/html/index.html',

    destCss: './src/css',
    destJs: './src/js',
    destHtml: './src/index.html'
};

// Assembling .scss files
gulp.task('bundleCss', function () {
    gulp.src(paths.srcSass)
        .pipe(plugins.sassGlobImport())
        .pipe(plugins.sass({
            outputStyle: 'expanded',
            includePaths: [paths.globalImport, 'node_modules/susy/sass']
        }).on('error', plugins.sass.logError))
        .pipe(plugins.concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'IE 8', 'IE 9'],
            cascade: true
        }))
        .pipe(plugins.cssnano())
        .pipe(gulp.dest(paths.destCss))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Assembling index html
gulp.task('rigger', function () {
    gulp.src(paths.srcHtml)
        .pipe(rigger())
        .pipe(gulp.dest('src/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Assembling .js files
gulp.task('bundleJs', function () {
    gulp.src(paths.srcJs)
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest(paths.destJs))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('watch', function () {
    gulp.watch(paths.destHtml, browserSync.reload);
    gulp.watch(paths.srcSass, {
        cwd: './'
    }, ['bundleCss']);
    gulp.watch(paths.srcJs, {
        cwd: './'
    }, ['bundleJs']);
    gulp.watch('src/html/*.html', ['rigger']);

});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('default', ['browser-sync', 'rigger', 'bundleCss', 'bundleJs', 'watch']);
