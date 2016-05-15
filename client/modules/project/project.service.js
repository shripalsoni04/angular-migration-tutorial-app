/**
 * Service for handling backend communication of project entity. 
 */

define([
    './project.model'
], function (ProjectAPIModels) {
    'use strict';

    ProjectService.$inject = ['baseServiceFactory'];

    function ProjectService(BaseService) {

        BaseService.call(this, 'project', ProjectAPIModels);

        /**
         * Returns only projects with are not in completed status.
         */
        this.getActiveProjects = function () {
            return this.get().then(function (lstProjects) {
                return lstProjects.filter(function (project) {
                    return !project.isCompleted;
                });
            });
        };
    }

    return ProjectService;
});