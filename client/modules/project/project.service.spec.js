define([
    './project.module',
    '../shared/config',
    '../../mock-data/project',
    'lodash'
], function(projectModule, oConfig, projectMockData, _){
   'use strict';
   
   describe('Project Service', function(){
        var ProjectService, $httpBackend;
        
        beforeEach(module(projectModule.name));
        
        beforeEach(inject(function(_ProjectService_, _$httpBackend_){
            ProjectService = _ProjectService_;
            $httpBackend = _$httpBackend_;
        }));
        
        it('end point should be ', function(){
           expect(ProjectService.url).toBe(oConfig.apiEndPoint+'project'); 
        }); 
        
        it('get method should return list ', function(){
            $httpBackend.expectGET(oConfig.apiEndPoint+'project').respond({data: projectMockData});
            
            ProjectService.get().then(function(result){
                expect(result.length).toBeDefined();
            });
            
            $httpBackend.flush();
        }); 
        
        it('getById method should return object with the id supplied ', function(){
            $httpBackend.expectGET(oConfig.apiEndPoint+'project/1').respond({data: _.find(projectMockData, {id: 1})});
            
            ProjectService.getById(1).then(function(result){
                expect(result.id).toBe(1);
            });
            
            $httpBackend.flush();
        });
        
        it('insert method should return promise with resolve value as object with id', function(){
            $httpBackend.expectPOST(oConfig.apiEndPoint+'project').respond({data: _.find(projectMockData, {id: 4})});
            
            ProjectService.insert({name: 'Project 5', isCompleted: false}).then(function(result){
                expect(result.id).toBeDefined();
            });
            
            $httpBackend.flush();
        });
        
        it('update method should return promise with updated value', function(){
            $httpBackend.expectPUT(oConfig.apiEndPoint+'project/1').respond({data: _.find(projectMockData, {id: 1})});
            
            ProjectService.update({id: 1, name: 'Project 1', isCompleted: true}).then(function(result){
                expect(result.id).toBeDefined();
            });
            
            $httpBackend.flush();
        }); 
        
        it('delete method should call delete api with entity id', function(){
            $httpBackend.expectDELETE(oConfig.apiEndPoint+'project/1').respond({status: 'success'});
            
            ProjectService.delete({id: 1, name: 'Project 1', isCompleted: true}).then(function(response){
                expect(response.data.status).toBe('success');
            });
            
            $httpBackend.flush();
        }); 
        
         it('getActiveProjects method should return list of active projects', function(){
            $httpBackend.expectGET(oConfig.apiEndPoint+'project').respond({data: projectMockData});
            
            ProjectService.getActiveProjects().then(function(result){
                expect(result.length).toBeDefined();
            });
            
            $httpBackend.flush();
        });
   });
});