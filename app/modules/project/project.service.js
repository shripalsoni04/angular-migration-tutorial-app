define([
    'modules/shared/config'
], function(oConfig) {
    function ProjectService($http) {
        this.url = oConfig.apiEndPoint + 'project';
        
        /**
         * Fetches all projects list.
         */
        this.get = function() {
            return $http.get(this.url);
        }
        
        /**
         * Fetches active projects list.
         */
        this.getActiveProjects = function() {
            return $http.get(this.url).then(function(lstProjects) {
                return lstProjects.filter(function(project) {
                    return !project.isCompleted;
                });
            });
        }
    }

    ProjectService.$inject = ['InMemoryDatastore'];
    return ProjectService;
});