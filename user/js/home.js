//====================================== Case studies start =====================================/

this.showCaseStudies()

function showCaseStudies() {
    document.getElementById("image-part").innerHTML = ""
    document.getElementById("text-part").innerHTML = ""
    firebase.firestore().collection("case-studies").orderBy("priority", "asc").limit(4).onSnapshot(function (snapshot) {
        snapshot.forEach(element => {
            document.getElementById("image-part").innerHTML += `
            <div class="item" onclick="goSingleCaseStudiesPage('${element.id}')">
                <img src="${element.data().imgUrl}" />
            </div>
            `
            document.getElementById("text-part").innerHTML += `
                <div class="item my-5">${element.data().heading}</div>
            `
        });
        showDataInHTML()

    })
}

function goSingleCaseStudiesPage(id) {
    location.replace("single-case.html?id=" + id)
}

function showDataInHTML() {
    var $slider = $('.slideshow .slider'),
        maxItems = $('.item', $slider).length,
        dragging = false,
        tracking,
        rightTracking;

    $sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));
    rightItems = $('.item', $sliderRight).toArray();
    reverseItems = rightItems.reverse();
    $('.slider', $sliderRight).html('');
    for (i = 0; i < maxItems; i++) {
        $(reverseItems[i]).appendTo($('.slider', $sliderRight));
    }

    $slider.addClass('slideshow-left');
    $('.slideshow-left').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        speed: 1000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
            $('.slideshow-right .slider').slick('slickGoTo', -1);
            $('.slideshow-text').slick('slickGoTo', maxItems);
        } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
            $('.slideshow-right .slider').slick('slickGoTo', maxItems);
            $('.slideshow-text').slick('slickGoTo', -1);
        } else {
            $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
            $('.slideshow-text').slick('slickGoTo', nextSlide);
        }
    }).on("mousewheel", function (event) {
        // event.preventDefault();
        // event.preventDefault();
        // if (event.originalEvent.deltaX > 0 || event.originalEvent.deltaY < 0) {
        //     $(this).slick('slickNext');
        // } else if (event.originalEvent.deltaX < 0 || event.originalEvent.deltaY > 0) {
        //     $(this).slick('slickPrev');
        // };
    }).on('mousedown touchstart', function () {
        dragging = true;
        tracking = $('.slick-track', $slider).css('transform');
        tracking = parseInt(tracking.split(',')[5]);
        rightTracking = $('.slideshow-right .slick-track').css('transform');
        rightTracking = parseInt(rightTracking.split(',')[5]);
    }).on('mousemove touchmove', function () {
        if (dragging) {
            newTracking = $('.slideshow-left .slick-track').css('transform');
            newTracking = parseInt(newTracking.split(',')[5]);
            diffTracking = newTracking - tracking;
            $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
        }
    }).on('mouseleave touchend mouseup', function () {
        dragging = false;
    });

    $('.slideshow-right .slider').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 950,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        initialSlide: maxItems - 1,
    });
    $('.slideshow-text').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 900,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    });
}
//===================================== Journal Start ==========================================//

function showJournals() {
    firebase.firestore().collection("journals").orderBy("priority", "asc").limit(4).onSnapshot(function (snapshot) {
        document.getElementById("scrollHorizontal").innerHTML = ""

        var image = ""
        var author = ""
        var title = ""
        snapshot.forEach(element => {
            document.getElementById("scrollHorizontal").innerHTML += ` <div class="news-block">
        <div class="inner-box">
          <div class="image">
            <a href="alljournals.html"><img src="${element.data().imgUrl}" alt="" /></a>
          </div>
          <div class="lower-content">
            <ul class="post-meta">
              <li>${element.data().authorName}</li>
              <li>${moment(element.data().timestamp.toDate()).format("DD-MM-YYYY")}</li>
            </ul>
            <h3><a href="alljournals.html">${element.data().title.slice(0, 20)}</a></h3>
            <a href="alljournals.html" class="read-more">Read More</a>
          </div>
        </div>
      </div> `

            image += `
    <a href="alljournals.html"><img src="${element.data().imgUrl}" alt="" /></a>
    `

            author += `
        <li>${element.data().authorName}</li>
      `
            title += `
      ${element.data().title}
      `
        })
        $('.center').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    })

}
        


showJournals()

//===================================== Journal End ==========================================//

function grabbing() {
    console.log("grabbing")
    document.getElementById("grabbing").style.cursor = grabbing
}