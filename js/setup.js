'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var nameField = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
//var fireball = fireballWrap.querySelector('.setup-fireball');
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

// Открытие окна настройки персонажа
setupOpen.addEventListener('click', function() {
  setup.classList.remove('invisible');
});

// Закрытие окна настройки персонажа
setupClose.addEventListener('click', function() {
  setup.classList.add('invisible');
}); 

// Валидация ввода имени персонажа
nameField.required = true;
nameField.maxLength = 50;

// Изменение цвета мантии персонажа по нажатию
wizardCoat.addEventListener('click', function() {
  // Алгоритм изменения цвета случайным образом
  var colorNumberCoat = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumberCoat];
});

// Изменение цвета глаз персонажа по нажатию
wizardEyes.addEventListener('click', function() {
  // Алгоритм изменения цвета случайным образом
  var colorNumberEyes = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardCoatColors[colorNumberEyes];
});

// Изменение цвета фаерболов по нажатию
fireball.addEventListener('click', function() {
  // Алгоритм изменения цвета по порядку в списке
  fireball.style.background = fireballColors[1];
});

