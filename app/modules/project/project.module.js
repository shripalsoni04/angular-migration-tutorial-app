define([
   'angular',
   'modules/project/project.controller',
   'modules/project/project.service'
], function(angular, ProjectCtrl, ProjectService){
    return angular.module('app.project', [])
        .service('Project', ProjectService)
        .controller('ProjectCtrl', ProjectCtrl);
});