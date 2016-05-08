/**
 * Module for project functionalities.
 */

define([
    'angular',
    'angular-ui-router',
    'modules/shared/shared.module',
    'modules/project/project.routes',
    'modules/project/project.controller',
    'modules/project/project.service',
    'modules/project/project-list-detail.controller',
    'modules/project/project-form.controller',
    'modules/project/project-employee-list.directive'
], function(angular, uiRouterModule, sharedModule, projectRouteConfig, ProjectCtrl, ProjectService, ProjectListDetailCtrl, ProjectFormCtrl, projectEmployeeListDirective) {
    'use strict';

    return angular.module('app.project', ['ui.router', sharedModule.name])
        .config(projectRouteConfig)
        .service('ProjectService', ProjectService)
        .controller('ProjectCtrl', ProjectCtrl)
        .controller('ProjectListDetailCtrl', ProjectListDetailCtrl)
        .controller('ProjectFormCtrl', ProjectFormCtrl)
        .directive('projectEmployeeList', projectEmployeeListDirective);
});