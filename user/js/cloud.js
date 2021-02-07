$(window).scroll(function() {    
    const scroll = window.scrollY;
    // var value = $(window).scrollTop()
    document.getElementById("green-cloud").style.transform = `translate3d(${-scroll*0.6}px, 0, ${scroll*0.2}px)`;
    document.getElementById("blue-cloud").style.transform = `translate3d(${scroll*0.1}px, 0, ${scroll*0.009}px)`;
})