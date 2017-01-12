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

        return service;

        ////////////////
        function engine() {
            var engine;
            engine = Engine.create({ enableSleeping: true });
            Engine.run(engine);
        }

        function renderer() {
            var renderer;
            renderer = Render.create({ element: document.getElementById('mainDisplay'), engine: engine, options: { width: 1200, height: 800 } });
            Render.run(renderer);
        }

        function setupWorld() {
            var ground = Bodies.rectangle(600, 810, 1210, 60, { isStatic: true });
            var leftwall = Bodies.rectangle(0, 400, 40, 800, { isStatic: true });
            var rightwall = Bodies.rectangle(1200, 400, 40, 800, { isStatic: true });

            cannon = Bodies.rectangle(25, 750, 60, 10, { isStatic: true });

            World.add(engine.world, [ground, leftwall, rightwall, cannon]);
        }
    }
})();