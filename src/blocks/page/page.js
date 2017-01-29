document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    const articleList = [
        {
            title: 'Article Title 1',
            text: 'Lorem ipsum',
        },
        {
            title: 'Article Title 2',
            text: 'Lorem ipsum',
        },
        {
            title: 'Article Title 3',
            text: 'Lorem ipsum',
        }
    ];

    function loadTemplate (path) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.onload = function () {
                resolve(this.responseText);
            };

            request.onerror = reject;
            request.open('GET', path, true);
            request.send();
        });
    }

    loadTemplate('blocks/templates/test.hbs').then(function (result) {
        console.log(result);

        let template = Handlebars.compile(result);
        console.log(template);

        let html = template(articleList);
        console.log(html);

    }).catch(function () {
        alert('ERROR!');
    });
});

// let test = JSON.stringify(articleList);
// // console.log(test);
// localStorage.setItem('users', test);
//
// let getFromStorage = localStorage.getItem('users');
// console.log('From local storage: ', getFromStorage);
// console.log('type is: ', typeof getFromStorage);
//
// let obj = JSON.parse(getFromStorage);
// console.log(obj);
