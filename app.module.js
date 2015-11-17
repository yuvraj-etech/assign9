(function() {
    'use strict';

    angular.module('userTaskModule', ['ui.router', 'userTaskModuleController'])
            .config(config)

            .directive('leftMenu', function($document) {
                return {
                    restrict: 'A',
                    templateUrl: 'common/leftMenu.html',
                    link: function(scope, element, attrs) {
                    }
                }
            });

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
                .state('/', {
                    url: "/",
                    templateUrl: "login/login.html",
                    controller: "login_form"
                })
                .state('/registration', {
                    url: "/registration",
                    templateUrl: "registration/registration.html",
                    controller: "registration_form"
                })
                .state('/dashboard', {
                    url: "/dashboard",
                    templateUrl: "dashboard/dashboard.html",
                    controller: "dashboard"
                });
    }
})();