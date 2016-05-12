define([
    'lodash',
    'modules/shared/config',
    'mock-data/project',
    'mock-data/client',
    'mock-data/employee',
    './project.module'
], function (_, oConfig, projectMockData, clientMockData, employeeMockData, projectModule) {
   'use strict';

    describe('Project Form Controller In Create/Update Mode', function () {
        beforeEach(module(projectModule.name));

        var ctrl, $httpBackend, ProjectService, $q;
        beforeEach(inject(function ($controller, _$httpBackend_, _ProjectService_, _$q_) {
            $httpBackend = _$httpBackend_;
            ProjectService = _ProjectService_;
            $q = _$q_;
            $httpBackend.expectGET(oConfig.apiEndPoint + 'client').respond({ data: clientMockData });
            $httpBackend.expectGET(oConfig.apiEndPoint + 'employee').respond({ data: employeeMockData });
            ctrl = $controller('ProjectFormCtrl');
            $httpBackend.flush();
        }));

        it('should load clients dropdown', function () {
            expect(ctrl.lstClients.length).toBe(clientMockData.length);
        });

        it('should load employee dropdown', function () {
            expect(ctrl.lstEmployees.length).toBe(employeeMockData.length);
        });

        it('should add employee to project on add employee', function () {
            var beforeAddEmpLength = ctrl.project.employees.length;
            ctrl.addEmployeeToProject(employeeMockData[0]);
            expect(ctrl.project.employees.length).toBe(beforeAddEmpLength + 1);
        });

        it('should update unmapped employe list on employee addition to project', function () {
            var beforeAddUnmappedEmpLength = ctrl.unmappedEmployees.length;
            ctrl.addEmployeeToProject(employeeMockData[0]);
            expect(ctrl.unmappedEmployees.length).toBe(beforeAddUnmappedEmpLength - 1);
        });

        it('should save project', function () {
            spyOn(ProjectService, "save").and.returnValue($q.when({}));
            ctrl.save();
            expect(ProjectService.save).toHaveBeenCalled();
        });
    });

    describe('Project Form Controller In Create Mode ', function () {
        beforeEach(module(projectModule.name));

        var ctrl;
        beforeEach(inject(function ($controller) {
            ctrl = $controller('ProjectFormCtrl');
        }));

        it('should create blank project without id', function () {
            expect(ctrl.project.id).toBeNull();
        });
    });

    describe('Project Form Controller In Update Mode', function () {
        beforeEach(module(projectModule.name));

        var ctrl, $httpBackend;
        var projectId = 1;

        beforeEach(inject(function ($controller, _$httpBackend_) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET(oConfig.apiEndPoint + 'project/' + projectId).respond({ data: _.find(projectMockData, { id: projectId }) });
            $httpBackend.expectGET(oConfig.apiEndPoint + 'client').respond({ data: clientMockData });
            $httpBackend.expectGET(oConfig.apiEndPoint + 'employee').respond({ data: employeeMockData });
            ctrl = $controller('ProjectFormCtrl', { $stateParams: { id: projectId } });
            $httpBackend.flush();
        }));

        it('should load project detail as per state param id', function () {
            expect(ctrl.project.id).toBe(projectId);
        });
    });
})