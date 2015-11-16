(function() {
    'use strict';
    angular.module('userTaskModule')
            .controller('login_form', login_form);

    function login_form($scope, $http, $location, timeStorageService, ajaxRequest, $log, loginService, $state) {
        loginService.validUser();

        $scope.login = function() {
            ajaxRequest.send('login.php', {email: $scope.email, password: $scope.password}, 'POST').then(function(response) {
                if (response == 'Login Successfully') {
                    var time;
                    if (!$scope.time) {
                        time = 60000000;
                    } else {
                        time = $scope.time * 60000;
                    }
                    $state.go('/dashboard');
                    var currentTime = Date.now();
                    var newTime = currentTime + time;
                    var userKey = 'email';
                    var userValue = $scope.email;
                    timeStorageService.set(userKey, userValue, newTime);
                } else {
                    $scope.error = response;
                    $state.go('/');
                }
            }, function(response) {
                $log.error(response);
            });
        }
        ;
    }
})();