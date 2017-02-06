'use strict';

// Получение случайного елемента из массива
window.getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

window.getRandomElementExcept = function (array, exceptElement) {
  var newColor = exceptElement;
  while (newColor === exceptElement) {
    newColor = getRandomElement(array);
  }
  return newColor;
};