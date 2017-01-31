/**
 * Created by Zerk on 31-Jan-17.
 */

"use strict";

console.log('Model is active!');

const test = createTest();

function createTest() {
    let template,
        promise;

    function getJSON(path) {
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

    let test = {
        methods: {
                init: function (template, json) {
                    this.loadTemplate(template);
                    promise = this.loadJSON(json);
                },

                loadTemplate: function (value) {
                    template = value;
                },

                loadJSON: function (path) {
                    return getJSON(path);
                },

                getPromise: function () {
                    return promise;
                },

                render: function (container) {
                    promise.then(function (result) {
                        let obj, resultHtml;

                        try {
                            obj = JSON.parse(result);
                        } catch (e) {
                            console.log('ERROR in', e);
                        }

                        resultHtml = template(obj);
                        container.innerHTML = resultHtml;
                    });
                }
        }
    };

    return test;
}