/**
 * Created by Zerk on 31-Jan-17.
 */

define(['model', 'view'], function (test, view) {

    'use strict';

// When our app is done rendering the Form we are rdy to accept user input
    test.getPromise().then(function () {

        let submitBtn = document.querySelector('.test-form__submit'),
            modalWindow = document.querySelector('.modal'),
            modalWindowText = document.querySelector('.modal__results'),
            modalWindowIcon = document.querySelector('.modal__img'),
            modalBtn = document.querySelector('.modal__close-btn');


        // event on pressing form Submit btn
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();

            let result = checkAnswers();

            if (result === true) {
                modalWindowText.innerHTML = 'WELL DONE!';
                modalWindowIcon.classList.remove('modal__img_sad');
                modalWindowIcon.classList.add('modal__img_happy');
            } else {
                modalWindowText.innerHTML = 'EPIC FAIL!';
                modalWindowIcon.classList.remove('modal__img_happy');
                modalWindowIcon.classList.add('modal__img_sad');
            }

            modalWindow.classList.toggle('modal_visible');
        });

        //modal window Close btn click event, resetting form and 'closing' modal window
        modalBtn.addEventListener('click', function (e) {
            e.preventDefault();
            view.reset();
        });

        // window click event, resetting form and 'closing' modal window
        window.onclick = function (e) {
            if (e.target === modalWindow) {
                view.reset();
            }
        };

        //how this works - we are getting every :checked and also every correct checkbox in the form,
        // and then if the count is greater then 0 we compare data-correct, if at least one of checked checkboxes has data-correct !== "true"
        // then the whole test is not correct. Same goes for when at least one of correct answers is not checked
        function checkAnswers() {

            let checkedArr = document.querySelectorAll('.test-form__checkbox:checked'),
                correctArr = document.querySelectorAll('.test-form__checkbox[data-correct = "true"]'),
                checkedArrLength = checkedArr.length,
                correctArrLength = correctArr.length;

            for (let i = 0; i < correctArrLength; i++) {
                if (!correctArr[i].checked) {
                    return false;
                }
            }

            if (checkedArrLength > 0) {
                for (let i = 0; i < checkedArrLength; i++) {
                    if (checkedArr[i].dataset.correct !== "true") {
                        return false;
                    }
                }

                return true;
            }

            return false;
        }
    });

});
