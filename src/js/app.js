define(["require", "exports", "angular", "angular-ui-router"], function (require, exports, angular) {
    "use strict";
    var WebApp;
    (function (WebApp) {
        'use strict';
        WebApp.Instance = angular.module('Questionnaire', ['ui.router']);
        WebApp.Instance.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('home', {
                    url: '/home',
                    template: 'Hello Word!'
                });
                $urlRouterProvider.otherwise('/home');
            }]);
    })(WebApp = exports.WebApp || (exports.WebApp = {}));
});

//# sourceMappingURL=app.js.map
