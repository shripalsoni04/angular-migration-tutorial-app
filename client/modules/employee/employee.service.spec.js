define([
    './employee.module',
    'modules/shared/config',
    'mock-data/employee'
], function(employeeModule, oConfig, employeeMockData){
   'use strict';
   
   describe('Employee Service', function(){
        var EmployeeService, $httpBackend;
        
        beforeEach(module(employeeModule.name));
        
        beforeEach(inject(function(_EmployeeService_, _$httpBackend_){
            EmployeeService = _EmployeeService_;
            $httpBackend = _$httpBackend_;
        }));
        
        it('end point should be ', function(){
           expect(EmployeeService.url).toBe(oConfig.apiEndPoint+'employee'); 
        }); 
        
        it('get api call should return list ', function(){
            $httpBackend.expectGET(oConfig.apiEndPoint+'employee').respond({data: employeeMockData});
            
            EmployeeService.get().then(function(result){
                expect(result.length).toBeDefined();
            });
            
            $httpBackend.flush();
        }); 
   });
});