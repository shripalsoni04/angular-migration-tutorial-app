/**
 * Module containing common functionalities that can be shared with other modules.
 */

define([
    'angular',
    'modules/shared/in-memory-datastore/in-memory-datastore.module',
    'modules/shared/exception/exception.module',
    'modules/shared/logger/logger.module'
], function (angular, inMemoryDatastoreModule, exceptionModule, loggerModule) {
    'use strict';

    return angular.module('app.shared', [
        inMemoryDatastoreModule.name,
        exceptionModule.name,
        loggerModule.name
    ]);
});