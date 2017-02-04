function shrink() {
        var img = document.getElementById('bolt')
        if (img.width() > 100) {
            img.animate({ width: "100px", height: "100px" }, 1000);
        } else {
            img.animate({ width: "200px", height: "200px" }, 1000);
        }
}