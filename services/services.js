angular.module('myServices', ['ngStorage'])

.factory('mylocalService', function() {
    var service = {};
    service.getHeader = function() {
        return {'Content-Type': 'application/x-www-form-urlencoded'};
    };
    service.rawPhp = function() {
        return function(obj) {
            var str = [];
            for (var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        };
    };
    return service;
})

.factory('timeStorageService', function($window, $localStorage, $interval) {
    var service = {};
    service.get = function(a) {
        var retrievedObject = $window.localStorage.getItem('userLocalStorage');
        var myObject = JSON.parse(retrievedObject);
        return myObject;
    };
    service.set = function(a, b, c) {
        var str= '{"'+a+'":"'+b+'","newTime":'+c+'}';
        $window.localStorage.setItem('userLocalStorage', str);
    };
    service.remove = function(a) {
        $window.localStorage.removeItem(a);
    };
    return service;
});