/**
 * Created by Zerk on 31-Jan-17.
 */

"use strict";

const body = document.body;

// container for the whole test
const container = createNode('div', 'container');

body.prepend(container);

// Initializing test with template + external .json and getting a Promise as a result
let promise = initTest(test, Handlebars.templates.form, 'db/form.json', container);

// When async call is done and we have data as a result
promise.then(function () {
    console.log('View is active');

    const modal = createModalWindow();
    container.append(modal);
});

function initTest(obj, tpl, json, container) {
    obj.methods.init(tpl, json);
    obj.methods.render(container);

    return obj.methods.getPromise();
}

function createModalWindow() {

    let modal = createNode('div', 'modal'),
        content = createNode('div', 'modal__content'),
        results = createNode('p', 'modal__results'),
        img = createNode('i', 'modal__img'),
        btn = createNode('button', 'modal__close-btn');

    btn.innerHTML = 'Close';

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