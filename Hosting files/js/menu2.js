$('.open-overlay').click(function () {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'),
    nav_item_2 = $('nav li:nth-of-type(2)'),
    nav_item_3 = $('nav li:nth-of-type(3)'),
    nav_item_4 = $('nav li:nth-of-type(4)'),
    nav_item_5 = $('nav li:nth-of-type(5)'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
  } else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
  }
})

var hidden = false

function Overflow() {
  hidden = !hidden
  console.log(hidden)
  if (hidden) {
    document.getElementById("body").style.overflowY = "hidden"
  }
  else {
    document.getElementById("body").style.overflowY = "visible"
  }
}

"use strict";
// document.getElementById("logo").style.display = "none";
document.getElementById("logo").className = "d-none d-md-none d-lg-none";

// $('#logo').fadeOut();
$(window).scroll(function () {
  const scroll = window.scrollY;
  // if(scroll == 0) {
  //   console.log(scroll)
  //   document.getElementById("logo").className = "d-none d-md-none d-lg-none";
  // }
  hideLogoOnFooter()
  if (scroll > 56) {
    // console.log("if")
    document.getElementById("logo").classList.remove("d-none");
    // console.log("remove class")
    $('#logo').fadeIn();
    // document.getElementById("logo").style.display = "block";
    // document.getElementById("logo").className = "d-block d-md-none d-lg-none";
  }
  else {
    $('#logo').fadeOut();
    // document.getElementById("logo").className = "d-none d-md-none d-lg-none";
  }
})

function hideLogoOnFooter() {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
    "use strict";
    $('#logo2').fadeOut();    
    // document.getElementById("logo2").style.display = "none";
    // document.getElementById("logo2").className = "d-none d-md-none d-lg-none";
  }
  else {
    $('#logo2').fadeIn();
    // document.getElementById("logo2").style.display = "block";
    // document.getElementById("logo2").className = "d-block d-md-none d-lg-none";
  }
}
