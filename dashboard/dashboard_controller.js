
userTaskModuleController.controller('dashboard', ['$scope', 'timeStorageService', '$http', 'mylocalService', '$location', function($scope, timeStorageService, $http, mylocalService, $location) {

        var userObject = timeStorageService.get();
        if (userObject == null) {
            alert('Please Login First');
            $location.path('/');
        } else {
            var value = userObject.email;
            $http({
                method: 'POST',
                url: 'user_data.php',
                headers: mylocalService.getHeader(),
                transformRequest: mylocalService.rawPhp(),
                data: {email: value}
            }).success(function(response) {
                $scope.data = response;
            });
        }
        var userTime = userObject.newTime;
        var currentTime = Date.now();
        if (currentTime > userTime) {
            timeStorageService.remove('userLocalStorage');
            alert('Please Login Again');
            $location.path('/');
        }
        $scope.logout = function() {
            timeStorageService.remove('userLocalStorage');
        };
    }]);

