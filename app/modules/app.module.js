/**
 * Main App Module
 */

define([
    'angular',
    'angular-bootstrap',
    'angular-ui-router',
    'modules/app',
    'modules/app.routes',
    'modules/dashboard/dashboard.module',
    'modules/project/project.module',
    'modules/client/client.module',
    'modules/employee/employee.module',
    'modules/shared/shared.module',
    'modules/shared/config'
], function(angular, uiBootstrap, uiRouter, AppCtrl, appRouteConfig, dashboardModule, projectModule, clientModule, employeeModule, sharedModule, oConfig) {
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
        .value('inMemoryDatastorePath', 'mock-data/datastore.js')
        .value('inMemoryDatastoreApiEndPoint', oConfig.apiEndPoint)
        .controller('AppCtrl', AppCtrl);
});