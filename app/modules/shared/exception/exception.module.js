define([
    'angular',
    'modules/shared/logger/logger.module',
    'modules/shared/exception/exception.service'
], function (angular, loggerModule, ExceptionService) {
    'use strict';

    return angular.module('app.shared.exception', [loggerModule.name])
        .service('Exception', ExceptionService);

});