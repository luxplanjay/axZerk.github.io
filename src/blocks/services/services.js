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
