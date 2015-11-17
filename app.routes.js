(function() {
    'use strict';

    angular.module('userTaskModule')
            .config(config)


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
