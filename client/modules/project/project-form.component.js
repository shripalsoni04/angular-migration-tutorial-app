/**
 * Controller for project form screen.
 * Provides functionality to add, edit the project details.
 */

define([
    'lodash',
    './project.model',
    './project.service',
    '../client/client.service',
    '../employee/employee.service'
],
    function (_, ProjectAPIModels, ProjectService, ClientService, EmployeeService) {
        'use strict';
        
        /**
         * Project Detail View Data Model
         */
        function ProjectDetailVDM() {
            this.id = null;
            this.name = null;
            this.clientId = null;
            this.details = null;
            this.isCompleted = false;
            this.startDate = null;
            this.endDate = null;
            this.employees = [];

            this.toLocal = function (oProjectRemoteData) {
                this.id = oProjectRemoteData.id;
                this.name = oProjectRemoteData.name;
                this.clientId = oProjectRemoteData.client ? oProjectRemoteData.client.id : null;
                this.details = oProjectRemoteData.details;
                this.isCompleted = oProjectRemoteData.isCompleted;
                this.startDate = oProjectRemoteData.startDate;
                this.endDate = oProjectRemoteData.endDate;
                _.each(oProjectRemoteData.employees, function (oItem) {
                    this.employees.push(new EmployeeDetailVDM().toLocal(oItem));
                }.bind(this));
                return this;
            }

            this.toRemote = function () {
                var remoteData = new ProjectAPIModels.Post();
                remoteData.id = this.id;
                remoteData.name = this.name;
                remoteData.clientId = this.clientId;
                remoteData.details = this.details;
                remoteData.isCompleted = this.isCompleted;
                remoteData.startDate = this.startDate;
                remoteData.endDate = this.endDate;
                remoteData.employees = _.map(this.employees, 'id');
                return remoteData;
            }
        }
        
        /**
         * Project Employee View Data Model
         */
        function EmployeeDetailVDM() {
            this.id = null;
            this.name = null;
            this.role = null;
            this.email = null;

            this.toLocal = function (oEmpRemoteData) {
                this.id = oEmpRemoteData.id;
                this.name = oEmpRemoteData.name;
                this.role = oEmpRemoteData.role;
                this.email = oEmpRemoteData.email;
                return this;
            }
        }
        
        ProjectFormCtrl.$inject = ['$rootRouter', ProjectService.NAME, ClientService.NAME, EmployeeService.NAME];
        function ProjectFormCtrl($rootRouter, ProjectService, ClientService, EmployeeService) {
            var vm = this;
            var previousState;
            
            vm.project = new ProjectDetailVDM();
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
            vm.cancel = cancel;
            vm.$routerOnActivate = $routerOnActivate;
            vm.$onInit = $onInit;

            function onEmployeeRemove(employeeId) {
                vm.project.employees.splice(_.findIndex(vm.project.employees, {id: employeeId}), 1);
                updateUnmappedEmpList();
            }

            function addEmployeeToProject(oEmp) {
                vm.project.employees.push(oEmp);
                updateUnmappedEmpList();
            }
            
            function goToPreviousState(projectId){
                if(previousState === 'Dashboard'){
                    $rootRouter.navigate([previousState]);
                }else{
                    vm.$router.navigate(['ProjectListDetail', {selectedProjectId: projectId}])
                }
            }
            
            function save() {
                ProjectService.save(vm.project.toRemote()).then(function (project) {
                    setProjectData(project);
                    goToPreviousState(vm.project.id);
                });
            }
            
            function cancel(){
                goToPreviousState(vm.project.id);
            }
            
            function loadProjectById(projectId) {
                return ProjectService.getById(projectId);
            }
            
            function setProjectData(oRemoteData){
                vm.project = new ProjectDetailVDM().toLocal(oRemoteData);
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
            
            function $routerOnActivate(next){
                var projectId = next.params.id;
                previousState = next.params.previousState;
                if (projectId) {
                    loadProjectById(projectId).then(function (project) {
                        setProjectData(project);
                        updateUnmappedEmpList();
                    });
                }
            }
            
            function $onInit() {
                loadClients();
                loadEmployees();
            }
        }
        
        return {
            NAME: 'projectForm',
            controller: ProjectFormCtrl,
            templateUrl: 'modules/project/project-form.component.html',
            bindings: {
                $router: '<'
            }    
        };
    });