var gulp = require('gulp')
var stripDebug = require('gulp-strip-debug');

gulp.task('jsmin', function() {
  gulp.src('static/js/phaser.min.js')
    .pipe(stripDebug())
    .pipe(gulp.dest('static/js'))
})
