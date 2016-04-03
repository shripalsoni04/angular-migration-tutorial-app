define([
    'angular',
    'modules/app.module'
], function (angular, appModule) {
    angular.bootstrap(document.body, [appModule.name]);
});