(function() {
    'use strict';

    angular
        .module('AppliedMaths')
        .controller('ProjectilesController', ProjectilesController);

    ProjectilesController.inject = ['dependency1'];

    function ProjectilesController(dependency1) {
        var vm = this;


        activate();

        ////////////////

        function activate() {

        }
    }
})();