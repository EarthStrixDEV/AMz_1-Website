$(document).ready(function () {
    // Initialize the jQuery File Upload widget:
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        margin: 10,
        nav: true,
        center: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Initialize the jQuery File Upload widget:

    $('#text-strong').on('click', function () {
        $('#text-p-descript').toggle();
    });

    $('body').loopedslider({
        autoHeight: true,
        transition: 'fade',
        transitionSpeed: 1000,
        autoPlay: true,
        autoPlayDelay: 5000,
        pauseOnHover: true,
        showPreviousNext: true,
        showNav: true,
        navPositionTop: '0px',
        navPositionLeft: '0px',
        navPositionRight: '0px',
        navPositionBottom: '0px',
        navButtons: true,
    });
});
