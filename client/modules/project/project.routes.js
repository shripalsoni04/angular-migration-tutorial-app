/**
 * Route configurations for project functionality. 
 */

define([
    './project.controller',
    './project-list-detail.controller',
    './project-form.controller'
], function(ProjectCtrl, ProjectListDetailCtrl, ProjectFormCtrl) {
    'use strict';
    
    projectRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function projectRouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.project', {
                abstract: true,
                templateUrl: 'modules/project/project.html',
                controller: ProjectCtrl.NAME,
                controllerAs: 'vm'
            })
            .state('app.project.list-detail', {
                url: 'project',
                templateUrl: 'modules/project/project-list-detail.html',
                controller: ProjectListDetailCtrl.NAME,
                controllerAs: 'vm',
                params: {
                    selectedProjectId: null
                }
            })
            .state('app.project.add', {
                url: 'project/add',
                templateUrl: 'modules/project/project-form.html',
                controller: ProjectFormCtrl.NAME,
                controllerAs: 'vm',
                params: {
                    previousState: null
                }
            })
            .state('app.project.edit', {
                url: 'project/:id',
                templateUrl: 'modules/project/project-form.html',
                controller: ProjectFormCtrl.NAME,
                controllerAs: 'vm',
                params: {
                    previousState: null
                }
            });

        $urlRouterProvider.otherwise('/project');
    }

    return projectRouteConfig;
});