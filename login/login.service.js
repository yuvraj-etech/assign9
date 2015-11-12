(function() {
    'use strict';
    angular.module('loginService', [])
            .factory('loginService', loginService);

    function loginService($location, timeStorageService) {
        return {
            validUser: function() {
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
            }
        }
    }

})();