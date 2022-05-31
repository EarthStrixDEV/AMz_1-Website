$(document).ready(function () {
    // Initialize the jQuery File Upload widget:
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
    });

    // Initialize the jQuery File Upload widget:
    $('#text-p-descript').hide();

    $('#text-strong').on('click', function () {
        $('#text-p-descript').show();
        $('#text-p-descript').css('display', 'block');
    });
});
