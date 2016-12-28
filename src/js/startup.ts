'use strict';

require.config({
    baseUrl: './',
    waitSeconds: 2,
    paths: {
        'angular': '../node_modules/angular/angular',
        'angular-ui-router': '../node_modules/angular-ui-router/release/angular-ui-router',
    },
    shim: {
        'angular': { exports: 'angular' },
        'angular-ui-router': { exports: 'angular-ui-router', deps: ['angular'] },
    },
});

require([
    'angular',
    'js/app'
], function (angular, app) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app.WebApp.Instance['name']]);
        angular.element(document).find('html').addClass('ng-app');
    });
});