var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var imageop = require('gulp-image-optimization');

gulp.task('css', function() {
  return gulp.src('style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest('./'));
});

gulp.task('images', function(cb) {
    gulp.src(['_img-src/*.png','_img-src/*.jpg','_img-src/*.gif','_img-src/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('_img')).on('end', cb).on('error', cb);
});

gulp.task("default", function () {
   gulp.start(['css','images']);
});
