(function() {
    'use strict';
    var MainController = function($scope, $location) {
        var vm = this;
        vm.goToURL = goToURL();

        function goToURL(path) {
            $location.path(path);
        };
    };

    angular.module('AppliedMaths').controller('MainController', MainController);
})();