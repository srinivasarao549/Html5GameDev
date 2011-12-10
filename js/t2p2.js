/**
 * User: cyberpunk
 * Date: 19.11.11
 * Time: 19:40
 */

$(function () {
    var imgLeft, imgRight, jqRabbit, rPosition, dx, dy, speed, mouseX, mouseY,
        rabbitWidth, rabbitHeight, rabbitLeft, rabbitTop;

    speed = 100;
    dx = 0;
    dy = 0;
    mouseX = 0;
    mouseY = 0;

    imgLeft = new Image();
    imgLeft.src = '../../img/rabbit_l.png';

    imgRight = new Image();
    imgRight.src = '../../img/rabbit_r.png';

    // get rabbit
    jqRabbit = $('#rabbit');
    rabbitWidth = jqRabbit.width();
    rabbitHeight = jqRabbit.height();
    // to be able to move him across the page
    jqRabbit.css('position', 'absolute');
    rPosition = jqRabbit.position();

    $(window).bind('mousemove', function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        rPosition = jqRabbit.position();
        // move coordinates of rabbit from left,top to center of rabbit
        rabbitLeft = rPosition.left + rabbitWidth / 2;
        rabbitTop = rPosition.top + rabbitHeight / 2;

        dx = (e.pageX - rabbitLeft) / speed;
        dy = (e.pageY - rabbitTop) / speed;
        if (dx < 0) {
            jqRabbit.attr('src', imgLeft.src);
        } else {
            jqRabbit.attr('src', imgRight.src);
        }
    });


    function rabbitStep() {
        rPosition = jqRabbit.position();
        rabbitLeft = rPosition.left + rabbitWidth / 2;
        rabbitTop = rPosition.top + rabbitHeight / 2;
        
        if (Math.abs(rabbitLeft - mouseX) > 10
                || Math.abs(rabbitTop - mouseY) > 10
        ) {
            jqRabbit.css('border', 'none');
            jqRabbit.css('box-shadow', 'none');
            jqRabbit.css('left', (jqRabbit.position().left + dx) + 'px');
            jqRabbit.css('top', (jqRabbit.position().top + dy) + 'px');
        } else {
            jqRabbit.css('border', '2px solid #555');
            jqRabbit.css('box-shadow', '2px 2px 2px #222');
        }
    }

    timerId = setInterval(rabbitStep, 40);
});