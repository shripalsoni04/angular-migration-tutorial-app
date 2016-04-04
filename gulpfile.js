var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return sass('app/styles/scss/**/*.scss')
    .pipe(gulp.dest('app/styles/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('serve', ['sass'], function(){
    browserSync({
    server: {
      baseDir: 'app'
    }
  });
  
  gulp.watch(['app/**/*.js', 'app/**/*.html', '!app/bower_components/**/*.*'], reload);
  gulp.watch('app/styles/scss/**/*.scss', ['sass']);
});