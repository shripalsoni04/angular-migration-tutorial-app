define([
    'modules/shared/config',
    'mock-data/project',
    './project.module'
], function (oConfig, projectMockData, projectModule) {
   'use strict';

    describe('Project List Detail Controller ', function () {
        beforeEach(module(projectModule.name));

        var ctrl, $httpBackend, ProjectService, $q;
        beforeEach(inject(function ($controller, _$httpBackend_, _ProjectService_, _$q_) {
            $httpBackend = _$httpBackend_;
            ProjectService = _ProjectService_;
            $q = _$q_;

            $httpBackend.whenGET(oConfig.apiEndPoint + 'project').respond({ data: projectMockData })
            ctrl = $controller('ProjectListDetailCtrl', { ProjectService: ProjectService });
            $httpBackend.flush();
        }));

        it("should load projects list", function () {
            expect(ctrl.lstProjects.length).toBe(4);
        });

        it("should select first project", function () {
            expect(ctrl.selectedProject.id).toBe(projectMockData[0].id);
        });

        it("should select project", function () {
            ctrl.showDetail(projectMockData[0]);
            expect(ctrl.selectedProject).toBe(projectMockData[0]);
        });

        it('should delete the project', function () {
            spyOn(window, "confirm").and.returnValue(true);
            spyOn(ProjectService, "delete").and.returnValue($q.when());
            ctrl.deleteProject(projectMockData[0]);
            $httpBackend.flush();
            expect(ProjectService.delete).toHaveBeenCalled();
        });
    })
})