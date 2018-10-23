
'use strict'
var demoApp = angular.module('demo', ['demo.controllers', 'demo.services']);

demoApp.constant("CONSTANTS", {
    getTimeByEmailUrl: "http://192.168.99.100:8080/records?length=10&email=",
    getAllUsers: "/user/getAllUsers",
    saveUser: "/user/saveUser"
});