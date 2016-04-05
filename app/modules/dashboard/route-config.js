define(function() {
    function dashboardRouteConfig($stateProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: 'dashboard',
                templateUrl: 'modules/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboardCtrl'
            })
    }

    dashboardRouteConfig.$inject = ['$stateProvider'];
    return dashboardRouteConfig;
});