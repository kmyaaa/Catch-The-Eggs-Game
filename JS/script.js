/*global console*/

var basket1 = document.getElementById('basket'),
    basket = $('#basket'),
    container = $('#container'),
    moveBy = 3,
    x = 91 + '%',
    bird = $('.bird'),
    eggs = $('.egg'),
    egg1 = $('#egg1'),
    egg2 = $('#egg2'),
    egg3 = $('#egg3'),
    score_span = $('#score'),
    life_span = $('#life'),
    restart = $('#restart'),
    floor = $('#floor'),
    basket_height = basket.height(),
    container_height = container.height(),
    egg_height = eggs.height(),
    egg_initial_position = parseInt(eggs.css('top'));
    score = 0,
    life = 5,
    speed = 2,
    max_speed = 10,
    counter = 0,
    score_updated = false,
    the_game = 0,
    anim_id = 0,
    egg_current_position = 0,
    egg_top = 0,
    basket_top = container_height - basket_height,
    life_span.text(life);

    
function egg_down(egg) {
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + speed);
}

function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        decrement_life();
        return true;
    }
    return false;
}

function set_egg_to_initial_position(egg) {

    egg.css('top', egg_initial_position);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_egg_hits_basket(egg) {
    if (collision(egg, basket)) {
        egg_top = parseInt(egg.css('top'));
        if (egg_top < basket_top) {
            update_score();
            return true;
        }
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
    eggs.hide();
    bird.hide();

}

restart.click(function () {
    location.reload();
});


window.addEventListener('load', () => {
    basket1.style.position = 'absolute';
    basket1.style.left = 45 + '%';
});
  
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            basket1.style.left = parseInt(basket1.style.left) + moveBy + '%';
            if(basket1.style.left >= x)
            {
                basket1.style.left = 91 + '%';
            }
            break;
        case 'ArrowLeft':           
            basket1.style.left = parseInt(basket1.style.left) - moveBy + '%'; 
            if(basket1.style.left <= 0 + '%')
            {
                basket1.style.left = 0 + '%';
            }         
            break;

    }
});

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}