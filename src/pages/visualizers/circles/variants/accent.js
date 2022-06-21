import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying } from '../circles';
import { mostPopulatedColor } from '../../../Content';

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
let dirF = 1;

let g = 310;
let h = 450;
let dirG = -1;
let dirH = 1;

let k = 400;
let l = 5;
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

export function accent() {
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
  ctx.fillStyle = `hsla(
    ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
    ${mostPopulatedColor.hsl[1] * 100}%, 
    50%, 
    0.95
  )`;
  radius = ((Math.max(dataArray[0]-200, 0) / 300) + 1) * (tsbarvisualizercanvas.height/5);
  staticRadius = 1 * (tsbarvisualizercanvas.height/5);
  speed = 0.4;
  [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, staticRadius, speed)
  ctx.arc(a, b, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = `hsla(
    ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
    ${mostPopulatedColor.hsl[1] * 100}%, 
    55%, 
    0.95
  )`;
  radius = ((Math.max(dataArray[40]-20, 0) / 500) + 0.6) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.5 * (tsbarvisualizercanvas.height/5);
  speed = 0.6;
  [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, staticRadius, speed)
  ctx.arc(c, d, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(
    ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
    ${mostPopulatedColor.hsl[1] * 100}%, 
    60%, 
    0.95
  )`;
  radius = ((Math.max(dataArray[100], 0) / 500) + 0.38) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.35 * (tsbarvisualizercanvas.height/5);
  speed = 1;
  [e, f, dirE, dirF] = updateValues(e, f, dirE, dirF, staticRadius, speed)
  ctx.arc(e, f, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(
    ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
    ${mostPopulatedColor.hsl[1] * 100}%, 
    70%, 
    0.95
  )`;
  radius = ((Math.max(dataArray[160]-10, 0) / 400) + 0.36) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.33 * (tsbarvisualizercanvas.height/5);
  speed = 1.3;
  [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, staticRadius, speed)
  ctx.arc(g, h, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  radius = ((Math.max(dataArray[210], 0) / 1000) + 0.3) * (tsbarvisualizercanvas.height/5);
  staticRadius = 0.3 * (tsbarvisualizercanvas.height/5);
  speed = 0.7;
  ctx.fillStyle = `hsla(
    ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
    ${mostPopulatedColor.hsl[1] * 100}%, 
    85%, 
    0.95
  )`;
  [k, l, dirK, dirL] = updateValues(k, l, dirK, dirL, staticRadius, speed);
  ctx.arc(k, l, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();


  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(accent);
    }, 16);
  }
}