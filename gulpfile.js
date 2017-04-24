/**
 * Created by dannyyassine on 2017-04-20.
 */
var gulp        = require('gulp')
var browserSync = require('browser-sync')
var reload      = browserSync.reload
const shell = require('gulp-shell')
var uglify = require('gulp-uglify');

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: ''
        }
    });
    gulp.watch(['*.html', 'app.css', 'bundle.js'], {cwd: ''}, reload);
});

gulp.task('webpack', shell.task(
    'webpack --config --progress --colors webpack.config.js'
));

gulp.task('uglify', ['webpack'], function() {
    return gulp.src('bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

gulp.task('prod', ['uglify'], function() {})

gulp.task('server', shell.task(
    'node server.js'
));

