define([
   'angular',
   './logger.service'
], function(angular, LoggerService){
    return angular.module('app.shared.logger', [])
        .service('Logger', LoggerService);
});