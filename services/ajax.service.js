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
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: data,
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

    