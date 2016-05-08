/**
 * Controller for dashboard screen.
 */

define(function() {
    'use strict';

    function DashboardCtrl(ProjectService) {
        var vm = this;
        vm.lstActiveProjects = [];  // list of active projects

        vm.loadActiveProjects = loadActiveProjects;

        /**
         * Loads active projects list.
         */
        function loadActiveProjects() {
            ProjectService.getActiveProjects().then(function(lstProjects) {
                Array.prototype.push.apply(vm.lstActiveProjects, lstProjects);
            });
        }

        function init() {
            vm.loadActiveProjects();
        }

        init();
    }
    DashboardCtrl.$inject = ['ProjectService'];
    return DashboardCtrl;
});