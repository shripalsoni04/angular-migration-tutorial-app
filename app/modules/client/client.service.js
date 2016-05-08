define([
    'modules/shared/config'
], function(oConfig) {
    'use strict';

    ClientService.$inject = ['$http', 'Exception'];

    function ClientService($http, Exception) {
        this.url = oConfig.apiEndPoint + 'client';

        /**
         * Fetches all projects list.
         */
        this.get = function() {
            return $http.get(this.url).then(function(response){
                return response.data.data;
            })
            .catch(Exception.catcher('GET list request failed for client'));
        };
    }

    return ClientService;
});