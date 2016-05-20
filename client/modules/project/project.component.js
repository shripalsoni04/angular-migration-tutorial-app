/**
 * Root controller for project functionality.  
 */

define([
   './project-list-detail.component',
   './project-form.component' 
], function(projectListDetailComponentConfig, projectFormComponentConfig) {
    'use strict';
    
    ProjectCtrl.$inject = [];
    function ProjectCtrl() {
        
    }
    
    return {
        NAME: 'project',
        controller: ProjectCtrl,
        templateUrl: 'modules/project/project.component.html',
        $routeConfig: [
            {path: '/', name: 'ProjectListDetail', component: projectListDetailComponentConfig.NAME, useAsDefault: true},
            {path: '/add', name: 'ProjectAdd', component: projectFormComponentConfig.NAME},
            {path: '/:id', name: 'ProjectUpdate', component: projectFormComponentConfig.NAME}
        ] 
    };
});