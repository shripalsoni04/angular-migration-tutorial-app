var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start,
  
  paths: {
        'angular': 'bower_components/angular/angular.min',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'bootstrap': 'bower_components/bootstrap/dist/bootstrap.min',
        'jquery': 'bower_components/jquery/jquery.min',
        'es6-promise': 'bower_components/es6-promise/es6-promise.min',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-mocks': 'bower_components/angular-mocks/angular-mocks'
    },
    
    shim: {
        'angular': { 'exports': 'angular' },
        'angular-ui-router': ['angular'],
        'angular-bootstrap': ['angular']
    }
});
