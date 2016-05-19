/**
 * Controller for dashboard screen.
 */

define([
   'modules/project/project.service' 
], function(ProjectService) {
    'use strict';
    
    DashboardCtrl.$inject = ['$state', ProjectService.NAME];  
    function DashboardCtrl($state, ProjectService) {
        var vm = this;
        vm.lstActiveProjects = [];  // list of active projects

        vm.loadActiveProjects = loadActiveProjects;
        vm.editProject = editProject;

        /**
         * Loads active projects list.
         */
        function loadActiveProjects() {
            ProjectService.getActiveProjects().then(function(lstProjects) {
                Array.prototype.push.apply(vm.lstActiveProjects, lstProjects);
            });
        }
        
        /**
         * Opens project form to edit the project.
         */
        function editProject(projectId){
            $state.go('app.project.edit', {id: projectId, previousState: 'app.dashboard'});
        }
        
        function init() {
            vm.loadActiveProjects();
        }

        init();
    }
    
    return {
        NAME: 'dashboard',
        controller: DashboardCtrl,
        templateUrl: 'modules/dashboard/dashboard.component.html'
    };
});