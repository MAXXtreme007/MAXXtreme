logoSize = function() {
    // Get the real width of the logo image
    var theLogo = $("#bolt");
    var newImage = new Image();
    newImage.src = theLogo.attr("src");
    var imgWidth = newImage.width;
    var imgHeight = newImage.height;

    // distance over which zoom effect takes place
    var maxScrollDistance = 500;

    // set to window height if larger
    maxScrollDistance = Math.min(maxScrollDistance, $(window).height());

    // width at maximum zoom out (i.e. when window has scrolled maxScrollDistance)
    var widthAtMax = 80;
    var heightAtMax = 95;

    // calculate diff and how many pixels to zoom per pixel scrolled
    var widthDiff = imgWidth - widthAtMax;
    var pixelsPerScrollH = (widthDiff / maxScrollDistance);
    var heightDiff = imgHeight - heightAtMax;
    var pixelsPerScrollV = (heightDiff / maxScrollDistance);

    $(window).scroll(function() {
        // the currently scrolled-to position - max-out at maxScrollDistance
        var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);

        // how many pixels to adjust by
        var scrollChangePxH = Math.floor(scrollTopPos * pixelsPerScrollH);
        var scrollChangePxV = Math.floor(scrollTopPos * pixelsPerScrollV);

        // calculate the new width
        var zoomedWidth = imgWidth - scrollChangePxH;
        var zoomedHeight = imgHeight - scrollChangePxV;

        // set the width
        $('#bolt').css('width', zoomedWidth);
        $('#bolt').css('height', zoomedHeight);
    });
}

// logoMove = function() {
//     // Create cross browser requestAnimationFrame method:
//     window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) { setTimeout(f, 1000 / 60) }

//     var boltLogo = document.getElementById('bolt')

//     function parallax() {
//         var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
//         boltLogo.style.top = -scrolltop * .01 + 'px' // move bubble2 at 10% of scroll rate
//     }

//     window.addEventListener('scroll', function() { // on page scroll
//         requestAnimationFrame(parallax) // call parallaxbubbles() on next available screen paint
//     }, false)
// }

logoSize();
