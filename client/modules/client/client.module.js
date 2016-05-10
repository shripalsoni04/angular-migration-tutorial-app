define([
   'angular',
   'modules/shared/shared.module',
   'modules/client/client.service'
], function(angular, sharedModule, ClientService){
    return angular.module('app.client', [sharedModule.name])
        .service('ClientService', ClientService);
});