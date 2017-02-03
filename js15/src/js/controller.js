/**
 * Created by Zerk on 02-Feb-17.
 */

define(['view', 'model', 'jquery'], function (view, model, $) {

    'use strict';
    
    let $btn = $('.search-form__btn'),
        $input = $('.search-form__input');

    $btn.hover(function () {
        $(this).toggleClass('search-form__btn_hover');
    }, function () {
        $(this).toggleClass('search-form__btn_hover');
    });

    $btn.click(function (e) {
        e.preventDefault();

        view.resetResults();
        sendRequest($input.val());
    });

    function sendRequest(str) {
        $.getJSON('https://api.tenor.co/v1/search?tag=' + str + '&key=LIVDSRZULELA', function (data) {

            let result = model.parseData(data);

            view.showSearchResults(result);
        });
    }

});
