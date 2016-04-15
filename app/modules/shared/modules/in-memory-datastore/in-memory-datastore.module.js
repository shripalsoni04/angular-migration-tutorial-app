/**
 * Module for simulating some of the $http methods by storing data in memory.
 */

define([
    'angular',
    './in-memory-datastore.service'
],
    function(angular, InMemoryDatastoreService) {
        'use strict';

        return angular.module('inMemoryDatastore', [])
            .value('inMemoryDatastorePath', '')
            .value('inMemoryDatastoreApiEndPoint', '')
            .service('InMemoryDatastore', InMemoryDatastoreService);
    });