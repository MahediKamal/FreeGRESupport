'use strict';

var calculatorModule = angular.module('calculatorModule', [
    'ngRoute',
]);

calculatorModule.config([
    '$routeProvider',
    
    function ($routeProvider) {
        $routeProvider
            .when('/calculator', {
                templateUrl: 'app/calculator/calculator.html',
                controller: [
                '$scope',
                
                function($scope){
                }],
            });
    }
]);