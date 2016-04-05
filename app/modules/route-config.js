define(function() {
    function RouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'modules/app.html',
                controller: 'AppCtrl',
                controllerAs: 'appCtrl'
            })
            .state('app.dashboard', {
                url: 'dashboard',
                templateUrl: 'modules/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboardCtrl'
            })
            .state('app.project', {
                url: 'project',
                templateUrl: 'modules/project/project.html',
                controller: 'ProjectCtrl',
                controllerAs: 'projectCtrl'
            });

        $urlRouterProvider.otherwise('/dashboard');
    }
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return RouteConfig;
});