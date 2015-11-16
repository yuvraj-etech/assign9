//(function() {
//    'use strict';
//    angular.module('dashboardService', [])
//            .factory('dashboardService', dashboardService);
//
//    function dashboardService($http, $q) {
//        return {
//            deleteTask: function(taskId,email) {
//                var baseApi = 'server/';
//                var def = $q.defer();
//                $http({
//                    url: baseApi+"deleteTask.php",
//                    method: "POST",
//                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//                    transformRequest: function(obj) {
//                        var str = [];
//                        for (var p in obj)
//                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//                        return str.join("&");
//                    },
//                    data: data,
//                }).success(function(data) {
//
//
//                    def.resolve(data);
//                }).error(function() {
//                    def.reject('500');
//                });
//                return def.promise;
//            },
//        };
//    }
//            }
//        }
//    }
//
//})();