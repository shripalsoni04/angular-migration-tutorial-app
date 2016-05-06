/**
 * Module for project functionalities.
 */

define([
    'angular',
    'angular-ui-router',
    'modules/project/project.routes',
    'modules/project/project.controller',
    'modules/project/project.service',
    'modules/project/project-list-detail.controller',
    'modules/project/project-form.controller',
    'modules/project/project-employee-list.directive'
], function(angular, uiRouterModule, projectRouteConfig, ProjectCtrl, ProjectService, ProjectListDetailCtrl, ProjectFormCtrl, projectEmployeeListDirective) {
    'use strict';

    return angular.module('app.project', ['ui.router'])
        .config(projectRouteConfig)
        .service('ProjectService', ProjectService)
        .controller('ProjectCtrl', ProjectCtrl)
        .controller('ProjectListDetailCtrl', ProjectListDetailCtrl)
        .controller('ProjectFormCtrl', ProjectFormCtrl)
        .directive('projectEmployeeList', projectEmployeeListDirective);
});