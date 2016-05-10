// Karma configuration
// Generated on Tue Apr 26 2016 11:37:46 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      {pattern: 'bower_components/angular-ui-router/release/angular-ui-router.min.js', included: false},
      {pattern: 'bower_components/bootstrap/dist/js/bootstrap.min.js', included: false},
      {pattern: 'bower_components/jquery/dist/jquery.min.js', included: false},
      {pattern: 'bower_components/es6-promise/es6-promise.min.js', included: false},
      {pattern: 'bower_components/lodash/dist/lodash.min.js', included: false},
      {pattern: 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js', included: false},
      {pattern: 'mock-data/*.js', included: false},
      {pattern: 'modules/*.js', included: false},
      {pattern: 'modules/**/*.js', included: false},
      {pattern: 'modules/**/*.spec.js', included: false},
      'modules/project/project-employee-list.directive.html'
    ],


    // list of files to exclude
    exclude: [
      'main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'modules/**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    
    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    }
  })
}
