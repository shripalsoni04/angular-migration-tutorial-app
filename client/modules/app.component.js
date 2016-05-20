/**
 * Root controller for the application.
 */

define([
    './dashboard/dashboard.component',
    './project/project.component'
], function(dashboardComponentConfig, projectComponentConfig) {
    'use strict';
    
    AppCtrl.$inject = ['$rootRouter'];
    function AppCtrl($rootRouter) {
        var vm = this;
        vm.moduleName = 'Dashboard';
        vm.$onInit = $onInit;

        function getModuleNameByUrl(url) {
            return url.startsWith('project') ? 'Projects' : 'Dashboard';
        }

        function $onInit() {
            $rootRouter.subscribe(function(url){
                vm.moduleName = getModuleNameByUrl(url);
            });
        }
    }
    
    return {
        NAME: 'app',
        controller: AppCtrl,
        templateUrl: 'modules/app.component.html',
        $routeConfig: [
            {path: '/dashboard', name: 'Dashboard', component: dashboardComponentConfig.NAME, useAsDefault: true},
            {path: '/project/...', name: 'Project', component: projectComponentConfig.NAME}
        ]
    };
});