define([
    '../logger/logger.service'
], function (LoggerService) {
    'use strict';
    
    ExceptionService.NAME = 'ExceptionService';
    ExceptionService.$inject = [LoggerService.NAME];
    function ExceptionService(LoggerService) {
        this.catcher = catcher;

        function catcher(message) {
            return function (reason) {
                LoggerService.error(message, reason);
            };
        }
    }

    return ExceptionService;
});