(function() {
    'use strict';
    angular.module('ajaxService', [])
            .factory('ajaxRequest', ajax);
    function ajax($http, $q) {
        return {
            
            send: function(api, data, method) {
                var baseApi = 'server/';
                var def = $q.defer();
                $http({
                    url: baseApi+api,
                    method: method,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param(data),
                }).success(function(data) {


                    def.resolve(data);
                }).error(function() {
                    def.reject('500');
                });
                return def.promise;
            },
        };
    }

})();