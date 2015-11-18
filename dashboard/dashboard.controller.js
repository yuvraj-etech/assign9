(function() {
    'use strict';
    angular.module('userTaskModule')
            .controller('dashboard', dashboard);

    function dashboard($scope, timeStorageService, ajaxRequest, $log, $state, deleteSelectedTask) {
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
                $scope.isFocused = r;
            }
            else {
                $scope.active = null;
                $scope.isFocused = null;
            }
        };
        $scope.saveEditTask = function(data) {
            $scope.active = null;
            ajaxRequest.send('updateTask.php', {taskId: data.id, newTaskName: data.task_name, newDueDate: data.due_date, newTaskStatus: data.task_status}, 'POST').then(function(response) {
                $scope.isFocused = false;
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


        $scope.selection = [];
        $scope.selectedIds = function selectedIds(taskId) {
            var idx = $scope.selection.indexOf(taskId);
            if (idx > -1) {
                $scope.selection.splice(idx, 1);
            }
            else {
                $scope.selection.push(taskId);
                $scope.deleteSelected = function() {
                    var email = userObject.email;
                    deleteSelectedTask.remove($scope.selection, email).then(function(response) {
                        $scope.data = response;
                        $scope.selection = [];
                    }, function(response) {
                        $log.error(response);
                    });
                }
            }
        };





    }
    ;
})();