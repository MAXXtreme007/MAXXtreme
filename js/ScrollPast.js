$(document).scroll(function () {
    ///Show element after user scrolls 800px
    var y = $(this).scrollTop();
    if (y > 800) {
        $('#bolt').addClass('sticky');
    } else {
        $('#bolt').removeClass('sticky');
    }
});