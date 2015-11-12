(function(){
'use strict';

userTaskModuleController.controller('registration_form', function($scope, $location, $http, ajaxRequest, $log) {
    $scope.register = function() {
        ajaxRequest.send('registration.php', {name: $scope.name, email: $scope.email, password: $scope.password}, 'POST').then(function(response) {
            $log.debug(response);
            if (response == 'User Email already register') {
                $scope.error = 'User Email already register';
                $location.path('registration');
            } else {
                $scope.name = "";
                $scope.email = "";
                $scope.password = "";
                $scope.c_password = "";
                $location.path('/');
            }
        }, function(response) {
            $log.debug(response);
        });

    };
});
})();