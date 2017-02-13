'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;

  // Получение случайного элемента из массива
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  return {
    getRandomElement: getRandomElement,

    getRandomElementExcept: function (array, exceptElement) {
      var newColor = exceptElement;
      while (newColor === exceptElement) {
        newColor = getRandomElement(array);
      }
      return newColor;
    },

    isActivateEvent: function (event) {
      return event.keyCode && event.keyCode === ENTER_KEY_CODE;
    }
  };
})();

