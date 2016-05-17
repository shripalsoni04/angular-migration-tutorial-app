/**
 * Route configurations for dashboard functionality.
 */

define([
     
], function() {
    'use strict';
    
    dashboardRouteConfig.$inject = ['$stateProvider'];
    function dashboardRouteConfig($stateProvider) {
        'use strict';

        $stateProvider
            .state('app.dashboard', {
                url: 'dashboard',
                template: '<dashboard></dashboard>'
            });
    }

    return dashboardRouteConfig;
});