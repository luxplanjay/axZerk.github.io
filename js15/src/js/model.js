/**
 * Created by Zerk on 02-Feb-17.
 */


define(['jquery'], function ($) {

    'use strict';

    function parseData(data) {
        let arr = [];
        for (let key in data.results) {
            if (data.results.hasOwnProperty(key)) {
                let el = $('<img>')
                    .attr({
                        src: data.results[key].media[0].gif.url,
                        title: data.results[key].title
                    })
                    .addClass('results__img')
                    .css({
                        width: data.results[key].media[0].gif.dims[0],
                        height: data.results[key].media[0].gif.dims[1]
                    });

                arr.push(el);
            }
        }

        return arr;
    }

    return {
        parseData: parseData
    };
});

