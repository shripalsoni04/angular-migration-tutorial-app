/**
 * Module containing common functionalities that can be shared with other modules.
 */

define([
    'angular',
    './modules/in-memory-datastore/in-memory-datastore.module'
], function(angular, inMemoryDatastoreModule) {
    'use strict';

    return angular.module('app.shared', [inMemoryDatastoreModule.name]);
});