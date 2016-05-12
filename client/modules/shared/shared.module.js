/**
 * Module containing common functionalities that can be shared with other modules.
 */

define([
    'angular',
    './in-memory-datastore/in-memory-datastore.module',
    './exception/exception.module',
    './logger/logger.module'
], function (angular, inMemoryDatastoreModule, exceptionModule, loggerModule) {
    'use strict';

    return angular.module('app.shared', [
        inMemoryDatastoreModule.name,
        exceptionModule.name,
        loggerModule.name
    ]);
});