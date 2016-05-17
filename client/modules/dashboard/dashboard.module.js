/**
 * Module for dashboard functionality.
 */

define([
    'angular',
    'angular-ui-router',
    'modules/project/project.module',
    './dashboard.routes',
    './dashboard.component'
], function(angular, uiRouterModule, projectModule, dashboardRouteConfig, dashboardComponentConfig) {
    'use strict';
    
    return angular.module('app.dashboard', ['ui.router', projectModule.name])
        .config(dashboardRouteConfig)
        .component(dashboardComponentConfig.NAME, dashboardComponentConfig);
})