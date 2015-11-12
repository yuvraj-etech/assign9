(function(){
'use strict';
userTaskModuleController.controller('newTask', function($scope, $http, timeStorageService, ajaxRequest, $log) {
    var userObject = timeStorageService.get();

    var email = userObject.email;

    $scope.addTask = function() {
        ajaxRequest.send('addTask.php', {taskName: $scope.taskName, dueDate: $scope.dueDate, userEmail: email}, 'POST').then(function(response) {
            $log.debug(response);
            $scope.taskName = "";
            $scope.dueDate = "";
        }, function(response) {
            $log.error(response);
        });
    }

});

})();