define([
    'angular',
    'modules/project/project.module',
    'mock-data/employee'
], function (angular, projectModule, employeeMockData) {
    'use strict';

    describe('projectEmployeeList Directive', function () {
        
        beforeEach(module('templates'));    // module which contains converted html to js files.
        beforeEach(module(projectModule.name));

        var scope, ctrl, element;

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            scope.isShowAction = true;
            scope.employees = employeeMockData;
            element = angular.element('<project-employee-list is-show-action="false" employees="employees"></project-employee-list>')
            $compile(element)(scope);
            scope.$digest();
            ctrl = element.controller('projectEmployeeList');   // this should be directive's name.
        }));

        it('should set isShowAction based on input', function () {
            expect(ctrl.isShowAction).toBe(false);
        });
        
        it('should set employees list based on input', function () {
            expect(ctrl.employees.length).toBe(5);
        });
        
        it('should remove employees from list on delete', function () {
            var oldTotalEmp = ctrl.employees.length;
            ctrl.removeEmployee(0);
            expect(ctrl.employees.length).toBe(oldTotalEmp - 1);
        });
    });
});