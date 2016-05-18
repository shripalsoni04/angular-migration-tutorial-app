/**
 * Root controller for project functionality.  
 */

define(function() {
    'use strict';
    
    ProjectCtrl.$inject = [];
    function ProjectCtrl() {
        
    }
    
    return {
        NAME: 'project',
        controller: ProjectCtrl,
        controllerAs: 'vm',
        templateUrl: 'modules/project/project.component.html'    
    };
});