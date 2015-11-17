(function() {
    'use strict';
    angular.module('userTaskModule')
            .controller('login_form', login_form);

    function login_form($scope, $http, $location, timeStorageService, ajaxRequest, $log, loginService, $state) {
        loginService.validUser();

        $scope.login = function() {
            ajaxRequest.send('login.php', {email: $scope.email, password: $scope.password}, 'POST').then(function(response) {
                if (response == 'Login Successfully') {
                    var time = 604800000;
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