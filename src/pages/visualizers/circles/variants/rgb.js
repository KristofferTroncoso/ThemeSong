import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying } from '../circles';

let a = 160;
let b = 350;
let dirA = 1;
let dirB = 1;

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
let dirI = 1;
let dirJ = 1;

let k = 190;
let l = 230;
let dirK = -1;
let dirL = -1;


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



export function rgb() {
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
  // ctx.fillStyle = `hsla(0, 100%, 50%, 0.8)`;
  radius = ((Math.max(dataArray[0]-200, 0) / 300) + 1) * (tsbarvisualizercanvas.height/5);
  staticRadius = 1 * (tsbarvisualizercanvas.height/5);
  ctx.fillStyle = `hsla(${350 + (Math.max(dataArray[0]-200, 0) * 0.3) + 1}, 100%, 50%, 0.8)`;
  speed = 0.4;
  [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, staticRadius, speed)
  ctx.arc(a, b, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 5;
  // ctx.fillStyle = `hsla(240 , 100%, 50%, 0.8)`;
  radius = ((Math.max(dataArray[40]-20, 0) / 500) + 0.6) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.5 * (tsbarvisualizercanvas.height/5);
  ctx.fillStyle = `hsla(${220 + (dataArray[40] * 0.3)}, 100%, 50%, 0.8)`;
  speed = 1;
  [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, staticRadius, speed)
  ctx.arc(c, d, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(300, 100%, 50%, 0.8)`;
  radius = ((Math.max(dataArray[100], 0) / 500) + 0.35) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.35 * (tsbarvisualizercanvas.height/5);
  speed = 1.2;
  [e, f, dirE, dirF] = updateValues(e, f, dirE, dirF, staticRadius, speed)
  ctx.arc(e, f, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.fillStyle = `hsla(120, 100%, 40%, 0.8)`;
  radius = ((Math.max(dataArray[160]-10, 0) / 500) + 0.33) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.33 * (tsbarvisualizercanvas.height/5);
  speed = 1.4;
  [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, staticRadius, speed)
  ctx.arc(g, h, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = `hsla(38, 100%, 50%, 0.8)`;
  radius = ((Math.max(dataArray[190], 0) / 1000) + 0.32) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.32 * (tsbarvisualizercanvas.height/5);
  speed = 1.5;
  [i, j, dirI, dirJ] = updateValues(i, j,  dirI, dirJ, staticRadius, speed)
  ctx.arc(i, j, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 2;
  radius = ((Math.max(dataArray[210], 0) / 1000) + 0.3) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.3 * (tsbarvisualizercanvas.height/5);
  speed = 1.6;
  ctx.fillStyle = `hsla(${50 + (Math.max(dataArray[210], 0) * 0.3) + 1}, 100%, 50%, 0.8)`;
  [k, l, dirK, dirL] = updateValues(k, l, dirK, dirL, staticRadius, speed);
  ctx.arc(k, l, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();


  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(rgb);
    }, 16);
  }
}