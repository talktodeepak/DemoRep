'use strict'
var module = angular.module('demo.controllers', []);
module.controller("UserController", ["$scope", "UserService",
    function($scope, UserService) {
       
	$scope.getTimeByEmail = function() {
        UserService.getTimeByEmail($scope.emailId).then(function(value) {
            console.log(value.data);
            $scope.allUsers = value.data;
        }, function(reason) {
            console.log("error occured");
        }, function(value) {
            console.log("no callback");
        });
        
        }
}
]);
