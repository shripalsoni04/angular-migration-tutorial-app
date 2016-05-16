/**
 * Module containing common functionalities that can be shared with other modules.
 */

define([
    'angular',
    './exception/exception.module',
    './logger/logger.module',
    './base-service.factory'
], function (angular, exceptionModule, loggerModule, baseServiceFactory) {
    'use strict';

    return angular.module('app.shared', [
        exceptionModule.name,
        loggerModule.name
    ])
    .factory(baseServiceFactory.NAME, baseServiceFactory);
});