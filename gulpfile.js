var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;
var karma = require('karma');
var reload = browserSync.reload;

gulp.task('sass', function () {
  return sass('client/styles/scss/**/*.scss')
    .pipe(gulp.dest('client/styles/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('serve', ['sass'], function (cb) {
  // starting api server
  exec('node node_modules/angular-migration-tutorial-api-server/server.js', function (err, stdout, stderr) {
    /*eslint no-console: "off" */
    console.info(stdout);
    console.error(stderr);
    cb(err);
  });

  // starting client server
  browserSync({
    server: {
      baseDir: ['./', './client']
    }
  });

  gulp.watch(['client/**/*.js', 'client/**/*.html', '!client/bower_components/**/*.*'], reload);
  gulp.watch('client/styles/scss/**/*.scss', ['sass']);
});

/**
 * Runs test for only one time.
 */
gulp.task('test', function (done) {
  new karma.Server({
    singleRun: true,
    autoWatch: false,
    configFile: __dirname + '/client/karma.conf.js'
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new karma.Server({
    singleRun: false,
    autoWatch: true,
    configFile: __dirname + '/client/karma.conf.js'
  }, done).start();
});