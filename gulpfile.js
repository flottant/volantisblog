let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')
let htmlmin = require('gulp-htmlmin')
let htmlclean = require('gulp-htmlclean')
let uglify = require('gulp-uglify')

// 设置根目录
const root = './public'

// 匹配模式， **/*代表匹配所有目录下的所有文件
const pattern = '**/*'

// 压缩html
gulp.task('minify-html', function () {
    return gulp
        // 匹配所有 .html结尾的文件
        .src(`${root}/${pattern}.html`)
        .pipe(htmlclean())
        .pipe(
            htmlmin({
                removeComments: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            })
        )
        .pipe(gulp.dest('./public'))
})

// 压缩css
gulp.task('minify-css', function () {
    return gulp
        // 匹配所有 .css结尾的文件
        .src(`${root}/${pattern}.css`)
        .pipe(
            cleanCSS({
                compatibility: 'ie8'
            })
        )
        .pipe(gulp.dest('./public'))
})

// 压缩js
gulp.task('minify-js', function () {
    return gulp
        // 匹配所有 .js结尾的文件
        .src(`${root}/${pattern}.js`)
        .pipe(uglify())
        .pipe(gulp.dest('./public'))
})

gulp.task('default', gulp.series('minify-html', 'minify-css', 'minify-js'))