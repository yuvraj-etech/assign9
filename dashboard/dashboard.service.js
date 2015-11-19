(function() {
    'use strict';
    angular.module('userTaskModule')
            .factory('deleteSelectedTask', deleteSelectedTask);
    function deleteSelectedTask(ajaxRequest) {
        return {
            remove: function(selectedId) {
                function callback(id) {
                    ajaxRequest.send('deleteTask.php', {taskId: id}, 'POST');
                }
                for (var i = 0; i < selectedId.length; i++) {
                    callback(selectedId[i]);
                }

            }
        };
    }



})();