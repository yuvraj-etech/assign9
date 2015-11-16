(function() {
    'use strict';
    angular.module('loginService', [])
            .factory('loginService', loginService);

    function loginService($location, timeStorageService, $state) {
        return {
            validUser: function() {
                var userObject = timeStorageService.get();
                if (userObject == null) {
                    $state.go('/');
                } else {
                    var userTime = userObject.newTime;
                    var currentTime = Date.now();
                    if (currentTime > userTime) {
                        timeStorageService.remove('userLocalStorage');
                        $state.go('/');
                    }
                    var key = userObject.email;
                    if (key == null) {
                        $state.go('/');
                    } else {
                        $state.go('/dashboard');
                    }
                }
            }
        }
    }

})();