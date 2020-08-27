'use strict';

var subHeaderModule = angular.module('subHeaderModule', []);

subHeaderModule.directive('subheader', 

    function(){
        return{
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/sub-header.html',
            controller: [
            '$scope',
            
            function($scope){
                
            }],
        };
    }
);