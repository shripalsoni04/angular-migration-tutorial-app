/**
 * Project service for handling CRUD operation on project.
 * Currently CRUD operations are done in memory using InMemoryDatastore service.
 */

define([
    'modules/shared/config'
], function(oConfig) {
    'use strict';
    
    ProjectService.$inject = ['$http', 'Exception'];
    
    function ProjectService($http, Exception) {
        /**
         * URL for project api.
         */
        this.url = oConfig.apiEndPoint + 'project';

        /**
         * Returns all projects list.
         */
        this.get = function() {
            return $http
                .get(this.url)
                .then(extractData)
                .catch(Exception.catcher('GET list request failed for project'));
        };

        this.getById = function(projectId) {
            return $http
                .get(this.url + '/' + projectId)
                .then(extractData)
                .catch(Exception.catcher('GET request for project with id '+projectId+' failed.'));
        };

        this.insert = function(oProject) {
            return $http
                .post(this.url, oProject)
                .then(extractData)
                .catch(Exception.catcher('POST request failed for project'));
        };

        this.update = function(oProject) {
            return $http
                .put(this.url + '/' + oProject.id, oProject)
                .then(extractData)
                .catch(Exception.catcher('PUT request for project with id '+oProject.id+' failed.'));

        };

        this.save = function(oProject) {
            oProject.startDate = typeof oProject.startDate === 'object' && oProject.startDate ? +oProject.startDate : oProject.startDate;
            oProject.endDate = typeof oProject.endDate === 'object' && oProject.endDate ? +oProject.endDate : oProject.endDate;
            return oProject && oProject.id ? this.update(oProject) : this.insert(oProject);
        };

        this.delete = function(oProject) {
            return $http
                .delete(this.url + '/' + oProject.id)
                .catch(Exception.catcher('DELETE request for project with id '+oProject.id+' failed.'));

        };

        /**
         * Returns only projects with are not in completed status.
         */
        this.getActiveProjects = function() {
            return this.get().then(function(lstProjects) {
                return lstProjects.filter(function(project) {
                    return !project.isCompleted;
                });
            });
        };
        
        function extractData(response){
            return response.data.data;
        }
    }

    return ProjectService;
});