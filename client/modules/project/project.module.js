/**
 * Module for project functionalities.
 */

define([
    'angular',
    'angular-ui-router',
    'modules/client/client.module',
    'modules/employee/employee.module',
    'modules/shared/shared.module',
    './project.routes',
    './project.controller',
    './project.service',
    './project-list-detail.controller',
    './project-form.controller',
    './project-employee-list.directive'
], function(angular, uiRouterModule, clientModule, employeeModule, sharedModule, projectRouteConfig, ProjectCtrl, ProjectService, ProjectListDetailCtrl, ProjectFormCtrl, projectEmployeeListDirective) {
    'use strict';

    return angular.module('app.project', ['ui.router', clientModule.name, employeeModule.name, sharedModule.name])
        .config(projectRouteConfig)
        .service('ProjectService', ProjectService)
        .controller('ProjectCtrl', ProjectCtrl)
        .controller('ProjectListDetailCtrl', ProjectListDetailCtrl)
        .controller('ProjectFormCtrl', ProjectFormCtrl)
        .directive('projectEmployeeList', projectEmployeeListDirective);
});