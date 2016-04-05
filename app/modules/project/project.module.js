define([
   'angular',
   'modules/project/route-config',
   'modules/project/project.controller',
   'modules/project/project.service',
   'modules/project/project-list-detail.controller'
], function(angular, projectRouteConfig, ProjectCtrl, ProjectService, ProjectListDetailCtrl){
    return angular.module('app.project', [])
        .config(projectRouteConfig)
        .service('Project', ProjectService)
        .controller('ProjectCtrl', ProjectCtrl)
        .controller('ProjectListDetailCtrl', ProjectListDetailCtrl);      
});