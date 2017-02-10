/**
 * Created by Zerk on 10-Feb-17.
 */

$(function () {
    (function () {
        $items = $('.services__item');

        $items.hover(function () {
            // in
            $(this).find('.services__link').addClass('services__link_active');
            $(this).find('.services__img').addClass('services__img_active');

        }, function () {
            // out
            $(this).find('.services__link').removeClass('services__link_active');
            $(this).find('.services__img').removeClass('services__img_active');
        })
    })();
});

//Slider stuff
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

/**
 * Created by Zerk on 08-Feb-17.
 */

// accordion stuff
$(function () {
    (function () {
        let $links = $('.accordion__link'),
            $icons = $('.accordion__icon'),
            $content = $('.accordion__content');

        $links.hover(function () {
            $(this).find('.accordion__icon').addClass('accordion__icon_hover');
        }, function () {
            $(this).find('.accordion__icon').removeClass('accordion__icon_hover');
        });

        $links.click(function (e) {
            e.preventDefault();

            if ($(this).hasClass('accordion__link_active')) {

                $(this).removeClass("accordion__link_active");
                $(this).siblings('.accordion__content').slideUp(300);
                $icons.removeClass('accordion__icon_active');
                $icons.removeClass("fa-minus").addClass("fa-plus");

            } else {
                $icons.removeClass('accordion__icon_active');
                $(this).find('.accordion__icon').addClass('accordion__icon_active');

                $icons.removeClass("fa-minus").addClass("fa-plus");
                $(this).find('.accordion__icon').removeClass("fa-plus").addClass("fa-minus");

                $links.removeClass("accordion__link_active");
                $(this).addClass("accordion__link_active");

                $content.slideUp(300);
                $(this).siblings('.accordion__content').slideDown(300);
            }
        });
    })();

});