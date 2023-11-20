const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const rename = require('gulp-rename');

function buildStyles(){
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(rename('yoicards.css'))
        .pipe(dest('yoi-dist'))
}

function watchTask(){
    watch(['sass/**/*.scss','*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)