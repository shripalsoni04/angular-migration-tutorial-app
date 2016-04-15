/**
 * Routes for app module.
 */

define(function() {
    function RouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'modules/app.html',
                controller: 'AppCtrl',
                controllerAs: 'appCtrl'
            });

        $urlRouterProvider.otherwise('/dashboard');
    }
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return RouteConfig;
});