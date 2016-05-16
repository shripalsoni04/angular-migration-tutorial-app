/**
 * Factory to provide BaseService class to have common
 * functionality of common api methods.
 */

define([
    './base-service',
    './exception/exception.service'
], function (BaseService, ExceptionService) {
    'use strict';

    baseServiceFactory.NAME = 'baseServiceFactory';
    baseServiceFactory.$inject = ['$http', ExceptionService.NAME];
    function baseServiceFactory($http, ExceptionService) {
        BaseService.$http = $http;
        BaseService.Exception = ExceptionService;
        return BaseService;
    }

    return baseServiceFactory;
})