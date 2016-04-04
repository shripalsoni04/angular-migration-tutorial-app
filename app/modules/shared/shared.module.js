define([
   'angular',
   './modules/in-memory-datastore/in-memory-datastore.module'
], function(angular, inMemoryDatastoreModule){
    return angular.module('app.shared', [inMemoryDatastoreModule.name]);
});