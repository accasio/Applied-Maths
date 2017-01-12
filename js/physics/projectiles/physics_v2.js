(function() {

    var Engine = Matter.Engine;
    var Render = Matter.Render;
    var World = Matter.World;
    var Bodies = Matter.Bodies;
    var Events = Matter.Events;
    var Body = Matter.Body;

    var engine, renderer;

    function initPhysics() {
        engine = Engine.create({ enableSleeping: true });
        renderer = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 800 } });

        Engine.run(engine);
        Render.run(renderer);
    }

    function setupWorld() {
        var ground = Bodies.rectangle(600, 810, 1210, 60, { isStatic: true });
        var leftwall = Bodies.rectangle(0, 400, 40, 800, { isStatic: true });
        var rightwall = Bodies.rectangle(1200, 400, 40, 800, { isStatic: true });

        cannon = Bodies.rectangle(25, 750, 60, 10, { isStatic: true });

        World.add(engine.world, [ground, leftwall, rightwall, cannon]);
    }
    var cannon;

    function setup() {
        initPhysics();
        setupWorld();
        setupMouseHandlers();
    }

    function setupMouseHandlers() {
        window.addEventListener("mousedown", function(e) {
            var x = cannon.position.x + 40 * Math.cos(cannon.angle);
            var y = cannon.position.y + 40 * Math.sin(cannon.angle);

            var cannonball = Bodies.circle(x, y, 5, {});

            World.add(engine.world, cannonball);
            /*yo yo yo*/
            Body.setVelocity(cannonball, { x: 30 * Math.cos(cannon.angle), y: 30 * Math.sin(cannon.angle) });
        });

        window.addEventListener("mousemove", function(e) {
            var dx = e.clientX - cannon.position.x;
            var dy = e.clientY - cannon.position.y;

            Body.setAngle(cannon, Math.atan2(dy, dx));
        });
    }

    window.onload = setup;
})();