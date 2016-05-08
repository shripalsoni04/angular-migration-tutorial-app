/**
 * Employee service for handling CRUD operation.
 */

define([
    'modules/shared/config'
], function(oConfig) {
    'use strict';
    
    EmployeeService.$inject = ['$http', 'Exception'];
    
    function EmployeeService($http, Exception) {
        this.url = oConfig.apiEndPoint + 'employee';

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
    
    return EmployeeService;
});