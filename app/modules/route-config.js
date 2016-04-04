define(function() {
    function RouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('App', {
                url: '/',
                templateUrl: 'modules/app.html',
                controller: 'AppCtrl',
                controllerAs: 'appCtrl'
            })
            .state('App.Dashboard', {
                parent: 'App',
                url: 'dashboard',
                templateUrl: 'modules/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboardCtrl'
            });

        $urlRouterProvider.otherwise('/dashboard');
    }
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return RouteConfig;
});