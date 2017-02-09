'use strict';

// Изменение цвета мантии/глаз персонажа
window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    var currentColor = element.style[property];
    var tmp = window.getRandomElementExcept(colors, currentColor);
    element.style[property] = tmp;
  });

  element.addEventListener('keydown', function (event) {
    if (window.isActivateEvent(event)) {
      var currentColor = element.style[property];
      var tmp = window.getRandomElementExcept(colors, currentColor);
      element.style[property] = tmp;
    }
  });
};
