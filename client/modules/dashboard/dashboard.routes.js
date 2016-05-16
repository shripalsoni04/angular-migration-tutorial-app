/**
 * Route configurations for dashboard functionality.
 */

define([
   './dashboard.controller' 
], function(DashboardCtrl) {
    'use strict';
    
    dashboardRouteConfig.$inject = ['$stateProvider'];
    function dashboardRouteConfig($stateProvider) {
        'use strict';

        $stateProvider
            .state('app.dashboard', {
                url: 'dashboard',
                templateUrl: 'modules/dashboard/dashboard.html',
                controller: DashboardCtrl.NAME,
                controllerAs: 'vm'
            });
    }

    return dashboardRouteConfig;
});