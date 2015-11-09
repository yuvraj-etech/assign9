
userTaskModuleController.controller('registration_form', function($scope, $location, $location, $http, mylocalService) {
    $scope.register = function() {
        $http({
            method: 'POST',
            url: 'registration.php',
            headers: mylocalService.getHeader(),
            transformRequest: mylocalService.rawPhp(),
            data: {name: $scope.name, email: $scope.email, password: $scope.password}
        }).success(function(response) {
            alert(response);
            if (response == 'User Email already register') {
                $location.path('registration');
            } else {
                $scope.name = "";
                $scope.email = "";
                $scope.password = "";
                $scope.c_password = "";
                $location.path('/');
            }
        });

    };
});
