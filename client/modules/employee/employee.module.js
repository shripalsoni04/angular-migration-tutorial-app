/**
 * Module for employee functionality.
 */

define([
    'angular',
    'modules/shared/shared.module',
    'modules/employee/employee.service'
], function(angular, sharedModule, EmployeeService) {
    'use strict';

    return angular.module('app.employee', [sharedModule.name])
        .service('EmployeeService', EmployeeService);
});