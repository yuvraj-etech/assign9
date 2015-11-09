userTaskModuleController.controller('newTask', function($scope, $http, mylocalService, timeStorageService) {
			var userObject = timeStorageService.get();
        
            var email = userObject.email;
           
        $scope.addTask = function (){
            $http({
            method: 'POST',
            url: 'addTask.php',
            headers: mylocalService.getHeader(),
            transformRequest: mylocalService.rawPhp(),
            data: {taskName: $scope.taskName, dueDate: $scope.dueDate, userEmail: email}
        }).success(function(response) {
            alert(response);
            $scope.taskName = "";
            $scope.dueDate = "";
        });
        }
        
    });

