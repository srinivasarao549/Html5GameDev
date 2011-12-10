/**
 * User: cyberpunk
 * Date: 19.11.11
 * Time: 19:40
 */

$(function () {
    var imgLeft, imgRight, jqRabbit, rabbitLeft, rabbitTop, dy, dx, position;

    dx = 10;
    dy = 10;

    imgLeft = new Image();
    imgLeft.src = '../../img/rabbit_l.png';

    imgRight = new Image();
    imgRight.src = '../../img/rabbit_r.png';

    // get rabbit
    jqRabbit = $('#rabbit');
    // to be able to move him across the page
    jqRabbit.css('position', 'absolute');

    $(window).bind('keydown', function (e) {
        var msg;
        switch (e.which) {
            case 37:
                // left
                jqRabbit.attr('src', imgLeft.src);
                jqRabbit.css('left', jqRabbit.position().left - dx + 'px');
                break;
            case 38:
                // up
                jqRabbit.css('top', jqRabbit.position().top - dy + 'px');
                break;
            case 39:
                // right
                jqRabbit.attr('src', imgRight.src);
                jqRabbit.css('left', jqRabbit.position().left + dx + 'px');
                break;
            case 40:
                // down
                jqRabbit.css('top', jqRabbit.position().top + dy + 'px');
                break;
            default:
                break;
        }
    })
});