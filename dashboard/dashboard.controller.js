(function() {
    'use strict';
    userTaskModuleController.controller('dashboard', ['$scope', 'timeStorageService', '$http', '$location', 'ajaxRequest', '$log', '$state', function($scope, timeStorageService, $http, $location, ajaxRequest, $log, $state) {
            var userObject = timeStorageService.get();
            if (angular.isUndefined(userObject) || userObject == null) {
                $log.warn('Please Login First');
                $state.go('/');
            } else {
                var email = userObject.email;
                ajaxRequest.send('user_data.php', {email: email}, 'POST').then(function(response) {
                    $scope.userData = response;
                }, function(response) {
                    $log.debug(response);
                });

                ajaxRequest.send('allTask.php', {email: email}, 'POST').then(function(response) {
                    $scope.data = response;
                }, function(response) {
                    $log.error(response);
                });
            }
            var userTime = userObject.newTime;
            var currentTime = Date.now();
            if (currentTime > userTime) {
                timeStorageService.remove('userLocalStorage');
                $log.warn('Please Login Again');
                $state.go('/');
            }

            $scope.logout = function() {
                timeStorageService.remove('userLocalStorage');
            };

            $scope.deleteTask = function(taskId) {
                var email = userObject.email;
                ajaxRequest.send('deleteTask.php', {taskId: taskId, email: email}, 'POST').then(function(response) {
                    $scope.data = response;
                }, function(response) {
                    $log.error(response);
                });
            };

            $scope.showEditRow = function(r) {
                if ($scope.active != r) {
                    $scope.active = r;
                }
                else {
                    $scope.active = null;
                }
            };

            $scope.saveEditTask = function(data) {
                $scope.active = null;
                ajaxRequest.send('updateTask.php', {taskId: data.id, newTaskName: data.task_name, newDueDate: data.due_date, newTaskStatus: data.task_status}, 'POST').then(function(response) {
                }, function(response) {
                    $log.error(response);
                });
            };

            $scope.addTask = function() {
                var email = userObject.email;
                ajaxRequest.send('addTask.php', {taskName: $scope.taskName, dueDate: $scope.dueDate, userEmail: email}, 'POST').then(function(response) {
                    ajaxRequest.send('allTask.php', {email: email}, 'POST').then(function(response) {
                        $scope.data = response;
                    }, function(response) {
                        $log.error(response);
                    });
                    $log.debug(response);
                    $scope.taskName = "";
                    $scope.dueDate = "";
                }, function(response) {
                    $log.error(response);
                });
            }
        }]);
})();