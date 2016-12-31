'use strict';

var timerText = document.querySelector('.timer__text'),
    timerMls = document.querySelector('.timer__mls'),
    startBtn = document.querySelector('.btn_start'),
    pauseBtn = document.querySelector('.btn_pause'),
    continueBtn = document.querySelector('.btn_continue'),
    resetBtn = document.querySelector('.btn_reset');

var timerId = 0,
    timerValue = 0,
    lastUpdateTime = new Date().getTime();

// Adding event listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', stopTimer);
continueBtn.addEventListener('click', continueTimer);
resetBtn.addEventListener('click', resetTimer);

resetTimerText();

// Timer update function
function updateTimer() {
  var currentTime = new Date().getTime(),
      deltaTime = currentTime - lastUpdateTime;

  timerValue += deltaTime;

  var time = new Date(timerValue);

  setTimerText(time);

  lastUpdateTime = currentTime;
}

// Start timer function
function startTimer() {
  if (!timerId) {
    lastUpdateTime = new Date().getTime();
    timerId = setInterval(function () {
      updateTimer();
    }, 1);
  }

  startBtn.classList.add('btn_hidden');
  pauseBtn.classList.remove('btn_hidden');
}

// Pause timer function
function stopTimer() {
  clearInterval(timerId);
  timerId = 0;

  pauseBtn.classList.add('btn_hidden');
  continueBtn.classList.remove('btn_hidden');
}

// Reset timer function
function resetTimer() {
  stopTimer();
  timerValue = 0;
  resetTimerText();

  startBtn.classList.remove('btn_hidden');
  pauseBtn.classList.add('btn_hidden');
  continueBtn.classList.add('btn_hidden');
}


// Continue timer function
function continueTimer() {
  continueBtn.classList.add('btn_hidden');
  pauseBtn.classList.remove('btn_hidden');

  if (!timerId) {
    lastUpdateTime = new Date().getTime();
    timerId = setInterval(function () {
      updateTimer();
    }, 1);
  }
}

// Filling timer text fields with current 'time'
function setTimerText(time) {
  var offset = time.getTimezoneOffset() / 60;

  if (offset <= 0) {
    timerText.innerHTML = addDigits(time.getHours() + offset) +
                          ':' + addDigits(time.getMinutes()) +
                          ':' + addDigits(time.getSeconds());
  } else {
    timerText.innerHTML = addDigits((time.getHours() + offset) % 24) +
                          ':' + addDigits(time.getMinutes()) +
                          ':' + addDigits(time.getSeconds());
  }


  timerMls.innerHTML = time.getMilliseconds();
}

// Timer text fields reset
function resetTimerText() {
  timerText.innerHTML = addDigits(0) + ':' + addDigits(0) + ':' + addDigits(0);
  timerMls.innerHTML = '0';
}

// Adding digits to single digit numbers 0-9 etc
function addDigits(num) {
    return ('00' + num).substr(-2);
}
