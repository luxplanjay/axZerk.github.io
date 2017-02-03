/**
 * Created by Zerk on 02-Feb-17.
 */

define(['jquery'], function ($) {

    'use strict';

    const $body = $('body');

    initForm($body);

    function initForm(parent) {
        let $container = $('<div></div>').addClass('container'),
            $form = $('<form></form>').attr({
                class: 'search-form',
                method: 'get'
            }),
            $textfield = $('<input>').attr({
                type: 'text',
                class: 'search-form__input',
                placeholder: 'enter search request'
            }),
            $btn = $('<input>').attr({
                type: 'submit',
                class: 'search-form__btn',
                value: 'search'
            }),
            $results = $('<div></div>').addClass('results');

        $form.append($textfield).append($btn);
        $container.append($form).append($results);
        parent.prepend($container);
    }

    function resetResults() {
        $('.results').html('');
    }

    function showSearchResults(arr) {
        let parent = $('.results');

        $(arr).each(function () {
            parent.append(this);
        });
    }

    return {
        resetResults: resetResults,
        showSearchResults: showSearchResults
    };

});
