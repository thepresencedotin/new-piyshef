var animation = bodymovin.loadAnimation({
    container: document.getElementById('footer-rocket2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/rocket.json'
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('footer-rocket'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/cloud2.json'
})

var animate = bodymovin.loadAnimation({
    container: document.getElementById('logo__videos'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/json/logo.json'
})

var figure = $("#logo__videos").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    animate.goToAndPlay(0);
}

function hideVideo(e) {
    setTimeout(animate.play() , 3000);
}


// animate.setSpeed(0.5);
