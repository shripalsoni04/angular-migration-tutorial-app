/**
 * Module for employee functionality.
 */

define([
    'angular',
    'modules/shared/shared.module',
    './employee.service'
], function(angular, sharedModule, EmployeeService) {
    'use strict';

    return angular.module('app.employee', [sharedModule.name])
        .service(EmployeeService.NAME, EmployeeService);
});