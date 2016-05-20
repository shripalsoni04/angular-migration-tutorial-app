/**
 * Controller for showing project list and selected project's details. 
 */

define([
    'lodash',
    './project.service'
],function(_, ProjectService) {
    'use strict';
    
    ProjectListDetailCtrl.$inject = [ProjectService.NAME];
    function ProjectListDetailCtrl(ProjectService) {
        var vm = this;
        vm.lstProjects = [];
        vm.selectedProject = null;
        vm.filterText = '';

        vm.showDetail = showDetail;
        vm.addProject = addProject;
        vm.editProject = editProject;
        vm.deleteProject = deleteProject;
        vm.$routerOnActivate = $routerOnActivate;

        function addProject() {
            vm.$router.navigate(['ProjectAdd', {previousState: 'ProjectListDetail'}]);
        }

        function editProject(projectId){
            vm.$router.navigate(['ProjectUpdate', {id: projectId, previousState: 'ProjectListDetail'}]); 
        }
        
        function deleteProject(oProject) {
            if (confirm('Are you sure you want to delete this project?')) {
                ProjectService.delete(oProject).then(function() {
                    loadProjectList().then(function(){
                        selectFirstProject();
                    });
                });
            }
        }

        function showDetail(oProject) {
            vm.selectedProject = oProject;
        }

        function loadProjectList() {
            return ProjectService.get().then(function(lstProjects) {
                vm.lstProjects.length = 0;
                Array.prototype.push.apply(vm.lstProjects, lstProjects);
                selectFirstProject();
            });
        }

        function selectFirstProject() {
            vm.selectedProject = vm.lstProjects[0];
        }
        
        function $routerOnActivate(next){
            loadProjectList().then(function(){
                // if this state is navigated from project-form state, it will have selectedProjectId parameter.
                // If it is available, making that project as selected.
                var selectedProjectId;                
                selectedProjectId = next.params.selectedProjectId;
                if(selectedProjectId){
                    showDetail(_.find(vm.lstProjects, {id: +selectedProjectId}))
                }else{
                    selectFirstProject();
                }
            });  
        }
    }
    
    return {
        NAME: 'projectListDetail',
        controller: ProjectListDetailCtrl,
        templateUrl: 'modules/project/project-list-detail.component.html',
        bindings: {
            $router: '<'
        }    
    };
});