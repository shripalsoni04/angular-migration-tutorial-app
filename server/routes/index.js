var inMemoryAPI = require('./in-memory-api');
var mockData = require('../mock-data');

var appRouter = function(app){
    
    inMemoryAPI(app, '/api/client', mockData.client);
    inMemoryAPI(app, '/api/employee', mockData.employee);
    inMemoryAPI(app, '/api/project', mockData.project);
}

module.exports = appRouter;