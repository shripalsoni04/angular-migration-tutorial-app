/**
 * Controller for project form screen.
 * Provides functionality to add, edit the project details.
 */

define([
    'modules/project/project.model'
],
    function(ProjectModel) {
        'use strict';

        function ProjectFormCtrl($stateParams, $state, Project, Client, Employee) {
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

            vm.onEmployeeRemove = onEmployeeRemove;
            vm.addEmployeeToProject = addEmployeeToProject;
            vm.save = save;

            function onEmployeeRemove() {
                updateUnmappedEmpList();
            }

            function addEmployeeToProject(oEmp) {
                vm.project.employees.push(oEmp);
                updateUnmappedEmpList();
            }

            function save() {
                Project.save(vm.project).then(function(result) {
                    window.history.back();
                });
            }

            function loadProjectById(projectId) {
                return Project.getById(projectId);
            };

            function loadClients() {
                return Client.get().then(function(lstClients) {
                    Array.prototype.push.apply(vm.lstClients, lstClients);
                });
            };

            function loadEmployees() {
                return Employee.get().then(function(lstEmployees) {
                    Array.prototype.push.apply(vm.lstEmployees, lstEmployees);
                    updateUnmappedEmpList();
                });
            };

            /**
             * Updates unmapped employee list on add/remove of an employee or on load of a project. 
             */
            function updateUnmappedEmpList() {
                var projectEmployeeId = vm.project ? vm.project.employees.map(employee => employee.id) : [];
                vm.unmappedEmployees = vm.lstEmployees.filter(function(employee) {
                    return projectEmployeeId.indexOf(employee.id) === -1;
                });
            };

            function init() {
                var projectId = $stateParams.id;
                if (projectId) {
                    loadProjectById(projectId).then(function(project) {
                        vm.project = _.cloneDeep(project);
                        updateUnmappedEmpList();
                    });
                } else {
                    vm.project = new ProjectModel();
                }

                loadClients();
                loadEmployees();
            };

            init();

        }
        ProjectFormCtrl.$inject = ['$stateParams', '$state', 'Project', 'Client', 'Employee'];
        return ProjectFormCtrl;
    });