define([
    'modules/project/project.model'
],
function(ProjectModel){
    function ProjectFormCtrl($stateParams, Project){
        var vm = this;
        vm.project = null;
        
        vm.loadProjectById = function(projectId){
            return Project.getById(projectId);
        };
        
        vm.init = function(){
            var projectId = $stateParams.id;
            if(projectId){
                vm.loadProjectById(projectId).then(function(project){
                    vm.project = project;
                });
            }else{
                vm.project = new ProjectModel();
            }
        };
        
        vm.init();
        
    }
    ProjectFormCtrl.$inject = ['$stateParams', 'Project'];
    return ProjectFormCtrl; 
});