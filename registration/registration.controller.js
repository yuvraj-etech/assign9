(function() {
    'use strict';

    userTaskModuleController.controller('registration_form', function($scope, $location, $http, ajaxRequest, $log, $state) {
        $scope.register = function() {
            ajaxRequest.send('registration.php', {name: $scope.name, email: $scope.email, password: $scope.password}, 'POST').then(function(response) {
                $log.debug(response);
                if (response == 'User Email already register') {
                    $scope.error = 'User Email already register';
                    $state.go('/registration');
                } else {
                    $state.go('/');
                    $scope.name = "";
                    $scope.email = "";
                    $scope.password = "";
                    $scope.c_password = "";
                }
            }, function(response) {
                $log.debug(response);
            });

        };
    });
})();