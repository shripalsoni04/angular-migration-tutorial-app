var mockAPI = require('./mock-api');
var mockData = require('../mock-data');
var _ = require('lodash');

var appRouter = function(app){
    
    mockAPI(app, '/api/client', mockData.client);
    mockAPI(app, '/api/employee', mockData.employee);
    mockAPI(app, '/api/project', mockData.project, {
        post: {
           beforeSave: transformData
        },
        put: {
           beforeSave: transformData
        }
    });
    
    
    function transformData(oData){
        // setting client object based on clientId coming in post/put request
        if(oData.clientId){
            oData.client = _.find(mockData.client, {id: oData.clientId});
            delete oData.clientId;
        }
        
        // setting employee objects based on emploee id coming in post/put request.
        if(oData.employees && oData.employees.length){
            oData.employees = _.map(oData.employees, function(employeeId){
                return _.find(mockData.employee, {id: employeeId});
            });
        }
        return oData;
    }
}

module.exports = appRouter;