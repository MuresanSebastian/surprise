$(document).ready(function () {
    var originalPosition = $('#noBtn').offset();
    var timer;
    var isNoButton = true;

    function moveRandomly() {
        if (isNoButton) {
            var randomX = Math.random() * ($(window).width() - $('#noBtn').width());
            var randomY = Math.random() * ($(window).height() - $('#noBtn').height());
            $('#noBtn').css({
                position: 'absolute',
                top: randomY,
                left: randomX
            });
        }
    }

    function resetPositionAndStyle() {
        isNoButton = false;
        $('#noBtn').removeClass('noBtn').addClass('yesBtn');
        $('#noBtn').text('Yes');

        $('#noBtn').css({
            position: 'static',
            top: originalPosition.top,
            left: originalPosition.left
        });
    }

    $('#noBtn').mouseenter(function (e) {
        clearTimeout(timer);
        moveRandomly();
    }).mouseleave(function (e) {
        timer = setTimeout(resetPositionAndStyle, 15000);
    });

    $('.yesBtn').on('click', function (e) {
        clearTimeout(timer);
        $('#noBtn').css({
            position: 'static',
            top: originalPosition.top,
            left: originalPosition.left
        });
        $('.message-div').css('display', 'block');
    })
});
