/**
 * Service for handling backend communication of employee entity. 
 */

define([
    './employee.model',
    '../shared/base-service.factory'
], function(EmployeeAPIModels, baseServiceFactory) {
    'use strict';
    
    EmployeeService.NAME = 'EmployeeService';
    EmployeeService.$inject = [baseServiceFactory.NAME];
    function EmployeeService(BaseService) {
        BaseService.call(this, 'employee', EmployeeAPIModels);
    }
    
    return EmployeeService;
});