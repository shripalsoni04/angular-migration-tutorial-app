define([
   'angular',
   'modules/shared/shared.module',
   './client.service'
], function(angular, sharedModule, ClientService){
    return angular.module('app.client', [sharedModule.name])
        .service('ClientService', ClientService);
});