'use strict';

// Изменение цвета мантии/глаз персонажа
window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    var currentColor = element.style[property];
    var tnp = getRandomElementExcept(colors, currentColor);
    element.style[property] = tnp;
  });
};
