var mockAPI = require('./mock-api');
var mockData = require('../mock-data');

var appRouter = function(app){
    
    mockAPI(app, '/api/client', mockData.client);
    mockAPI(app, '/api/employee', mockData.employee);
    mockAPI(app, '/api/project', mockData.project);
}

module.exports = appRouter;