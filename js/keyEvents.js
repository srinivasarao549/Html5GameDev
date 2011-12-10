/**
 * User: cyberpunk
 * Date: 19.11.11
 * Time: 16:30
 */


$(function () {
    $(window).bind('keydown', function (e) {
        var msg, newDiv;

        console.log(e);
    
        switch (e.which) {
            case 38:
                // up
                msg = 'You have pressed UP arrow';
                break;
            case 39:
                // right
                msg = 'You have pressed RIGHT arrow';
                break;
            case 40:
                // down
                msg = 'You have pressed DOWN arrow';
                break;
            case 37:
                // left
                msg = 'You have pressed LEFT arrow';
                break;
            default:
                msg = false;
                break;
        }

        if (msg) {
            newDiv = document.createElement('div');
            newDiv.textContent = msg;
            document.body.appendChild(newDiv);
        }
    })
});