'use strict';

require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'bootstrap': 'bower_components/bootstrap/dist/bootstrap.min',
        'jquery': 'bower_components/jquery/jquery.min',
        'es6-promise': 'bower_components/es6-promise/es6-promise.min',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min'
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angular-ui-router': ['angular'],
        'angular-bootstrap': ['angular']
    }
});

// loading global modules
require(['es6-promise', 'lodash']);