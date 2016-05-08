/**
 * Bootstraps application.
 */

define([
    'angular',
    'modules/app.module'
], function(angular, appModule) {
    'use strict';
    
    angular.bootstrap(document.body, [appModule.name]);
});