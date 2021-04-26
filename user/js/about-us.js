$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var elementHeight = $(this).height()
    document.querySelector(".about-heading1").style.opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;
});
