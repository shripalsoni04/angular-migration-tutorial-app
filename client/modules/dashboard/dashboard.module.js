/**
 * Module for dashboard functionality.
 */

define([
    'angular',
    'angular-ui-router',
    './dashboard.routes',
    './dashboard.controller',
    'modules/project/project.module'
], function(angular, uiRouterModule, dashboardRouteConfig, DashboardCtrl, projectModule) {
    'use strict';

    return angular.module('app.dashboard', ['ui.router', projectModule.name])
        .config(dashboardRouteConfig)
        .controller('DashboardCtrl', DashboardCtrl);
})