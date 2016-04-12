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
        };
        
        this.getById = function(projectId){
            return $http.get(this.url+'/'+projectId);
        };
        
        this.insert = function(){
                
        };
        
        this.update = function(){
            
        };
        
        
        this.save = function(oProject){
            return oProject && oProject.id ? this.update(oProject) : this.insert(oProject);
        };
        
        /**
         * Fetches active projects list.
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