(function() {
    'use strict';

    angular
        .module('AppliedMaths')
        .controller('ProjectilesController', ProjectilesController);

    ProjectilesController.inject = ['$scope'];

    function ProjectilesController($scope) {
        var vm = this;
        vm.cannonMove = cannonMove;
        vm.fire = fire;
        vm.cannon;
        vm.velocity = 4;
        var engine, renderer;
        setup();

        ////////////////

        /*
        function setupMouseHandlers() {
            window.addEventListener("mousedown", function(e) {
                var x = cannon.position.x + 40 * Math.cos(cannon.angle);
                var y = cannon.position.y + 40 * Math.sin(cannon.angle);

                var cannonball = Bodies.circle(x, y, 5, {});

                World.add(engine.world, cannonball);

                Body.setVelocity(cannonball, { x: 30 * Math.cos(cannon.angle), y: 30 * Math.sin(cannon.angle) });
            });

            window.addEventListener("mousemove", function(e) {
                var dx = e.clientX - cannon.position.x;
                var dy = e.clientY - cannon.position.y;

                Body.setAngle(cannon, Math.atan2(dy, dx));
            });
        }*/

        function setup() {
            initPhysics();
            setupWorld();
        }

        function cannonMove(event) {
            var dx = event.clientX - vm.cannon.position.x;
            var dy = event.clientY - vm.cannon.position.y;
            if ((Math.atan2(dy, dx) * (-180 / Math.PI)) < 0 || (Math.atan2(dy, dx) * (-180 / Math.PI)) > 90) return;
            vm.angle = (Math.atan2(dy, dx) * (-180 / Math.PI)).toFixed(5);
            Body.setAngle(vm.cannon, Math.atan2(dy, dx));
        }

        function fire() {
            var x = vm.cannon.position.x + 1 * Math.cos(vm.cannon.angle);
            var y = vm.cannon.position.y + 1 * Math.sin(vm.cannon.angle);
            console.log(vm.cannon.position.x + " " + vm.cannon.position.y);
            var cannonball = Bodies.circle(x, y, 10, {});
            World.add(engine.world, cannonball);

            Body.setVelocity(cannonball, { x: 30 * Math.cos(vm.cannon.angle), y: 30 * Math.sin(vm.cannon.angle) });
        }

        function initPhysics() {
            engine = Engine.create({ enableSleeping: true });
            renderer = Render.create({ element: document.getElementById('mainDisplay'), engine: engine, options: { width: 1200, height: 800 } });

            Engine.run(engine);
            Render.run(renderer);
        }

        function setupWorld() {
            var ground = Bodies.rectangle(600, 810, 1210, 60, { isStatic: true });
            var leftwall = Bodies.rectangle(0, 400, 40, 800, { isStatic: true });
            var rightwall = Bodies.rectangle(1200, 400, 40, 800, { isStatic: true });

            vm.cannon = Bodies.rectangle(25, 750, 60, 10, { isStatic: true }); //Bodies.rectangle(20, 780, 150, 1, { isStatic: true });

            World.add(engine.world, [ground, leftwall, rightwall, vm.cannon]);
        }
    }
})();