/**
 * Module for dashboard functionality.
 */

define([
    'angular',
    'modules/project/project.module',
    './dashboard.component'
], function(angular, projectModule, dashboardComponentConfig) {
    'use strict';
    
    return angular.module('app.dashboard', ['ngComponentRouter', projectModule.name])
        .component(dashboardComponentConfig.NAME, dashboardComponentConfig);
})