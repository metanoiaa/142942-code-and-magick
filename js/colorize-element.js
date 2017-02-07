'use strict';

// Изменение цвета мантии/глаз персонажа
window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    var currentColor = element.style[property];
    console.log(colors, currentColor);
    var tmp = getRandomElementExcept(colors, currentColor);
    element.style[property] = tmp;
  });

  element.addEventListener('keydown', function (event) {
    if (isActivateEvent(event)) {
      var currentColor = element.style[property];
      console.log(colors, currentColor);
      var tmp = getRandomElementExcept(colors, currentColor);
      element.style[property] = tmp;
    };
  });
};
