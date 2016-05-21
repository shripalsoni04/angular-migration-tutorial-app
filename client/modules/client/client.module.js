define([
   'angular',
   '../shared/shared.module',
   './client.service'
], function(angular, sharedModule, ClientService){
    'use strict';
    
    return angular.module('app.client', [sharedModule.name])
        .service(ClientService.NAME, ClientService);
});