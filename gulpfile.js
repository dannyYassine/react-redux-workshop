/**
 * Created by dannyyassine on 2017-04-20.
 */
var gulp        = require('gulp')
var browserSync = require('browser-sync')
var reload      = browserSync.reload
const shell = require('gulp-shell')

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: ''
        }
    });
    gulp.watch(['*.html', 'app.css', 'bundle.js'], {cwd: ''}, reload);
});

gulp.task('server', shell.task(
    'node server.js'
));

