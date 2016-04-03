define(function() {
    function RouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('App', {
                url: '/',
                templateUrl: 'modules/app.html',
                controller: 'AppCtrl',
                controllerAs: 'appCtrl'
            })

        $urlRouterProvider.otherwise('/');
    }
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return RouteConfig;
});