var mockAPI = require('./mock-api');
var mockData = require('../mock-data');
var _ = require('lodash');

var appRouter = function(app){
    
    mockAPI(app, '/api/client', mockData.client);
    mockAPI(app, '/api/employee', mockData.employee);
    mockAPI(app, '/api/project', mockData.project, {
        post: {
           beforeSave: setClientDataById
        },
        put: {
            beforeSave: setClientDataById
        }
    });
    
    
    function setClientDataById(oData){
        if(oData.clientId){
            oData.client = _.find(mockData.client, {id: oData.clientId});
            delete oData.clientId;
        }
        return oData;
    }
}

module.exports = appRouter;