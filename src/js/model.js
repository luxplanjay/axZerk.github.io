/**
 * Created by Zerk on 31-Jan-17.
 */

define(['handlebars', 'template'], function (Handlebars) {

    'use strict';

    function init() {
        // private variables and foo
        const template = Handlebars.templates.form;
        let promise;

        // Getting .json file from path with async call and returning a Promise
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

        const test = {
            init: function (path) {
                promise = loadJSON(path);
            },
            getHtml: function (json) {
                let result = JSON.parse(json);
                return template(result);
            },
            // returning promise, result of init so we can use promise.then(...)
            getPromise: function () {
                return promise;
            }
        };

        return test;
    }

    return init();

});

