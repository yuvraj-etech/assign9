(function(){
'use strict';
userTaskModuleController.controller('dashboard', ['$scope', 'timeStorageService', '$http', '$location', 'ajaxRequest','$log', function($scope, timeStorageService, $http, $location, ajaxRequest, $log) {

        var userObject = timeStorageService.get();
        if (userObject == null) {
            $log.warn('Please Login First');
            $location.path('/');
        } else {
            var value = userObject.email;
            ajaxRequest.send('user_data.php', {email: value}, 'POST').then(function(response) {
                $scope.data = response;
            }, function(response) {
                $log.debug(response);
            });
        }
        var userTime = userObject.newTime;
        var currentTime = Date.now();
        if (currentTime > userTime) {
            timeStorageService.remove('userLocalStorage');
            $log.warn('Please Login Again');
            $location.path('/');
        }
        $scope.logout = function() {
            timeStorageService.remove('userLocalStorage');
        };
    }]);

})();