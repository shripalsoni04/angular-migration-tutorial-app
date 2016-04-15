/**
 * Project service for handling CRUD operation on project.
 * Currently CRUD operations are done in memory using InMemoryDatastore service.
 */

define([
    'modules/shared/config'
], function(oConfig) {
    'use strict';

    function ProjectService($http) {
        /**
         * URL for project api.
         */
        this.url = oConfig.apiEndPoint + 'project';

        /**
         * Returns all projects list.
         */
        this.get = function() {
            return $http.get(this.url);
        };

        this.getById = function(projectId) {
            return $http.get(this.url + '/' + projectId);
        };

        this.insert = function(oProject) {
            return $http.post(this.url, oProject);
        };

        this.update = function(oProject) {
            return $http.put(this.url + '/' + oProject.id, oProject);
        };

        this.save = function(oProject) {
            return oProject && oProject.id ? this.update(oProject) : this.insert(oProject);
        };

        this.delete = function(oProject) {
            return $http.delete(this.url + '/' + oProject.id);
        };

        /**
         * Returns only projects with are not in completed status.
         */
        this.getActiveProjects = function() {
            return $http.get(this.url).then(function(lstProjects) {
                return lstProjects.filter(function(project) {
                    return !project.isCompleted;
                });
            });
        };
    }

    ProjectService.$inject = ['InMemoryDatastore'];
    return ProjectService;
});