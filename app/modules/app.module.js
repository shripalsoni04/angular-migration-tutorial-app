define([
    'angular',
    'angular-ui-router',
    'modules/app',
    'modules/route-config',
    'modules/dashboard/dashboard.module',
    'modules/project/project.module',
    'modules/shared/shared.module',
    'modules/shared/config'
], function (angular, uiRouter, AppCtrl, RouteConfig, dashboardModule, projectModule, sharedModule, oConfig) {
    return angular.module('app', [
            'ui.router', 
            dashboardModule.name, 
            projectModule.name, 
            sharedModule.name
        ])
        .config(RouteConfig)
        .value('inMemoryDatastorePath', 'mock-data/datastore.js')
        .value('inMemoryDatastoreApiEndPoint', oConfig.apiEndPoint)
        .controller('AppCtrl', AppCtrl);
});