/**
 * Service for handling backend communication of employee entity. 
 */

define([
    './employee.model'
], function(EmployeeAPIModels) {
    'use strict';
    
    EmployeeService.$inject = ['baseServiceFactory'];
    
    function EmployeeService(BaseService) {
        BaseService.call(this, 'employee', EmployeeAPIModels);
    }
    
    return EmployeeService;
});