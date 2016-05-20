/**
 * Main App Module
 */

define([
    'angular',
    'angular-bootstrap',
    'angular-component-router',
    './app.component',
    './dashboard/dashboard.module',
    './project/project.module',
    './client/client.module',
    './employee/employee.module',
    './shared/shared.module'
], function(angular, uiBootstrap, ngComponentRouter, appComponentConfig, dashboardModule, projectModule, clientModule, employeeModule, sharedModule) {
    'use strict';

    return angular.module('app', [
        /* 3rd-party modules */
        'ngComponentRouter',
        'ui.bootstrap',
        
        /* Feature modules */
        dashboardModule.name,
        projectModule.name,
        clientModule.name,
        employeeModule.name,
        
        /* Shared modules */
        sharedModule.name
    ])
        .component(appComponentConfig.NAME, appComponentConfig)
        .value('$routerRootComponent', appComponentConfig.NAME)
});