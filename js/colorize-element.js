'use strict';

window.colorizeElement = (function () {
  // Изменение цвета мантии/глаз персонажа
  return function (element, colors, property) {
    element.addEventListener('click', function () {
      var currentColor = element.style[property];
      var tmp = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = tmp;
    });

    element.addEventListener('keydown', function (event) {
      if (window.utils.isActivateEvent(event)) {
        var currentColor = element.style[property];
        var tmp = window.utils.getRandomElementExcept(colors, currentColor);
        element.style[property] = tmp;
      }
    });
  };
})();

