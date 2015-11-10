angular.module('myServices', ['ngStorage'])

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