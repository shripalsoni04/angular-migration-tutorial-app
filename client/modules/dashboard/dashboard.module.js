/**
 * Module for dashboard functionality.
 */

define([
    'angular',
    'angular-component-router',
    '../project/project.module',
    './dashboard.component'
], function(angular, ngComponentRouter, projectModule, dashboardComponentConfig) {
    'use strict';
    
    return angular.module('app.dashboard', ['ngComponentRouter', projectModule.name])
        .component(dashboardComponentConfig.NAME, dashboardComponentConfig);
})