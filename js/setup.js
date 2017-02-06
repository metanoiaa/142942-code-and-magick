'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var nameField = setup.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

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

window.colorizeElement(
  document.querySelector('#wizard-coat'), [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ], 'fill');

window.colorizeElement(
  document.querySelector('#wizard-eyes'), [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ], 'fill');

window.colorizeElement(
  document.querySelector('.setup-fireball-wrap'), [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ], 'background');
