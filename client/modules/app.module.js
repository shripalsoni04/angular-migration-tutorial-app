/**
 * Main App Module
 */

define([
    'angular',
    'angular-bootstrap',
    'angular-ui-router',
    './app.routes',
    './app.component',
    './dashboard/dashboard.module',
    './project/project.module',
    './client/client.module',
    './employee/employee.module',
    './shared/shared.module'
], function(angular, uiBootstrap, uiRouter, appRouteConfig, appComponentConfig, dashboardModule, projectModule, clientModule, employeeModule, sharedModule) {
    'use strict';

    return angular.module('app', [
        /* 3rd-party modules */
        'ui.router',
        'ui.bootstrap',
        
        /* Feature modules */
        dashboardModule.name,
        projectModule.name,
        clientModule.name,
        employeeModule.name,
        
        /* Shared modules */
        sharedModule.name
    ])
        .config(appRouteConfig)
        .component(appComponentConfig.NAME, appComponentConfig);
});