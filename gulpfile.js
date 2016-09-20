var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');

// Scripts task
// Uglifies js
gulp.task('scripts1', function(){
  gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Uglifies js - Pizza
gulp.task('scripts2', function(){
  gulp.src('views/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('views/dist/js'));
});

// Minifies CSS
gulp.task('minify-css1', function(){
  gulp.src('css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css'));
});

// Minifies CSS - Pizza
gulp.task('minify-css2', function(){
  gulp.src('views/css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('views/dist/css'));
});

// Compress Images
gulp.task('imagemin1', function(){
  gulp.src('img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'));
});

// Compress Images - Pizza
gulp.task('imagemin2', function(){
  gulp.src('views/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('views/dist/images'));
});

gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts1']);
  gulp.watch('views/js/*.js', ['scripts2']);
  gulp.watch('css/*.css', ['minify-css1']);
  gulp.watch('views/css/*.css', ['minify-css2']);
})

gulp.task('default', ['scripts1', 'scripts2', 'minify-css1', 'minify-css2', 'watch']);
