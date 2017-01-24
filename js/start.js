'use strict';

var drawCloud = function (ctx, x, y, width, height) {
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
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

// получение максимального элемента массива
var getMaxValue = function (times){
  var max = times[0];
  for (var i = 0; i < times.length; i++) { 
    if (max < times[i]) {
      max = times[i];
    }
  }
  return max;
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawCloud(ctx, 100, 10, 420, 270);

  ctx.fillStyle = 'black';
  drawText(ctx, 120, 40, 'Ура вы победили!');
  drawText(ctx, 120, 60, 'Список результатов:');

  var max = getMaxValue(times);

  var histoHeight = 150;
  var histoX = 150;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    drawText(ctx, histoX + columnIndent * i, 90 + histoHeight - height, time.toFixed(0));

    if (name === "Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      // расчет насыщенности цвета
      ctx.fillStyle = ['rgba(0, 0, ', (Math.random() * 255).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join(''); 
    }
    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);
    ctx.fillStyle = "black";
    drawText(ctx, histoX + columnIndent * i, 100 + histoHeight + 20, name);
  }
};

