define([
    'angular',
    'angular-ui-router',
    './app',
    './route-config'
], function (angular, uiRouter, AppCtrl, RouteConfig) {
    return angular.module('app', ['ui.router'])
        .config(RouteConfig)
        .controller('AppCtrl', AppCtrl);
});