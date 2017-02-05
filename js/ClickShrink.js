function shrink() {
    var img = $("#bolt");
    if (img.width() > 85 && img.height() > 100 ) {
        img.animate({ width: "80px", height: "95px" }, 250);
    } else {
        img.animate({ width: "200px", height: "216px" }, 600);
    }
}