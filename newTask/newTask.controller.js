(function(){
'use strict';
userTaskModuleController.controller('newTask', function($scope, $http, timeStorageService, ajaxRequest) {
    var userObject = timeStorageService.get();

    var email = userObject.email;

    $scope.addTask = function() {
        ajaxRequest.send('addTask.php', {taskName: $scope.taskName, dueDate: $scope.dueDate, userEmail: email}, 'POST').then(function(response) {
            alert(response);
            $scope.taskName = "";
            $scope.dueDate = "";
        }, function(response) {
            alert(response);
        });
    }

});

})();