define(function() {
    function projectEmployeeListDirective() {
        return {
            scope: {},
            bindToController: {
                employees: '=employees',
                isShowAction: '=?isShowAction'
            },
            controller: ProjectEmployeeListCtrl,
            controllerAs: 'projectEmployeeListCtrl',
            templateUrl: 'modules/project/project-employee-list.directive.html'
        }
    }

    function ProjectEmployeeListCtrl() {
        var vm = this;
        
        vm.removeEmployee = function(employee, index){
            vm.employees.splice(index, 1);
        }
        
        vm.init = function(){
            vm.isShowAction = !!vm.isShowAction;
        };
        
        vm.init();
    }

    ProjectEmployeeListCtrl.$inject = [];
    return projectEmployeeListDirective;
});