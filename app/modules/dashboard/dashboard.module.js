define([
    'angular',
    'modules/dashboard/route-config',
    'modules/dashboard/dashboard.controller',
    'modules/project/project.module'
], function(angular, dashboardRouteConfig, DashboardCtrl, projectModule){
    return angular.module('app.dashboard', [projectModule.name])
        .config(dashboardRouteConfig)
        .controller('DashboardCtrl', DashboardCtrl);
})