/**
 * Created by Zerk on 31-Jan-17.
 */

"use strict";

const body = document.body;
const container = createContainer('div', body);
const modal = createModalWindow();

body.append(container);

let promise = initTest(test, Handlebars.templates.form, 'db/form.json', container);

promise.then(function () {
    console.log('View is active');

    container.append(modal);
});

function initTest(obj, tpl, json, container) {
    obj.methods.init(tpl, json);
    obj.methods.render(container);

    return obj.methods.getPromise();
}

function createContainer(tag) {
    let container = document.createElement(tag);
    container.classList.add('container');

    return container;
}

function createModalWindow() {
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let content = document.createElement('div');
    content.classList.add('modal__content');

    let results = document.createElement('p');
    results.classList.add('modal__results');

    let img = document.createElement('i');
    img.classList.add('modal__img');

    let btn = document.createElement('button');
    btn.classList.add('modal__close-btn');
    btn.innerHTML = 'Close';

    content.append(results);
    content.append(img);
    content.append(btn);
    modal.append(content);

    return modal;
}