define([
   'angular',
   'modules/project/route-config',
   'modules/project/project.controller',
   'modules/project/project.service',
   'modules/project/project-list-detail.controller',
   'modules/project/project-form.controller',
   'modules/project/project-employee-list.directive'
], function(angular, projectRouteConfig, ProjectCtrl, ProjectService, ProjectListDetailCtrl, ProjectFormCtrl, projectEmployeeListDirective){
    return angular.module('app.project', [])
        .config(projectRouteConfig)
        .service('Project', ProjectService)
        .controller('ProjectCtrl', ProjectCtrl)
        .controller('ProjectListDetailCtrl', ProjectListDetailCtrl)
        .controller('ProjectFormCtrl', ProjectFormCtrl)
        .directive('projectEmployeeList', projectEmployeeListDirective);    
});