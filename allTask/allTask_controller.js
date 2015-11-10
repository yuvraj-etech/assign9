userTaskModuleController.controller('allTask', function($scope, $http, mylocalService, timeStorageService) {
    var userObject = timeStorageService.get();
    var email = userObject.email;
    $http({
        method: 'POST',
        url: 'allTask.php',
        headers: mylocalService.getHeader(),
        transformRequest: mylocalService.rawPhp(),
        data: {email: email}
    }).success(function(response) {
        $scope.data = response;
    });

    $scope.deleteTask = function(taskId) {
        $http({
            method: 'POST',
            url: 'deleteTask.php',
            headers: mylocalService.getHeader(),
            transformRequest: mylocalService.rawPhp(),
            data: {taskId: taskId, email: email}
        }).success(function(response) {
            $scope.data = response;
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
    
    $scope.saveEditTask = function(data){
        $scope.active = null;
        $http({
            method: 'POST',
            url: 'updateTask.php',
            headers: mylocalService.getHeader(),
            transformRequest: mylocalService.rawPhp(),
            data: {taskId: data.id, newTaskName: data.task_name, newDueDate: data.due_date}
        }).success(function(response) {
            
        });
    } 
    
});