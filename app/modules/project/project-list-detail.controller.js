define(function() {
    function ProjectListDetailCtrl($state, Project) {
        var vm = this;
        vm.lstProjects = [];
        vm.selectedProject = null;
        vm.filterText = '';

        vm._loadProjectList = function() {
            return Project.get().then(function(lstProjects) {
                vm.lstProjects.length = 0;
                Array.prototype.push.apply(vm.lstProjects, lstProjects);
                vm.selecteFirstProject();
            });
        };

        vm.selecteFirstProject = function() {
            vm.selectedProject = vm.lstProjects[0];
        };

        vm.showDetail = function(oProject) {
            vm.selectedProject = oProject;
        };

        vm.addProject = function() {
            $state.go('app.project.add');
        };

        vm.deleteProject = function(oProject) {
            if (confirm('Are you sure you want to delete this project?')) {
                Project.delete(oProject).then(function() {
                    vm._loadProjectList();
                });
            }

        };

        vm.init = function() {
            vm._loadProjectList();
        };

        vm.init();
    }

    ProjectListDetailCtrl.$inject = ['$state', 'Project'];
    return ProjectListDetailCtrl;
});