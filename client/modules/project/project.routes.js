/**
 * Route configurations for project functionality. 
 */

define([

], function() {
    'use strict';
    
    projectRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function projectRouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.project', {
                abstract: true,
                template: '<project></project>'
            })
            .state('app.project.list-detail', {
                url: 'project',
                template: '<project-list-detail></project-list-detail>',
                params: {
                    selectedProjectId: null
                }
            })
            .state('app.project.add', {
                url: 'project/add',
                template: '<project-form></project-form>',
                params: {
                    previousState: null
                }
            })
            .state('app.project.edit', {
                url: 'project/:id',
                template: '<project-form></project-form>',
                params: {
                    previousState: null
                }
            });

        $urlRouterProvider.otherwise('/project');
    }

    return projectRouteConfig;
});