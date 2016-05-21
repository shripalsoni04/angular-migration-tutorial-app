define([
    '../shared/config',
    '../../mock-data/project',
    './dashboard.module',
    './dashboard.component'
], function (oConfig, projectMockData, dashboardModule, dashboardComponentConfig) {
    'use strict';

    describe('Dashbard Controller', function(){
       
       var ctrl, $httpBackend;
       beforeEach(module(dashboardModule.name));
       
       beforeEach(inject(function($componentController, _$httpBackend_){
           $httpBackend = _$httpBackend_;
           $httpBackend.expectGET(oConfig.apiEndPoint+'project').respond({data: projectMockData});
           ctrl = $componentController(dashboardComponentConfig.NAME);
           ctrl.$onInit();
           $httpBackend.flush();
       }));
       
       it('should load active project list ', function(){
          expect(ctrl.lstActiveProjects.length).toBeDefined(); 
       });
    });
});