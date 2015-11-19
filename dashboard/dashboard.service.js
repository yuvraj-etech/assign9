(function() {
    'use strict';
    angular.module('userTaskModule')
            .factory('deleteSelectedTask', deleteSelectedTask);
    function deleteSelectedTask(ajaxRequest, $q) {
        return {
            remove: function(selectedId) {
                var def = $q.defer();
                var i = 0;
                var count = selectedId.length;
                callback(selectedId[0], i);

                function callback(id, i) {
                    ajaxRequest.send('deleteTask.php', {taskId: id}, 'POST').then(function() {
                        i++;
                        if (i < selectedId.length) {
                            callback(selectedId[i], i);
                        }
                        if (count == i) {
                            def.resolve();
                        }

                    });
                }
                return def.promise;
            }
        };
    }



})();