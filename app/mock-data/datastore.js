define([
    './project',
    './client',
    './employee'
],function(projectData, clientData, employeeData){
   var datastore = {};
   datastore['project'] = projectData;
   datastore['employee'] = employeeData;
   datastore['client'] = clientData;
   return datastore; 
});