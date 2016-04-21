/**
 * Module for employee functionality.
 */

define([
    'angular',
    'modules/employee/employee.service'
], function(angular, EmployeeService) {
    'use strict';

    return angular.module('app.employee', [])
        .service('EmployeeService', EmployeeService);
});