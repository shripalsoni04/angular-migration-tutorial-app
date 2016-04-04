define([
    'angular',
    './in-memory-datastore.service'
],
function(angular, InMemoryDatastoreService){
    return angular.module('inMemoryDatastore', [])
        .value('inMemoryDatastorePath', '')
        .value('inMemoryDatastoreApiEndPoint', '')
        .service('InMemoryDatastore', InMemoryDatastoreService);
});