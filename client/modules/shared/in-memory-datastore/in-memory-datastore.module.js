/**
 * Module for simulating some of the $http methods by storing data in memory.
 */

define([
    'angular',
    'modules/shared/exception/exception.module',
    './in-memory-datastore.service'
],
    function(angular, exceptionModule, InMemoryDatastoreService) {
        'use strict';

        return angular.module('app.shared.inMemoryDatastore', [exceptionModule.name])
            .value('inMemoryDatastorePath', '')
            .value('inMemoryDatastoreApiEndPoint', '')
            .service('InMemoryDatastore', InMemoryDatastoreService);
    });