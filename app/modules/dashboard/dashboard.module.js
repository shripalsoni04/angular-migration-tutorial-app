define([
    'angular',
    'modules/dashboard/dashboard.controller',
    'modules/project/project.module'
], function(angular, DashboardCtrl, projectModule){
    return angular.module('app.dashboard', [projectModule.name])
        .controller('DashboardCtrl', DashboardCtrl);
})