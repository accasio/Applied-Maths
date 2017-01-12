(function() {
    'use strict';

    angular
        .module('AppliedMaths')
        .controller('MainController', MainController);

    MainController.inject = ["$scope", "$location"];

    function MainController($scope, $location) {
        var vm = this;
        vm.goToURL = goToURL;

        ////////////////

        function goToURL(path) {
            $location.path(path);
        };
    };

})();

var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;
var Body = Matter.Body;