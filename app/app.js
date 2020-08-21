'use strict';

var freeGRESupport = angular.module('freeGRESupport', [
    'ngRoute',
    'homeModule',
    'errorModule',
    'calculatorModule',
    'awaModule',
    'headerModule',
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