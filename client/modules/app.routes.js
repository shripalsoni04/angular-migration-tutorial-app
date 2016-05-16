/**
 * Routes for app module.
 */

define([
    './app.controller'
], function(AppCtrl) {
    'use strict';
    
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'modules/app.html',
                controller: AppCtrl.NAME,
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/dashboard');
    }
    return RouteConfig;
});