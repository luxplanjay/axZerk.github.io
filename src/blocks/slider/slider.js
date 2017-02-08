$(function () {
    // init
    let $slider = $('.slider');

    $slider.jcarousel({});

    // Slider pagination
    let pagination = $('.slider-pagination');

    pagination.jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    // making first link active on page load
    $('.slider-pagination a:first-child').addClass('slider-pagination__link_active');

    pagination
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('slider-pagination__link_active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('slider-pagination__link_active');
        });

});
