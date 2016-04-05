define(function(){
    function projectRouteConfig($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app.project.list-detail', {
                url: '/',
                templateUrl: 'modules/project/project-list-detail.html',
                controller: 'ProjectListDetailCtrl',
                controllerAs: 'projectListDetailCtrl'
            })
        $urlRouterProvider.otherwise('/');
    }
    projectRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return projectRouteConfig;
});