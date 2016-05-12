define([
    'modules/shared/config',
    'mock-data/project',
    './dashboard.module'
], function (oConfig, projectMockData, dashboardModule) {
    'use strict';

    describe('Dashbard Controller', function(){
       
       var ctrl, $httpBackend;
       beforeEach(module(dashboardModule.name));
       
       beforeEach(inject(function($controller, _$httpBackend_){
           $httpBackend = _$httpBackend_;
           $httpBackend.expectGET(oConfig.apiEndPoint+'project').respond({data: projectMockData});
           ctrl = $controller('DashboardCtrl');
           $httpBackend.flush();
       }));
       
       it('should load active project list ', function(){
          expect(ctrl.lstActiveProjects.length).toBeDefined(); 
       });
    });
});