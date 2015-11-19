(function() {
    'use strict';

    angular.module('userTaskModule')
            .config(config)
            .run(function($rootScope, $location, timeStorageService) {
                $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
                    var userObject = timeStorageService.get();
                    if (angular.isUndefined(userObject) || userObject == null) {
                        $location.path('/');
                    } else{
                        $location.path('/dashboard');
                    }

                });
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
