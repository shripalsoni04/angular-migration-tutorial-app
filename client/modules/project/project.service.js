/**
 * Service for handling backend communication of project entity. 
 */

define([
    './project.model',
    'modules/shared/base-service.factory'
], function (ProjectAPIModels, baseServiceFactory) {
    'use strict';

    ProjectService.NAME = 'ProjectService';
    ProjectService.$inject = [baseServiceFactory.NAME];
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