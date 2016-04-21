/**
 * Module for dashboard functionality.
 */

define([
    'angular',
    'modules/dashboard/dashboard.routes',
    'modules/dashboard/dashboard.controller',
    'modules/project/project.module'
], function(angular, dashboardRouteConfig, DashboardCtrl, projectModule) {
    'use strict';

    return angular.module('app.dashboard', [projectModule.name])
        .config(dashboardRouteConfig)
        .controller('DashboardCtrl', DashboardCtrl);
})