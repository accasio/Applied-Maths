'use strict';
(function() {
    var app = angular.module('AppliedMaths', ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./html/main.html",
                controller: "MainController",
                controllerAs: "main"
            })
            .when("/projectiles", {
                templateUrl: "./html/projectiles.html",
                controller: "ProjectilesController",
                controllerAs: "projectiles"
            })
            .otherwise({ redirectTo: "/" });
    });
})();