/**
 * Created by Zerk on 31-Jan-17.
 */

"use strict";

promise.then(function () {
    console.log('Controller is active!');

    let submitBtn = document.querySelector('.test-form__submit'),
        modalWindow = document.querySelector('.modal'),
        modalWindowText = document.querySelector('.modal__results'),
        modalBtn = document.querySelector('.modal__close-btn'),
        checkboxes = document.querySelectorAll('.test-form__checkbox');


    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();

        var correctCheckboxes = document.querySelectorAll('.test-form__checkbox[data-correct = "true"]');

        let result = checkAnswers(correctCheckboxes);

        if (result === true) {
            modalWindowText.innerHTML = 'CORRECT!';
        } else {
            modalWindowText.innerHTML = 'FAIL!';
        }

        modalWindow.classList.toggle('modal_visible');
    });

    modalBtn.addEventListener('click', function (e) {
        e.preventDefault();
        resetTest(checkboxes, modalWindow);
    });

    window.onclick = function (e) {
        if (e.target === modalWindow) {
            resetTest(checkboxes, modalWindow);
        }
    };

    function checkAnswers(arr) {
        let length = arr.length;

        for (let i = 0; i < length; i++) {
            if (!arr[i].checked) {
                return false;
            }
        }
        return true;
    }

    function resetTest(arr, modal) {
        let length = arr.length;

        for (let i = 0; i < length; i++) {
            arr[i].checked = false;
        }

        modal.classList.toggle('modal_visible');
    }

});
