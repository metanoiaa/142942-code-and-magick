'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var nameField = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};

var showSetupElement = function () {
  setup.classList.remove('invisible');
  // Когда диалог открыт, то клавиша ESC должна закрывать диалог
  document.addEventListener('keydown', setupKeydownHandler);
};

var hideSetupElement = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

// Открытие окна настройки персонажа
setupOpen.addEventListener('click', function () {
  showSetupElement();
});

// Открытие окна настройки персонажа с клавиатуры:
setupOpen.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showSetupElement();
  }
});

// Закрытие окна настройки персонажа
setupClose.addEventListener('click', function () {
  hideSetupElement();
});

// Закрытие окна настройки персонажа с клавиатуры:
setupClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    hideSetupElement();
  }
});

// Валидация ввода имени персонажа
nameField.required = true;
nameField.maxLength = 50;

// Изменение цвета мантии персонажа по нажатию
wizardCoat.addEventListener('click', function () {
  // Алгоритм изменения цвета случайным образом
  var colorNumberCoat = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumberCoat];
});

// Изменение цвета глаз персонажа по нажатию
wizardEyes.addEventListener('click', function () {
  // Алгоритм изменения цвета случайным образом
  var colorNumberEyes = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardCoatColors[colorNumberEyes];
});

// Изменение цвета фаерболов по нажатию
fireball.addEventListener('click', function () {
  // Алгоритм изменения цвета случайным образом
  var colorNumberFireball = Math.floor(Math.random() * wizardEyesColors.length);
  fireball.style.background = fireballColors[colorNumberFireball];
});

