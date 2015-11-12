(function() {
    'use strict';
    angular.module('timeStorageService', ['ngStorage'])
            .factory('timeStorageService', timeStorageService);
    
    function timeStorageService($window, $localStorage) {
        return {
            get: function(a) {
                var retrievedObject = $window.localStorage.getItem('userLocalStorage');
                var myObject = JSON.parse(retrievedObject);
                return myObject;
            },
            set: function(a, b, c) {
                var str = '{"' + a + '":"' + b + '","newTime":' + c + '}';
                $window.localStorage.setItem('userLocalStorage', str);
            },
            remove: function(a) {
                $window.localStorage.removeItem(a);
            }
        }
    }

})();