/**
 * Controller for dashboard screen.
 */

define(function() {
    'use strict';

    function DashboardCtrl(Project) {
        var vm = this;
        vm.lstActiveProjects = [];  // list of active projects

        vm.loadActiveProjects = loadActiveProjects;

        /**
         * Loads active projects list.
         */
        function loadActiveProjects() {
            Project.getActiveProjects().then(function(lstProjects) {
                Array.prototype.push.apply(vm.lstActiveProjects, lstProjects);
            });
        }

        function init() {
            vm.loadActiveProjects();
        }

        init();
    }
    DashboardCtrl.$inject = ['Project'];
    return DashboardCtrl;
});