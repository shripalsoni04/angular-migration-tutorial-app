define([
    'modules/shared/config'
], function(oConfig) {
    'use strict';

    ClientService.$inject = ['InMemoryDatastore'];

    function ClientService($http) {
        this.url = oConfig.apiEndPoint + 'client';

        /**
         * Fetches all projects list.
         */
        this.get = function() {
            return $http.get(this.url);
        };
    }

    return ClientService;
});