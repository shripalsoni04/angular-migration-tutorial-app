define([
    './client.module',
    'modules/shared/config',
    'mock-data/client'
], function(clientModule, oConfig, clientMockData){
   'use strict';
   
   describe('Client Service', function(){
        var ClientService, $httpBackend;
        
        beforeEach(module(clientModule.name));
        
        beforeEach(inject(function(_ClientService_, _$httpBackend_){
            ClientService = _ClientService_;
            $httpBackend = _$httpBackend_;
        }));
        
        it('end point should be ', function(){
           expect(ClientService.url).toBe(oConfig.apiEndPoint+'client'); 
        }); 
        
        it('get api call should return list ', function(){
            $httpBackend.expectGET(oConfig.apiEndPoint+'client').respond({data: clientMockData});
            
            ClientService.get().then(function(result){
                expect(result.length).toBeDefined();
            });
            
            $httpBackend.flush();
        }); 
   });
});