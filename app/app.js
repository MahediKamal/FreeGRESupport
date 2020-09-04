'use strict';

var subHeaderTitle = {};
var subHeaderTimer = {};

window.onbeforeunload = function() {
    return "Data you entered on this page might get lost.";
};

var freeGRESupport = angular.module('freeGRESupport', [
    'ngRoute',
    'homeModule',
    'errorModule',
    'calculatorModule',
    'awaModule',
    'headerModule',
    'subHeaderModule',
    'timerModule',
    'footerModule',
]);

freeGRESupport.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/error',
            });
    }
]);