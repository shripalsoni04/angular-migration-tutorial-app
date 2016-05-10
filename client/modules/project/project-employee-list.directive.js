/**
 * Directive to show list of employees associated with project.
 * Inputs
 * ========
 * employees: List of eomployee for the project
 * isShowAction: If true, shows delete action button on each row.
 * 
 * Output
 * =========
 * onEmployeeRemove: On remove of any employee from the project, the 
 *                  function provided here will be  executed.
 */

define(function() {
    'use strict';
    
    function projectEmployeeListDirective() {
        return {
            scope: {},
            bindToController: {
                employees: '=employees',
                isShowAction: '=?isShowAction',
                onEmployeeRemove: '&onEmployeeRemove'
            },
            controller: ProjectEmployeeListCtrl,
            controllerAs: 'vm',
            templateUrl: 'modules/project/project-employee-list.directive.html'
        }
    }

    function ProjectEmployeeListCtrl() {
        var vm = this;
        
        vm.removeEmployee = removeEmployee;
        
        function removeEmployee(index){
            vm.employees.splice(index, 1);
            vm.onEmployeeRemove();
        }
        
        function init(){
            vm.isShowAction = !!vm.isShowAction;
        }
        
        init();
    }

    return projectEmployeeListDirective;
});