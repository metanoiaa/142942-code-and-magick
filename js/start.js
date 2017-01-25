'use strict';

var drawCloud = function (ctx, x, y, width, height, fillColor) {
  ctx.fillStyle = fillColor;
  var offset = 10;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + offset, y + height / 2);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width - offset, y + height / 2);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

var drawText = function (ctx, x, y, text) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

// получение максимального элемента массива
var getMaxValue = function (times) {
  var max = times[0];
  for (var i = 0; i < times.length; i++) { 
    if (max < times[i]) {
      max = times[i];
    }
  }
  return max;
};

var drawColumn = function (ctx, columnX, columnY, time, name, height) {
  drawText(ctx, columnX, columnY, time.toFixed(0));

  if (name === "Вы") {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    // расчет насыщенности цвета
    ctx.fillStyle = ['rgba(0, 0, ', (Math.random() * 255).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join(''); 
  }
  ctx.fillRect(columnX, 10 + columnY, 40, height);
  drawText(ctx, columnX, 10 + columnY + height + 20, name);
};

var drawGraph = function (ctx, names, times) {
  var max = getMaxValue(times);

  var histoHeight = 150;
  var histoX = 150;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    var columnX = histoX + columnIndent * i;
    var columnY = 90 + histoHeight - height;

    drawColumn(ctx, columnX, columnY, time, name, height);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, 110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

  drawCloud(ctx, 100, 10, 420, 270, 'rgba(256, 256, 256, 1.0)');

  drawText(ctx, 120, 40, 'Ура вы победили!');
  drawText(ctx, 120, 60, 'Список результатов:');

  drawGraph(ctx, names, times);
};

