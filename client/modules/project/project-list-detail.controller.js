/**
 * Controller for showing project list and selected project's details. 
 */

define([
    'lodash',
    './project.service'
],function(_, ProjectService) {
    'use strict';
    
    ProjectListDetailCtrl.NAME = 'ProjectListDetailCtrl';
    ProjectListDetailCtrl.$inject = ['$state', '$stateParams', ProjectService.NAME];
    function ProjectListDetailCtrl($state, $stateParams, ProjectService) {
        var vm = this;
        vm.lstProjects = [];
        vm.selectedProject = null;
        vm.filterText = '';

        vm.showDetail = showDetail;
        vm.addProject = addProject;
        vm.editProject = editProject;
        vm.deleteProject = deleteProject;

        function addProject() {
            $state.go('app.project.add', {previousState: 'app.project.list-detail'});
        }

        function editProject(projectId){
            $state.go('app.project.edit', {id: projectId, previousState: 'app.project.list-detail'}); 
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

        function init() {
            loadProjectList().then(function(){
                // if this state is navigated from project-form state, it will have selectedProjectId parameter.
                // If it is available, making that project as selected.
                var selectedProjectId = $stateParams.selectedProjectId;
                if(selectedProjectId){
                    showDetail(_.find(vm.lstProjects, {id: selectedProjectId}))
                }else{
                    selectFirstProject();
                }
            });
        }

        init();
    }
    return ProjectListDetailCtrl;
});