define([
   'angular',
   'modules/employee/employee.service'
], function(angular, EmployeeService){
    return angular.module('app.employee', [])
        .service('Employee', EmployeeService);
});