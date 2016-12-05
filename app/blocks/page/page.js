'use strict';

// Tracking pow-btn button click
document.getElementById('pow-btn').onclick = function() {
  var base,
      exp;

  do {
    base = prompt('Введите число', '');

    if (isNaN(base)) {
      alert('Введите число, а не строку!');
    } else if (base === null) {
      alert('Была нажата кнопка Отмены!');
      return;
    }
  } while (isNaN(base));

  do {
    exp = prompt('Введите степень', '');

    if ((exp % 1) !== 0) {
      alert('Введите целое число для степени!');
    } else if (exp === null) {
      alert('Была нажата кнопка Отмены!');
      return;
    }
  } while ( (exp % 1) !== 0 );

  console.log( 'Результат возведения ' + base + ' в степень ' + exp + ' : ',
                calcPow(base, exp) );
};

function calcPow(base, exp) {
  var result = 1;

  if (exp >= 0) {
    for (var i = 0; i < exp; i++) {
      result *= base;
    }
  } else {
    for (var i = 0; i < (exp * -1); i++) {
      result *= base;
    }

    result = 1 / result;
  }

  return result;
};

// Tracking arr-btn button click
document.getElementById('arr-btn').onclick = function() {
  var namesList = [],
      userName,
      searchResult;

  namesList = getNames();
  console.log('Массив имен: ', namesList);

  userName = prompt('Введите имя пользователя:', '');

  if (userName === null) {
    alert('Была нажата кнопка Отмены!');
    return;
  }

  console.log('Имя пользователя: ', userName);

  searchResult = findUser(userName, namesList);

  if (searchResult === true) {
    alert(userName + ' , Вы успешно вошли');
  } else {
    alert('Имя пользователя не найдено!');
  }
};

function getNames() {
  var namesArr = [];

  for (var i = 0; i < 5; i++) {
    namesArr[i] = prompt('Введите имя', '');
  }

  return namesArr;
};

function findUser(name, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === name) {
      return true;
    }
  }

  return false;
};
