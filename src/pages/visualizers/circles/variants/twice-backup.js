import { analyser, dataArray } from '../..';
import { tsbarvisualizercanvas, isPlaying } from '../circles';

let a = 160;
let b = 350;
let dirA = 1;
let dirB = -1;

let c = 450;
let d = 310;
let dirC = -1;
let dirD = 1;

let e = 230;
let f = 460;
let dirE = -1;
let dirF = -1;

let g = 310;
let h = 450;
let dirG = -1;
let dirH = 1;

let i = 160;
let j = 310;
let dirI = -1;
let dirJ = 1;

let k = 400;
let l = 100;
let dirK = 1;
let dirL = -1;

let m = 150;
let n = 410;
let dirM = 1;
let dirN = -1;

let o = 400;
let p = 290;
let dirO = 1;
let dirP = 1;

let q = 200;
let r = 310;
let dirQ = 1;
let dirR = 1;

let shorterCanvasSide;
let circumference = 2 * Math.PI;

function updateValues(x, y, dirX, dirY, radius, speed, staticRadius) {
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
  x += dirX * speed * (shorterCanvasSide / 500);
  // x += dirX  * speed * (radius / 100);
  y += dirY * 1 * (shorterCanvasSide / 500);
  // y += dirY * (radius / 100);

  if (x + radius - 30 > tsbarvisualizercanvas.width) {
    x = tsbarvisualizercanvas.width * Math.random();
  } else if (x - radius + 30 < 0) {
    x = radius + 30;
  }
  if (y + radius - 30 > tsbarvisualizercanvas.height) {
    y = tsbarvisualizercanvas.height * Math.random();
  } else if (y - radius + 30 < 0) {
    y = radius + 30;
  }

  return [x, y, dirX, dirY];
}

export function twice() {
  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
  shorterCanvasSide = (ytmusicplayer.clientHeight < ytmusicplayer.clientWidth) ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let radius;
  let speed;
  ctx.strokeStyle = '#000';

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = `hsla(195, 100%, 55%, 1)`;
  radius = ((Math.max(dataArray[0]-200, 0) / 300) + 1) * (shorterCanvasSide/5);
  speed = 0.4;
  [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, radius, speed)
  ctx.arc(a, b, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = `hsla(130 , 90%, 50%, 1)`;
  radius = ((Math.max(dataArray[1]-20, 0) / 500) + 0.6) * (shorterCanvasSide/5);
  speed = 0.6;
  [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, radius, speed, radius)
  ctx.arc(c, d, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(330, 70%, 75%, 1)`;
  radius = ((Math.max(dataArray[40], 0) / 600) + 0.38) * (shorterCanvasSide/5);
  speed = 1;
  [e, f, dirE, dirF] = updateValues(e, f, dirE, dirF, radius, speed)
  ctx.arc(e, f, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(265, 80%, 70%, 1)`;
  radius = ((Math.max(dataArray[80], 0) / 600) + 0.37) * (shorterCanvasSide/5);
  speed = 1.4;
  [m, n, dirM, dirN] = updateValues(m, n, dirM, dirN, radius, speed)
  ctx.arc(m, n, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(35, 100%, 60%, 1)`;
  radius = ((Math.max(dataArray[120]-10, 0) / 400) + 0.36) * (shorterCanvasSide/5);
  speed = 1.3;
  [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, radius, speed)
  ctx.arc(g, h, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.fillStyle = `hsla(170, 100%, 40%, 1)`;
  radius = ((Math.max(dataArray[140]-10, 0) / 600) + 0.35) * (shorterCanvasSide/5);
  speed = 1.5;
  [o, p, dirO, dirP] = updateValues(o, p, dirO, dirP, radius, speed)
  ctx.arc(o, p, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(0, 0%, 100%, 1)`;
  radius = ((Math.max(dataArray[170], 0) / 800) + 0.34) * (shorterCanvasSide/5);
  speed = 2;
  [i, j, dirI, dirJ] = updateValues(i, j,  dirI, dirJ, radius, speed)
  ctx.arc(i, j, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.fillStyle = `hsla(0, 100%, 50%, 1)`;
  radius = ((Math.max(dataArray[190], 0) / 800) + 0.32) * (shorterCanvasSide/5);
  speed = 1.505;
  [q, r, dirQ, dirR] = updateValues(q, r,  dirQ, dirR, radius, speed)
  ctx.arc(q, r, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  radius = ((Math.max(dataArray[200], 0) / 800) + 0.3) * (shorterCanvasSide/5);
  speed = 0.7;
  ctx.fillStyle = `hsla(230, 100%, 50%, 1)`;
  [k, l, dirK, dirL] = updateValues(k, l, dirK, dirL, radius, speed);
  ctx.arc(k, l, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();


  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(twice);
    }, 16);
  }
}