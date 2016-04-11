define([
    'modules/shared/config'
],function(oConfig){
   function ClientService($http){
       this.url = oConfig.apiEndPoint + 'client';
       
        /**
         * Fetches all projects list.
         */
        this.get = function() {
            return $http.get(this.url);
        };
       
   }
   ClientService.$inject = ['InMemoryDatastore'];
   return ClientService;
});