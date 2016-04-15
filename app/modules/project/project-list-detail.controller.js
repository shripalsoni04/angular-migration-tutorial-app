/**
 * Controller for showing project list and selected project's details. 
 */

define(function() {
    'use strict';

    function ProjectListDetailCtrl($state, Project) {
        var vm = this;
        vm.lstProjects = [];
        vm.selectedProject = null;
        vm.filterText = '';

        vm.showDetail = showDetail;
        vm.addProject = addProject;
        vm.deleteProject = deleteProject;

        function addProject() {
            $state.go('app.project.add');
        }

        function deleteProject(oProject) {
            if (confirm('Are you sure you want to delete this project?')) {
                Project.delete(oProject).then(function() {
                    loadProjectList();
                });
            }
        }

        function showDetail(oProject) {
            vm.selectedProject = oProject;
        }

        function loadProjectList() {
            return Project.get().then(function(lstProjects) {
                vm.lstProjects.length = 0;
                Array.prototype.push.apply(vm.lstProjects, lstProjects);
                selectFirstProject();
            });
        };

        function selectFirstProject() {
            vm.selectedProject = vm.lstProjects[0];
        };

        function init() {
            loadProjectList();
        };

        init();
    }

    ProjectListDetailCtrl.$inject = ['$state', 'Project'];
    return ProjectListDetailCtrl;
});