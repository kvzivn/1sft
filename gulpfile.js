'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("js/inbox.js", ['js']);
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('js', function () {
    return gulp.src("js/inbox.js")
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('react'));
});

gulp.task('sass', function () {
    return gulp.src("scss/*.scss")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);