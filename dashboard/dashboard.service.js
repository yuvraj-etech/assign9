(function() {
    'use strict';
    angular.module('userTaskModule')
            .factory('deleteSelectedTask', deleteSelectedTask);
    function deleteSelectedTask(ajaxRequest) {
        return {
            remove: function(selectedIds, email) {
                for (var i = 0; i < selectedIds.length; i++) {
                    ajaxRequest.send('deleteTask.php', {taskId: selectedIds[i], email: email}, 'POST');
                }
            }
        };
    }



})();