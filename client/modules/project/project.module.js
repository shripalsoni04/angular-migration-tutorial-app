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
    './project.component',
    './project.service',
    './project-list-detail.component',
    './project-form.component',
    './project-employee-list.directive'
], function(angular, uiRouterModule, clientModule, employeeModule, sharedModule, projectRouteConfig, projectComponentConfig, 
    ProjectService, projectListDetailComponentConfig, projectFormComponentConfig, projectEmployeeListDirective) {
    'use strict';

    return angular.module('app.project', ['ui.router', clientModule.name, employeeModule.name, sharedModule.name])
        .config(projectRouteConfig)
        .service(ProjectService.NAME, ProjectService)
        .component(projectComponentConfig.NAME, projectComponentConfig)
        .component(projectListDetailComponentConfig.NAME, projectListDetailComponentConfig)
        .component(projectFormComponentConfig.NAME, projectFormComponentConfig)
        .directive(projectEmployeeListDirective.NAME, projectEmployeeListDirective);
});