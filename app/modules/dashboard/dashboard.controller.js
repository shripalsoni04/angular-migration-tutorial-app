define(function() {
    function DashboardCtrl(Project) {
        var vm = this;
        vm.lstActiveProjects = [];
        
        /**
         * Loads active projects list.
         */
        vm.loadActiveProjects = function(){
            Project.getActiveProjects().then(function(lstProjects) {
                Array.prototype.push.apply(vm.lstActiveProjects, lstProjects);
            });    
        }
        
        /**
         * Initilizes controller.
         */
        vm.init = function(){
            vm.loadActiveProjects();
        }
        
        vm.init();
    }
    DashboardCtrl.$inject = ['Project'];
    return DashboardCtrl;
});