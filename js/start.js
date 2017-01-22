'use strict';

window.drawCloud = function (ctx, x, y, width, height) {
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

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawCloud(ctx, 100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i =0; i <times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 150;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height); 

    if (name === "Надя") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      // расчет насыщенности цвета мне не понятен
      ctx.fillStyle = ['rgba(0, 0, ', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join(''); 
    }
    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);
    ctx.fillStyle = "black";
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};

var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), ['Надя','Мария','Анна','Алена'], [252.15,230.21,270.11,301.13]);
