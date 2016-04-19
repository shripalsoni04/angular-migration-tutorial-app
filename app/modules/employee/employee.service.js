/**
 * Employee service for handling CRUD operation.
 */

define([
    'modules/shared/config'
], function(oConfig) {
    'use strict';
    
    EmployeeService.$inject = ['InMemoryDatastore'];
    
    function EmployeeService($http) {
        this.url = oConfig.apiEndPoint + 'employee';

        /**
         * Fetches all projects list.
         */
        this.get = function() {
            return $http.get(this.url);
        };

    }
    
    return EmployeeService;
});