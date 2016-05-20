'use strict';

require.config({
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'bootstrap': 'bower_components/bootstrap/dist/bootstrap.min',
        'jquery': 'bower_components/jquery/jquery.min',
        'es6-promise': 'bower_components/es6-promise/es6-promise.min',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-component-router': '../node_modules/@angular/router/angular1/angular_1_router'
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angular-ui-router': ['angular'],
        'angular-bootstrap': ['angular'],
        'angular-component-router': ['angular']
    }
});

// loading global modules
require(['es6-promise', 'lodash']);