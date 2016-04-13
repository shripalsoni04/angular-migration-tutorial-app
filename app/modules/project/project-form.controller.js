define([
    'modules/project/project.model'
],
function(ProjectModel){
    function ProjectFormCtrl($stateParams, $state, Project, Client, Employee){
        var vm = this;
        vm.project = null;
        vm.lstClients = [];
        vm.lstEmployees = [];
        vm.unmappedEmployees = [];
        
        vm.startDatePicker = {
            isOpen: false
        };
        
        vm.endDatePicker = {
            isOpen: false
        };
        
        vm.loadProjectById = function(projectId){
            return Project.getById(projectId);
        };
        
        vm.loadClients = function(){
            return Client.get().then(function(lstClients){
                Array.prototype.push.apply(vm.lstClients, lstClients);
            }); 
        };
        
        vm.loadEmployees = function(){
            return Employee.get().then(function(lstEmployees){
                Array.prototype.push.apply(vm.lstEmployees, lstEmployees);
                vm.updateUnmappedEmpList();
            }); 
        };
        
        /**
         * Updates unmapped employee list on add/remove of an employee or on load of a project. 
         */
        vm.updateUnmappedEmpList = function(){
            var projectEmployeeId = vm.project ? vm.project.employees.map(employee => employee.id) : [];
            vm.unmappedEmployees = vm.lstEmployees.filter(function(employee){
                return projectEmployeeId.indexOf(employee.id) === -1;
            });
        };
        
        vm.onEmployeeRemove = function(){
            vm.updateUnmappedEmpList();    
        };
        
        vm.addEmployeeToProject = function(oEmp){
            vm.project.employees.push(oEmp);
            vm.updateUnmappedEmpList();
        };
        
        vm.save = function(){
            Project.save(vm.project).then(function(result){
                window.history.back();
            });
        };
        
        vm.init = function(){
            var projectId = $stateParams.id;
            if(projectId){
                vm.loadProjectById(projectId).then(function(project){
                    vm.project = _.cloneDeep(project);
                    vm.updateUnmappedEmpList();
                });
            }else{
                vm.project = new ProjectModel();
            }
            
            vm.loadClients();
            vm.loadEmployees();
        };
        
        vm.init();
        
    }
    ProjectFormCtrl.$inject = ['$stateParams', '$state', 'Project', 'Client', 'Employee'];
    return ProjectFormCtrl; 
});