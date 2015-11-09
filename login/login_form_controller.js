
userTaskModuleController.controller('login_form', ['$scope', '$http', '$location', 'mylocalService', 'timeStorageService', function($scope, $http, $location, mylocalService, timeStorageService) {
        var userObject = timeStorageService.get();
        if (userObject == null) {
            $location.path('/');
        } else {
            var userTime = userObject.newTime;
            var currentTime = Date.now();
            if (currentTime > userTime) {
                timeStorageService.remove('userLocalStorage');
                $location.path('/');
            }
            var key = userObject.email;
            if (key == null) {
                $location.path('/');
            } else {
                $location.path('dashboard');
            }
        }

        $scope.login = function() {
            $http({
                method: 'POST',
                url: 'login.php',
                headers: mylocalService.getHeader(),
                transformRequest: mylocalService.rawPhp(),
                data: {email: $scope.email, password: $scope.password}
            }).success(function(response) {
                if (response == 'Login Successfully') {
                    var time;
                    if (!$scope.time) {
                        time = 600000;
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
                    alert(response);
                    $location.path('/');
                }
            });
        };
    }]);

