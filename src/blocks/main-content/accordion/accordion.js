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
                $(this).siblings('.accordion__content').stop().slideUp(300);
                $icons.removeClass('accordion__icon_active');
                $icons.removeClass("fa-minus").addClass("fa-plus");

            } else {
                $icons.removeClass('accordion__icon_active');
                $(this).find('.accordion__icon').addClass('accordion__icon_active');

                $icons.removeClass("fa-minus").addClass("fa-plus");
                $(this).find('.accordion__icon').removeClass("fa-plus").addClass("fa-minus");

                $links.removeClass("accordion__link_active");
                $(this).addClass("accordion__link_active");

                $content.stop().slideUp(300);
                $(this).siblings('.accordion__content').stop().slideDown(300);
            }
        });
    })();

});