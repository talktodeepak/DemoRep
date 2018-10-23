'use strict'
angular.module('demo.services', []).factory('UserService', ["$http", "CONSTANTS", function($http, CONSTANTS) {
    var service = {};
    service.getTimeByEmail = function(userId) {
        var url = CONSTANTS.getTimeByEmailUrl + userId;
        return $http.get(url);
    }
    return service;
}]);