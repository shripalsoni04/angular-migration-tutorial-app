/**
 * Module for dashboard functionality.
 */

define([
    'angular',
    'angular-ui-router',
    'modules/project/project.module',
    './dashboard.routes',
    './dashboard.controller'
], function(angular, uiRouterModule, projectModule, dashboardRouteConfig, DashboardCtrl) {
    'use strict';
    
    return angular.module('app.dashboard', ['ui.router', projectModule.name])
        .config(dashboardRouteConfig)
        .controller(DashboardCtrl.NAME, DashboardCtrl);
})