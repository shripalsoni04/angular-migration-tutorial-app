/**
 * Factory to provide BaseService class to have common
 * functionality of common api methods.
 */

define([
    './base-service'
], function (BaseService) {
    'use strict';

    baseServiceFactory.$inject = ['$http', 'Exception'];

    function baseServiceFactory($http, Exception) {
        BaseService.$http = $http;
        BaseService.Exception = Exception;
        return BaseService;
    }

    return baseServiceFactory;
})