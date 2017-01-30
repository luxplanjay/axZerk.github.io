document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // USING PROMISE API
    generateForm();

    function generateForm() {
        loadJSON('blocks/json/test.json')
            .then(function (result) {

                let obj = JSON.parse(result);
                //Creating Handlebars template function
                let template = Handlebars.templates.test;

                //Creating actual HTML string using Handlebars template function
                let resultHtml = template(obj);

                //Appending ressulting HTML string to body just for test
                let body = document.querySelector('body');
                body.innerHTML = resultHtml;
            });
    }

    function loadJSON(path) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.overrideMimeType("application/json");

            request.onload = function () {
                resolve(this.responseText);
            };

            request.onerror = reject;
            request.open('GET', path, true);
            request.send();
        });
    }
});
