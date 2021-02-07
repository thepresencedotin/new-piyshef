var figure = $(".video").hover(hoverVideo, hideVideo);
var aboutVid = document.getElementById("about-video");
var aboutVideoStatus = false

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        document.getElementById("logo__video").play()
    }
})

function hoverVideo(e) {
    $('#logo').hide()
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('#logo').show()
}

function hoverVideo2(e) {
    $('video', this).get(0).play();
}

function playVideo() {
    aboutVideoStatus = !aboutVideoStatus
    if (aboutVideoStatus) {
        aboutVid.play()
    }
    else {
        aboutVid.pause()
    }
}

function goToHomePage() {
    location.replace("index.html")
} 