/**
 * Controller for dashboard screen.
 */

define(function() {
    'use strict';

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
    DashboardCtrl.$inject = ['$state', 'ProjectService'];
    return DashboardCtrl;
});