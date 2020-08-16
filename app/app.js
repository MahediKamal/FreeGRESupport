'use strict';

var freeGRESupport = angular.module('freeGRESupport', [
    'ngRoute',
    'homeModule',
    'errorModule',
    'calculatorModule',
    'headerModule',
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