import angular = require('angular');
import 'angular-ui-router';

export module WebApp {
    'use strict';

    export const Instance = angular.module('Questionnaire', ['ui.router']);
    Instance.config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                template: 'Hello Word!',
            });

        $urlRouterProvider.otherwise('/home');
    }]);
}
