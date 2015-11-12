(function() {
    'use strict';
    userTaskModuleController.controller('login_form', ['$scope', '$http', '$location', 'timeStorageService', 'ajaxRequest', '$log', 'loginService', function($scope, $http, $location, timeStorageService, ajaxRequest, $log, loginService) {
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
                        $location.path('dashboard');
                        var currentTime = Date.now();
                        var newTime = currentTime + time;
                        var userKey = 'email';
                        var userValue = $scope.email;
                        timeStorageService.set(userKey, userValue, newTime);
                    } else {
                        $scope.error = response;
                        $location.path('/');
                    }
                }, function(response) {
                    $log.error(response);
                });
            };
        }]);

})();