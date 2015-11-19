(function() {
    'use strict';
    angular.module('userTaskModule')
            .factory('deleteSelectedTask', deleteSelectedTask);
    function deleteSelectedTask(ajaxRequest) {
        return {
            remove: function(selectedId, email) {
                    ajaxRequest.send('deleteTask.php', {taskId: selectedId, email: email}, 'POST');
            }
        };
    }



})();