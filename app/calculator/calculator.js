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
                    $(".calculator-cross").click(function(){
                        console.log("This will hide the calculator.");
                    });
                    $(".calculator-button").click(function(){
                        var input = $(this).text();
                        var output = claculate(input);
                        $(".calculator-disply").text(output);
                    });
                    $(".calculator-bottom").click(function(){
                        console.log("This will transfer result to text-box.");
                    });

                }],
            });
    }
]);
