/**
 * Created by Zerk on 09-Feb-17.
 */

(function () {

    loadJSON('./db/data.json')
        .then(function (data) {
            let result = _.attempt(JSON.parse.bind(null, data));
            console.log('Object: ', result);

            let skills = getSkills(result);
            console.log('Skills: ', skills);

            let names = getNames(result);
            console.log('Names: ', names);

            let friends = getFriends(result);
            console.log('Friends: ', friends);
        });

    function getSkills(arr) {
        let result = _.chain(arr)
            .map('skills')
            .flattenDepth(1)
            .uniq()
            .value();

        return result.sort(compare);
    }

    function getNames(arr) {
        let result = _.chain(arr)
            .sortBy('friends')
            .map('name')
            .value();
        return result;
    }

    function getFriends(arr) {
        let result = _.chain(arr)
            .map('friends')
            .flattenDepth(1)
            .map('name')
            .uniq()
            .value();

        return result;
    }

    function loadJSON(path) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', path, true);

            request.onload = function () {
                resolve(this.responseText);
            };

            request.onerror = reject;
            request.send(null);
        });
    }

    function compare(x, y) {
        var tmp = x.toLowerCase().localeCompare(y.toLowerCase());

        if (tmp != 0) return tmp;

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    }

})();
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