/**
 * Module for project functionalities.
 */

define([
    'angular',
    'modules/client/client.module',
    'modules/employee/employee.module',
    'modules/shared/shared.module',
    './project.component',
    './project.service',
    './project-list-detail.component',
    './project-form.component',
    './project-employee-list.component'
], function(angular, clientModule, employeeModule, sharedModule, projectComponentConfig, 
    ProjectService, projectListDetailComponentConfig, projectFormComponentConfig, projectEmployeeListComponentConfig) {
    'use strict';

    return angular.module('app.project', ['ngComponentRouter', clientModule.name, employeeModule.name, sharedModule.name])
        .service(ProjectService.NAME, ProjectService)
        .component(projectComponentConfig.NAME, projectComponentConfig)
        .component(projectListDetailComponentConfig.NAME, projectListDetailComponentConfig)
        .component(projectFormComponentConfig.NAME, projectFormComponentConfig)
        .component(projectEmployeeListComponentConfig.NAME, projectEmployeeListComponentConfig);
});