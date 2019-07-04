require.config({
    paths: {
        pixi: '../vendor/pixi-4.5.1.min',
        howler: '../vendor/howler-2.1.2.min'
    }
});

require(['timer', 'world', 'pixi', 'howler'], function(timer, world, pixi, howler) {

    timer(render, fixed);

    function render() {
        world.render();
    }

    function fixed() {
        world.update(timer.fixedDeltaTime);
    }

});