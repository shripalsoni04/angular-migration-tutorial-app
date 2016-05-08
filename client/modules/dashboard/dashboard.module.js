/**
 * Module for dashboard functionality.
 */

define([
    'angular',
    'angular-ui-router',
    'modules/dashboard/dashboard.routes',
    'modules/dashboard/dashboard.controller',
    'modules/project/project.module'
], function(angular, uiRouterModule, dashboardRouteConfig, DashboardCtrl, projectModule) {
    'use strict';

    return angular.module('app.dashboard', ['ui.router', projectModule.name])
        .config(dashboardRouteConfig)
        .controller('DashboardCtrl', DashboardCtrl);
})