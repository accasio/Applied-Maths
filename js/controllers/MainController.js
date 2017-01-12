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