define([], function () {
    'use strict';
    
    ExceptionService.$inject = ['Logger'];
    
    function ExceptionService(Logger) {
        this.catcher = catcher;

        function catcher(message) {
            return function (reason) {
                Logger.error(message, reason);
            };
        }
    }

    return ExceptionService;
});