(function() {
    'use strict';
    angular.module('userTaskModule')
            .factory('deleteSelectedTask', deleteSelectedTask);
    function deleteSelectedTask(ajaxRequest, $q) {
        return {
            remove: function(selectedId, index) {
                var def = $q.defer();
                var i = 0;
                var num = 0;
                var count = selectedId.length;
                callback(selectedId[0], i, num);

                function callback(id, i, num) {
                    ajaxRequest.send('deleteTask.php', {taskId: id}, 'POST').then(function() {
                        i++;
                        if (i < selectedId.length) {
                            callback(selectedId[i], i);

                        }
                        def.notify(index[num]);
                        
                        if (count == i) {
                            def.resolve();
                        }
                        num++;
                    });
                }
                return def.promise;
            }
        };
    }



})();