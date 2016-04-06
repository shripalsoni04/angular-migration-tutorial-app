define(function() {
    function ProjectListDetailCtrl(Project) {
        var vm = this;
        vm.lstProjects = [];
        vm.selectedProject = null;
        vm.filterText = '';
        
        vm._loadProjectList = function() {
            return Project.get().then(function(lstProjects) {
                Array.prototype.push.apply(vm.lstProjects, lstProjects);
                vm.selecteFirstProject();
            });
        };
        
        vm.selecteFirstProject = function(){
            vm.selectedProject =  vm.lstProjects[0];   
        };
        
        vm.showDetail = function(project){
            vm.selectedProject = project;
        };
        
        vm.init = function() {
            vm._loadProjectList();
        };

        vm.init();
    }

    ProjectListDetailCtrl.$inject = ['Project'];
    return ProjectListDetailCtrl;
});