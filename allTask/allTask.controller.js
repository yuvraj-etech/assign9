(function(){
'use strict';

userTaskModuleController.controller('allTask', function($scope, $http, timeStorageService, ajaxRequest, $log) {
    var userObject = timeStorageService.get();
    var email = userObject.email;
    ajaxRequest.send('allTask.php', {email: email}, 'POST').then(function(response) {
        $scope.data = response;
    }, function(response) {
        $log.error(response);
    });

    $scope.deleteTask = function(taskId) {
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

    }

});
})();