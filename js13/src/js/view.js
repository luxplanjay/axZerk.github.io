/**
 * Created by Zerk on 31-Jan-17.
 */

define(['model'], function (test) {

    'use strict';

    const body = document.body;

    // container and modal window
    const container = createNode('div', 'container'),
        modal = createModalWindow();

    container.append(modal);
    body.prepend(container);

    // Initializing test with external .json
    initTest(test, 'db/form.json', container);

    function initTest(obj, json, parent) {
        obj.init(json);

        obj.getPromise().then(function (result) {
            try {
                let resultHtml = obj.getHtml(result);
                parent.innerHTML += resultHtml;
            } catch (ex) {
                console.log('ERROR in: ', ex);
            }
        })
    }

    function createModalWindow() {

        let modal = createNode('div', 'modal'),
            content = createNode('div', 'modal__content'),
            results = createNode('p', 'modal__results'),
            img = createNode('i', 'modal__img'),
            btn = createNode('button', 'modal__close-btn');

        btn.innerHTML = 'close';

        content.append(results);
        content.append(img);
        content.append(btn);
        modal.append(content);

        return modal;
    }

    function createNode(tag, cls) {
        let el = document.createElement(tag);
        el.classList.add(cls);

        return el;
    }

    function reset() {
        let checkboxes = document.querySelectorAll('.test-form__checkbox'),
            modalWindow = document.querySelector('.modal'),
            length = checkboxes.length;

        for (let i = 0; i < length; i++) {
            checkboxes[i].checked = false;
        }

        modalWindow.classList.toggle('modal_visible');
    }

    return {
        reset: reset
    };

});

