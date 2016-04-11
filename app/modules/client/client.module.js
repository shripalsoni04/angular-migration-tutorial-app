define([
   'angular',
   'modules/client/client.service'
], function(angular, ClientService){
    return angular.module('app.client', [])
        .service('Client', ClientService);
});