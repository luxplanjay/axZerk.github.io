/**
 * Created by Zerk on 31-Jan-17.
 */

"use strict";

// When out app is done rendering the Form we are rdy to accept user input
promise.then(function () {

    console.log('Controller is active!');

    let submitBtn = document.querySelector('.test-form__submit'),
        modalWindow = document.querySelector('.modal'),
        modalWindowText = document.querySelector('.modal__results'),
        modalWindowIcon = document.querySelector('.modal__img'),
        modalBtn = document.querySelector('.modal__close-btn'),
        checkboxes = document.querySelectorAll('.test-form__checkbox');

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
        resetTest(checkboxes, modalWindow);
    });

    // window click event, resetting form and 'closing' modal window
    window.onclick = function (e) {
        if (e.target === modalWindow) {
            resetTest(checkboxes, modalWindow);
        }
    };

    //how thsi works - we are getting every :checked checkbox in the form, and then if the count is greater then 0 we compare data-correct, if at least one of checked checkboxes has data-correct !== "true" then the whole test is not correct.
    function checkAnswers() {
        let checkedEl = document.querySelectorAll('.test-form__checkbox:checked');
        let length = checkedEl.length;

        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (checkedEl[i].dataset.correct !== "true") {
                    return false;
                }
            }
            return true;
        }

        return false;
    }

    function resetTest(arr, modal) {
        let length = arr.length;

        for (let i = 0; i < length; i++) {
            arr[i].checked = false;
        }

        modal.classList.toggle('modal_visible');
    }

});
