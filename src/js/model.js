/**
 * Created by Zerk on 31-Jan-17.
 */

"use strict";

console.log('Model is active!');

// Creating new instance of test
const test = createTest();

function createTest() {
    let template,
        promise;

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

    let test = {
        methods: {
            init: function (tpl, path) {
                template = tpl;
                promise = loadJSON(path);
            },
            // returning the result on loadJSON so we can use promise.then(...)
            getPromise: function () {
                return promise;
            },

            //getting json -> parsing to object -> using template to get HTML -> attaching to specified container
            render: function (container) {
                promise.then(function (result) {
                    try {
                        let obj = JSON.parse(result);
                        let resultHtml = template(obj);
                        container.innerHTML = resultHtml;
                    } catch (e) {
                        console.log('ERROR in: ', e);
                    }
                });
            }
        }
    };

    return test;
}