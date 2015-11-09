angular.module('userTaskModule', ['ui.router', 'userTaskModuleController'])

.config(function($stateProvider, $urlRouterProvider) {
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
            })
            .state('/newTask', {
                url: "/newTask",
                templateUrl: "newTask/newTask.html",
                controller: "newTask"
            })
            .state('/allTask', {
                url: "/allTask",
                templateUrl: "partials/allTask.html",
                controller: "allTask"
            });
})


.directive("passwordVerify", function() {
    return {
        require: "ngModel",
        scope: {
            passwordVerify: '='
        },
        link: function(scope, element, attrs, ctrl) {
            scope.$watch(function() {
                var combined;

                if (scope.passwordVerify || ctrl.$viewValue) {
                    combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                }
                return combined;
            }, function(value) {
                if (value) {
                    ctrl.$parsers.unshift(function(viewValue) {
                        var origin = scope.passwordVerify;
                        if (origin !== viewValue) {
                            ctrl.$setValidity("passwordVerify", false);
                            return undefined;
                        } else {
                            ctrl.$setValidity("passwordVerify", true);
                            return viewValue;
                        }
                    });
                }
            });
        }
    };
})

.directive('leftMenu', function($document) {
    return {
        restrict: 'A',
        templateUrl: 'common/menu.html',
        link: function(scope, element, attrs) {}
        }
    });
