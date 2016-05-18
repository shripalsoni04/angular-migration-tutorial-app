define([
    'angular',
    './project.module',
    'mock-data/employee',
    './project-employee-list.component'
], function (angular, projectModule, employeeMockData, projectEmployeListComponentConfig) {
    'use strict';

    describe('projectEmployeeList Directive', function () {
        
        beforeEach(module(projectModule.name));

        var ctrl, $componentController;

        beforeEach(inject(function ($rootScope, _$componentController_) {
            $componentController = _$componentController_;
        }));

        it('should set isShowAction based on input', function () {
            ctrl = $componentController(projectEmployeListComponentConfig.NAME, null, {isShowAction: false});
            expect(ctrl.isShowAction).toBe(false);
        });
        
        it('should set employees list based on input', function () {
            ctrl = $componentController(projectEmployeListComponentConfig.NAME, null, {employees: employeeMockData});
            expect(ctrl.employees.length).toBe(5);
        });
        
        it('should remove employees from list on delete', function () {
            var empRemoveSpy = jasmine.createSpy('empRemoveSpy');
            ctrl = $componentController(projectEmployeListComponentConfig.NAME, null, {employees: employeeMockData, onEmployeeRemove: empRemoveSpy});
            ctrl.removeEmployee(1);
            expect(empRemoveSpy).toHaveBeenCalledWith({employeeId: 1});
        });
    });
});