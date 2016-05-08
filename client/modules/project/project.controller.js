/**
 * Root controller for project functionality.  
 */

define(function() {
    'use strict';

    function ProjectCtrl() {
        // nothing rightnow.   
        var vm = this;
        vm.someValue = 42; 
    }
    ProjectCtrl.$inject = [];
    return ProjectCtrl;
});