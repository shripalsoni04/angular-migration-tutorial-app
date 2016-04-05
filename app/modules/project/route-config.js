define(function(){
    function projectRouteConfig($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app.project', {
                abstract: true,
                templateUrl: 'modules/project/project.html',
                controller: 'ProjectCtrl',
                controllerAs: 'projectCtrl'
            })
            .state('app.project.list-detail', {
                url: 'project',
                templateUrl: 'modules/project/project-list-detail.html',
                controller: 'ProjectListDetailCtrl',
                controllerAs: 'projectListDetailCtrl'
            });
            
            $urlRouterProvider.otherwise('/project');
    }
    projectRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return projectRouteConfig;
});