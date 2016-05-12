/**
 * Controller for project form screen.
 * Provides functionality to add, edit the project details.
 */

define([
    './project.model'
],
    function (ProjectModel) {
        'use strict';

        function ProjectFormCtrl($stateParams, $state, ProjectService, ClientService, EmployeeService) {
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
                ProjectService.save(vm.project).then(function () {
                    window.history.back();
                });
            }

            function loadProjectById(projectId) {
                return ProjectService.getById(projectId);
            }

            function loadClients() {
                return ClientService.get().then(function (lstClients) {
                    Array.prototype.push.apply(vm.lstClients, lstClients);
                });
            }

            function loadEmployees() {
                return EmployeeService.get().then(function (lstEmployees) {
                    Array.prototype.push.apply(vm.lstEmployees, lstEmployees);
                    updateUnmappedEmpList();
                });
            }

            /**
             * Updates unmapped employee list on add/remove of an employee or on 
             * load of a project. 
             */
            function updateUnmappedEmpList() {
                var projectEmployeeId = vm.project ? vm.project.employees.map(function (employee) { return employee.id }) : [];
                vm.unmappedEmployees = vm.lstEmployees.filter(function (employee) {
                    return projectEmployeeId.indexOf(employee.id) === -1;
                });
            }

            function init() {
                var projectId = $stateParams.id;
                if (projectId) {
                    loadProjectById(projectId).then(function (project) {
                        vm.project = _.cloneDeep(project);
                        updateUnmappedEmpList();
                    });
                } else {
                    vm.project = new ProjectModel();
                }

                loadClients();
                loadEmployees();
            }

            init();

        }
        ProjectFormCtrl.$inject = ['$stateParams', '$state', 'ProjectService', 'ClientService', 'EmployeeService'];
        return ProjectFormCtrl;
    });