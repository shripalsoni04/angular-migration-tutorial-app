/**
 * Service for handling backend communication of client entity. 
 */

define([
    './client.model',
    '../shared/base-service.factory'
], function(ClientAPIModels, baseServiceFactory) {
    'use strict';

    ClientService.NAME = 'ClientService';
    ClientService.$inject = [baseServiceFactory.NAME];  
    function ClientService(BaseService) {
        BaseService.call(this, 'client', ClientAPIModels);
    }
    
    return ClientService;
});