var numberOfPages = 100;
addEventListener("touchstart", (event) => {});
function addPage(page, book) {
    if (!book.turn('hasPage', page)) {
        var element = $('<div />', { 'class': 'page ' + ((page % 2 == 0) ? 'odd' : 'even'), 'id': 'page-' + page }).html('<i class="loader"></i>');
        book.turn('addPage', element, page);
        setTimeout(function () {
            element.html('<div class="data">Data for page ' + page + '</div>');
        }, 10);
    }
}

$(window).ready(function () {
    $('#book').turn({
        acceleration: true,
        pages: numberOfPages,
        elevation: 50,
        gradients: !$.isTouch,
        when: {
            turning: function (e, page, view) {
                var range = $(this).turn('range', page);
                for (page = range[0]; page < range[1]; page++)
                    addPage(page, $(this));
            },

            turned: function (e, page) {
                $('#page-number').val(page);
            }
        }
    });

    $('#number-pages').html(numberOfPages);
    $('#page-number').keydown(function (e) {
        if (e.keyCode == 13)
            $('#book').turn('page', $('#page-number').val());

    });
});

$(window).bind('keydown', function (e) {

    if (e.target && e.target.tagName.toLowerCase() != 'input')
        if (e.keyCode == 37)
            $('#book').turn('previous');
        else if (e.keyCode == 39)
            $('#book').turn('next');

});

$("#book").on("touchstart", function (e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }
    startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
});
$("#book").on("touchend", function (e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }
    moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
    //左右滑
    if (X > 50) {
        $('#book').turn('previous');
    }
    //右左滑
    else if (X < -50) {
        $('#book').turn('next');
    }
});