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
        vm.velocity = 10 * 2;
        vm.scale = 1;
        var engine, renderer;
        setup();

        ////////////////

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
            var cannonball = Bodies.circle(x, y, 10 * vm.scale, { setStatic: false });
            World.add(engine.world, cannonball);
            Body.setVelocity(cannonball, { x: vm.velocity * Math.cos(vm.cannon.angle), y: vm.velocity * Math.sin(vm.cannon.angle) });
        }

        function initPhysics() {
            engine = Engine.create({ enableSleeping: true });
            renderer = Render.create({
                element: document.getElementById('mainDisplay'),
                engine: engine,
                options: { width: 1200, height: 800 }
            });
            Engine.run(engine);
            Render.run(renderer);
            var canvas = $("canvas").get(0);
            canvas = canvas.getContext("2d")
            canvas.scale(1 / vm.scale, 1 / vm.scale);
        }

        function setupWorld() {
            var ground = Bodies.rectangle(600 * vm.scale, 810 * vm.scale, 1210 * vm.scale, 60 * vm.scale, { isStatic: true });
            var leftwall = Bodies.rectangle(0, 400 * vm.scale, 40 * vm.scale, 800 * vm.scale, { isStatic: true });
            var rightwall = Bodies.rectangle(1200 * vm.scale, 400 * vm.scale, 40 * vm.scale, 800 * vm.scale, { isStatic: true });

            vm.cannon = Bodies.rectangle(20 * vm.scale, 780 * vm.scale, 150 * vm.scale, 1 * vm.scale, { isStatic: true }); //Bodies.rectangle(20, 780, 150, 1, { isStatic: true });

            World.add(engine.world, [ground, leftwall, rightwall, vm.cannon]);
        }
    }
})();