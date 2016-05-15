/**
 * Service for handling backend communication of client entity. 
 */

define([
    './client.model'
], function(ClientAPIModels) {
    'use strict';

    ClientService.$inject = ['baseServiceFactory'];

    function ClientService(BaseService) {
        BaseService.call(this, 'client', ClientAPIModels);
    }

    return ClientService;
});