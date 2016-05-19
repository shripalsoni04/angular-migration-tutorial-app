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
    
    function ProjectEmployeeListCtrl() {
        var vm = this;
        
        vm.removeEmployee = removeEmployee;
        
        function removeEmployee(empId){
            vm.onEmployeeRemove({employeeId: empId});
        }
    }
    
    return {
        NAME: 'projectEmployeeList',
        controller: ProjectEmployeeListCtrl,
        templateUrl: 'modules/project/project-employee-list.component.html',
        bindings: {
            employees: '<',
            isShowAction: '@',
            onEmployeeRemove: '&'
        }    
    };
});