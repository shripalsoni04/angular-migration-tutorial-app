/**
 * Route configurations for dashboard functionality.
 */

define(function() {
    function dashboardRouteConfig($stateProvider) {
        'use strict';

        $stateProvider
            .state('app.dashboard', {
                url: 'dashboard',
                templateUrl: 'modules/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboardCtrl'
            });
    }

    dashboardRouteConfig.$inject = ['$stateProvider'];
    return dashboardRouteConfig;
});