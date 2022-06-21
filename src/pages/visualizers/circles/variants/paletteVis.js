import { analyser, dataArray } from '../..';
import { tsbarvisualizercanvas, isPlaying } from '../circles';
import { palette } from '../../../Content';

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
let l = 5;
let dirK = 1;
let dirL = -1;

let m = 150;
let n = 420;
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


let circumference = 2 * Math.PI;

function updateValues(x, y, dirX, dirY, staticRadius, speed) {
  if (y + staticRadius > tsbarvisualizercanvas.height || y - staticRadius < 0) {
    dirY *= -1;
  }
  if (x + staticRadius > tsbarvisualizercanvas.width || x - staticRadius < 0) {
    dirX *= -1;
  }
  x += dirX * speed * (tsbarvisualizercanvas.height / 500);
  y += dirY * speed * (tsbarvisualizercanvas.height / 500);

  if (x + staticRadius - 10 > tsbarvisualizercanvas.width) {
    x = tsbarvisualizercanvas.width - staticRadius - 10;
  } else if (x - staticRadius + 10 < 0) {
    x = staticRadius + 10;
  }
  if (y + staticRadius - 10 > tsbarvisualizercanvas.height) {
    y = tsbarvisualizercanvas.height - staticRadius - 10;
  } else if (y - staticRadius + 10 < 0) {
    y = staticRadius + 10;
  }

  return [x, y, dirX, dirY];
}

export function paletteVis() {
  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let radius;
  let staticRadius;
  let speed;
  ctx.strokeStyle = '#000';

  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.fillStyle = `${palette.Vibrant.hex}`;
  radius = ((Math.max(dataArray[0]-200, 0) / 300) + 1) * (tsbarvisualizercanvas.height/5);
  staticRadius = 1 * (tsbarvisualizercanvas.height/5);
  speed = 0.4;
  [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, staticRadius, speed)
  ctx.arc(a, b, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = `${palette.Muted.hex}`;
  radius = ((Math.max(dataArray[40]-20, 0) / 500) + 0.6) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.5 * (tsbarvisualizercanvas.height/5);
  speed = 0.6;
  [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, staticRadius, speed)
  ctx.arc(c, d, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `${palette.DarkVibrant.hex}`;
  radius = ((Math.max(dataArray[100], 0) / 500) + 0.38) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.35 * (tsbarvisualizercanvas.height/5);
  speed = 1;
  [e, f, dirE, dirF] = updateValues(e, f, dirE, dirF, staticRadius, speed)
  ctx.arc(e, f, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `${palette.LightVibrant.hex}`;
  radius = ((Math.max(dataArray[120], 0) / 500) + 0.37) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.35 * (tsbarvisualizercanvas.height/5);
  speed = 1.2;
  [m, n, dirM, dirN] = updateValues(m, n, dirM, dirN, staticRadius, speed)
  ctx.arc(m, n, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `${palette.DarkMuted.hex}`;
  radius = ((Math.max(dataArray[160]-10, 0) / 400) + 0.36) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.33 * (tsbarvisualizercanvas.height/5);
  speed = 1.3;
  [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, staticRadius, speed)
  ctx.arc(g, h, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = `${palette.Muted.hex}`;
  radius = ((Math.max(dataArray[180]-10, 0) / 500) + 0.35) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.33 * (tsbarvisualizercanvas.height/5);
  speed = 1.4;
  [o, p, dirO, dirP] = updateValues(o, p, dirO, dirP, staticRadius, speed)
  ctx.arc(o, p, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `${palette.Vibrant.hex}`;
  radius = ((Math.max(dataArray[190], 0) / 1000) + 0.34) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.32 * (tsbarvisualizercanvas.height/5);
  speed = 1.5;
  [i, j, dirI, dirJ] = updateValues(i, j,  dirI, dirJ, staticRadius, speed)
  ctx.arc(i, j, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.fillStyle = `${palette.DarkVibrant.hex}`;
  radius = ((Math.max(dataArray[200], 0) / 1000) + 0.32) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.32 * (tsbarvisualizercanvas.height/5);
  speed = 1.6;
  [q, r, dirQ, dirR] = updateValues(q, r,  dirQ, dirR, staticRadius, speed)
  ctx.arc(q, r, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  radius = ((Math.max(dataArray[210], 0) / 1000) + 0.3) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.3 * (tsbarvisualizercanvas.height/5);
  speed = 0.7;
  ctx.fillStyle = `${palette.LightVibrant.hex}`;
  [k, l, dirK, dirL] = updateValues(k, l, dirK, dirL, staticRadius, speed);
  ctx.arc(k, l, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();


  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(paletteVis);
    }, 16);
  }
}