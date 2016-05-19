/**
 * Root controller for the application.
 */

define(function() {
    'use strict';
    
    AppCtrl.$inject = ['$rootScope', '$state'];
    function AppCtrl($rootScope, $state) {
        var vm = this;
        vm.moduleName = 'Dashboard';
        vm.$onInit = init;

        function getModuleNameByState(stateName) {
            var moduleName;
            if (stateName.indexOf('app.dashboard') === 0) {
                moduleName = 'Dashboard';
            } else if (stateName.indexOf('app.project') === 0) {
                moduleName = 'Project';
            }
            return moduleName;
        }

        function listenRouteChange() {
            $rootScope.$on('$stateChangeStart', function(event, toState) {
                vm.moduleName = getModuleNameByState(toState.name);
            });
        }

        function init() {
            listenRouteChange();
            vm.moduleName = getModuleNameByState($state.current.name);
        }
    }
    
    return {
        NAME: 'app',
        controller: AppCtrl,
        templateUrl: 'modules/app.html'
    };
});