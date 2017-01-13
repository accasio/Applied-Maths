(function() {
    'use strict';

    angular
        .module('AppliedMaths')
        .factory('Setup', Setup);

    //Service.inject = ['dependency1'];
    function Setup() {
        var service = {
            engine: engine,
            renderer: renderer
        };

        var world;
        return service;

        ////////////////
        function initPhysics() {
            var engine, renderer;
            engine = Engine.create({ enableSleeping: true });
            renderer = Render.create({
                element: document.getElementById('mainDisplay'),
                engine: engine,
                options: { width: 1200, height: 800 }
            });
            Engine.run(engine);
            Render.run(renderer);
            world = {
                engine: engine,
                renderer: renderer
            };
            /*var canvas = $("canvas").get(0);
            canvas = canvas.getContext("2d")
            canvas.scale(1 / vm.scale, 1 / vm.scale);*/
        }

        function setupWorld() {
            var ground = Bodies.rectangle(600, 810, 1210, 60, { isStatic: true });
            var leftwall = Bodies.rectangle(0, 400, 40, 800, { isStatic: true });
            var rightwall = Bodies.rectangle(1200, 400, 40, 800, { isStatic: true });

            cannon = Bodies.rectangle(25, 750, 60, 10, { isStatic: true });
            world.cannon = cannon;
            World.add(world.engine.world, [ground, leftwall, rightwall, cannon]);
        }
    }
})();