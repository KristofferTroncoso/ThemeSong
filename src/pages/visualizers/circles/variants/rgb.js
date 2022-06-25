import { analyser, dataArray } from '../..';
import { tsbarvisualizercanvas, isPlaying } from '../circles';

let a = 160;
let b = 350;
let dirA = 1;
let dirB = 1;
let speedA = 0.7;
let speedB = 0.2;

let c = 450;
let d = 310;
let dirC = -1;
let dirD = 1;
let speedC = 0.7;
let speedD = 1.2;

let g = 310;
let h = 450;
let dirG = -1;
let dirH = 1;
let speedG = 1.4;
let speedH = 1.2;

let circumference = 2 * Math.PI;
let shorterCanvasSide;

function updateValues(x, y, dirX, dirY, radius, speedX, speedY) {
  if (y + radius > tsbarvisualizercanvas.height) {
    dirY = Math.abs(dirY) * -1;
  } else if (y - radius < 0) {
    dirY = Math.abs(dirY);
  }
  if (x + radius > tsbarvisualizercanvas.width) {
    dirX = Math.abs(dirX) * -1;
  } else if (x - radius < 0) {
    dirX = Math.abs(dirX);
  }
  x += dirX * speedX * (shorterCanvasSide/ 500);
  y += dirY * speedY * (shorterCanvasSide / 500);

  if (x + radius - 10 > tsbarvisualizercanvas.width) {
    x = tsbarvisualizercanvas.width - radius - 10;
  } else if (x - radius + 10 < 0) {
    x = radius + 10;
  }
  if (y + radius - 10 > tsbarvisualizercanvas.height) {
    y = tsbarvisualizercanvas.height - radius - 10;
  } else if (y - radius + 10 < 0) {
    y = radius + 10;
  }

  return [x, y, dirX, dirY];
}

export function rgb() {
  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
  shorterCanvasSide = (ytmusicplayer.clientHeight < ytmusicplayer.clientWidth) ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let radius;
  ctx.strokeStyle = '#000';

  ctx.beginPath();
  ctx.lineWidth = 6;
  radius = ((Math.max(dataArray[0] - 190, 0) / 300) + 1) * (shorterCanvasSide/5);
  ctx.fillStyle = `hsla(${345 + (Math.max(dataArray[0]- 190, 0) * 0.4) + 1}, 100%, 50%, 0.9)`;
  [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, radius, speedA, speedB)
  ctx.arc(a, b, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 5;
  radius = ((Math.max(dataArray[20]- 20, 0) / 700) + 0.5) * (shorterCanvasSide/5);
  ctx.fillStyle = `hsla(${210 + (dataArray[40] * 0.4)}, 100%, 50%, 0.9)`;
  [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, radius, speedC, speedD)
  ctx.arc(c, d, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  radius = ((Math.max(dataArray[160]-10, 0) / 600) + 0.33) * (shorterCanvasSide/5);
  ctx.fillStyle = `hsla(${105 + (dataArray[160] * 0.5)}, 100%, 40%, 0.9)`;
  [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, radius, speedG, speedH)
  ctx.arc(g, h, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();


  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(rgb);
    }, 16);
  }
}