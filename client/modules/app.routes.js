/**
 * Routes for app module.
 */

define([
    
], function() {
    'use strict';
    
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                template: '<app></app>'
            });

        $urlRouterProvider.otherwise('/dashboard');
    }
    return RouteConfig;
});