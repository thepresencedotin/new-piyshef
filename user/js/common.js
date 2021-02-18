function goToHomePage() {
    window.location.href = "index.html"
}

var figure = $("logo__video").hover(hoverVideo, hideVideo);

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //>=, not <=
    if (scroll < 300) {
        console.log(scroll)
        $('logo__video', this).get(0).play();
    }
    else {

    }
});
