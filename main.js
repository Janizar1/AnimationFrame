const container = document.querySelector('.container');
const output = document.querySelector('.output');
const game = {ani:null, inplay:false, x:0, speed:5};

output.addEventListener('click', (e) => {
    if(!game.inplay) {
        game.ani = window.requestAnimationFrame(mover)
        game.inplay = true;
    }else{
        window.cancelAnimationFrame(game.ani);
        game.inplay = false;
    }
});

function mover() {
    /* if(game.x > (container.offsetleft + container.offsetwidth)) {
        game.speed *= -1;
    } */
    const dim = container.getBoundingClientRect;
    if (game.x > dim.width || (game.x < 0)){
        console.log(game.x);
        console.log(dim.right);
        game.speed *= -1;
    };
    game.x += game.speed;
    output.style.left = game.x + 'px';
    game.ani = window.requestAnimationFrame(mover)
}