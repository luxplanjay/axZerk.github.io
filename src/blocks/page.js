'use strict';

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// elem.classList.contains("class") – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
// elem.classList.add/remove("class") – добавляет/удаляет класс class
// elem.classList.toggle("class") – если класса class нет, добавляет его, если есть – удаляет.

// var cloneEl = el.cloneNode(true);
// el.innerHTML = 'Clone wars!';
// parentEl.append(cloneEl);

var questionsList = {
    question1: {
      topic: 'Вопрос #1',
      option1: 'Вариант ответа #1',
      option2: 'Вариант ответа #2',
      option3: 'Вариант ответа #3',
      option4: 'Вариант ответа #4',
      correctAnswers: '2'
    },
    question2: {
      topic: 'Вопрос #2',
      option1: 'Вариант ответа #1',
      option2: 'Вариант ответа #2',
      option3: 'Вариант ответа #3',
      correctAnswers: '1, 3'
    },
    question3: {
      topic: 'Вопрос #3',
      option1: 'Вариант ответа #1',
      option2: 'Вариант ответа #2',
      option3: 'Вариант ответа #3',
      option4: 'Вариант ответа #4',
      option5: 'Вариант ответа #5',
      correctAnswers: '2, 3, 5'
    }
};

// calling initTest to create our main content
initTest(questionsList);

function initTest(obj) {
  var parentEl = document.body;

  // Creating an empty form with h1 Title and Submit button
  var form = createForm('Тест по программированию');

  // Declaring fragment to store all questions for later append into form as one
  var fragment = document.createDocumentFragment(),
      questionCounter = 1;

  for (var key in obj) {
    var question = createQuestion(obj[key], questionCounter);
    fragment.append(question);
    questionCounter++;
  }

  // Inserting complete fragment before Submit button
  form.insertBefore(fragment, form.lastChild);

  // Inserting complete form as first child of body
  parentEl.prepend(form);
}

function createForm(str) {
  var form = document.createElement('form');
  form.action = '#';
  form.method = 'post';
  form.classList.add('test-form');

  var formTitle = document.createElement('h1');
  formTitle.classList.add('test-form__title');
  formTitle.append(document.createTextNode(str));

  var formSubmit = document.createElement('input');
  formSubmit.type = 'submit';
  formSubmit.value = 'Проверить результаты'
  formSubmit.classList.add('test-form__submit');

  form.prepend(formTitle);
  form.append(formSubmit);

  return form;
}

function createQuestion(obj, count) {
  var fieldset = document.createElement('fieldset');
  fieldset.classList.add('test-form__item');

  var legend = document.createElement('legend');
  legend.classList.add('test-form__item-title');

  //Splitting correctAnswers key from string to array for later use
  var correctArr = obj.correctAnswers.split(', ');
  console.log('array of correct answers: ', correctArr);

  //i - for array index, j - for comparing arr[i] to current answer's number
  var i = 0,
      j = 0;

  for (var key in obj) {
    var data = obj[key];
    console.log('i: ', i);
    console.log('j: ', j);
    console.log('');

    if (key === 'topic') {
      legend.append(document.createTextNode(count + '. ' + data));
    } else if (key !== 'correctAnswers') {
      var label = document.createElement('label');
      label.classList.add('test-form__label');

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'option';
      checkbox.classList.add('test-form__checkbox');

      if (correctArr[i] == j ) {
        console.log('correctArr[i] = j, correct answer!\n ');
        //adding 'data-correct' attribute to a checkbox with 'true' state if it's a correct answer, for later use with el.dataset
        checkbox.setAttribute('data-correct', true);
        // increasing array index counter if correct answer was found
        i++;
      }

      label.append(checkbox);
      label.append(document.createTextNode(data));

      fieldset.prepend(legend);
      fieldset.append(label);
    }

    // increasing current option number after each cycle iteration
    j++;
  }

  return fieldset;
}
