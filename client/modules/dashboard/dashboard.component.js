/**
 * Controller for dashboard screen.
 */

define([
   'modules/project/project.service' 
], function(ProjectService) {
    'use strict';
    
    DashboardCtrl.$inject = [ProjectService.NAME];  
    function DashboardCtrl(ProjectService) {
        var vm = this;
        vm.lstActiveProjects = [];  // list of active projects

        vm.loadActiveProjects = loadActiveProjects;
        vm.editProject = editProject;
        vm.$onInit = $onInit;

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
            vm.$router.navigate(['Project', 'ProjectUpdate', {id: projectId, previousState: 'Dashboard'}]);
        }
        
        function $onInit() {
            vm.loadActiveProjects();
        }
    }
    
    return {
        NAME: 'dashboard',
        controller: DashboardCtrl,
        templateUrl: 'modules/dashboard/dashboard.component.html',
        bindings: {
            $router: '<'
        }
    };
});