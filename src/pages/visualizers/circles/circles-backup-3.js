import { analyser, dataArray } from '../';
import { visualizers } from '..';
export let tsbarvisualizercanvas;
export let isPlaying = false;

export let barWidth = 30;
export let borderWidth = 4;
export let gap = 8;

function setUp() {
  // Get a canvas defined with ID "oscilloscope"
  console.log('bars setup')
  let ytmusicplayer = document.querySelector("ytmusic-player")
  tsbarvisualizercanvas = document.getElementById("ts-barvisualizer-canvas");
  console.log(tsbarvisualizercanvas);

  if (!tsbarvisualizercanvas) {
    ytmusicplayer.appendChild(document.createElement('canvas')).id = 'ts-barvisualizer-canvas';
  }

  tsbarvisualizercanvas = document.getElementById("ts-barvisualizer-canvas");

  tsbarvisualizercanvas.style.position = "absolute";
  tsbarvisualizercanvas.style.height = "100%";
  tsbarvisualizercanvas.style.width = "100%";
  tsbarvisualizercanvas.style.top = "0";
  tsbarvisualizercanvas.style.left = "0";
  // tsbarvisualizercanvas.style.border = "1px solid tomato";
  tsbarvisualizercanvas.style.borderRadius = "6px";
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
}

let x = 100;
let y = 300;
let dirX = 1;
let dirY = 1;
let radius;
let diameter = 100;
const speed = 1;
let circumference = 2 * Math.PI;

export function drawCircles() {
  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#000';
  ctx.fillStyle = `hsla(0, 100%, 50%, 0.8)`;
  // ctx.arc(tsbarvisualizercanvas.width * 0.2, tsbarvisualizercanvas.height * 0.7, (tsbarvisualizercanvas.width / 10) + (dataArray[0] / 3), 0, 2 * Math.PI);
  // better formula below shows only bass parts. otherwise it doesnt move. like a real woofer.
  // ctx.arc(tsbarvisualizercanvas.width * 0.2, tsbarvisualizercanvas.height * 0.7, (tsbarvisualizercanvas.width / 10) + (Math.max(dataArray[0]-200, 0) / 2), 0, 2 * Math.PI);
  // formula below scales better with the canvas size
  // let x = tsbarvisualizercanvas.width * 0.2;
  // let y = tsbarvisualizercanvas.height * 0.7;

  radius = ((Math.max(dataArray[0]-200, 0) / 300) + 0.7) * (tsbarvisualizercanvas.width/5);
  let staticRadius = 0.7 * (tsbarvisualizercanvas.width/5);
  ctx.arc(x, y, radius, 0, circumference);
  ctx.fill();
  ctx.stroke();

  if (y + staticRadius > tsbarvisualizercanvas.height || y - staticRadius < 0) {
    dirY *= -1;
  }
  if (x + staticRadius > tsbarvisualizercanvas.width || x - staticRadius < 0) {
    dirX *= -1;
  }
  x += dirX * speed;
  y += dirY * speed;

  if (x + staticRadius - 1 > tsbarvisualizercanvas.width) {
    x = tsbarvisualizercanvas.width - staticRadius - 10;
  } else if (x - staticRadius + 1 < 0) {
    x = staticRadius + 10;
  }
  if (y + staticRadius - 1 > tsbarvisualizercanvas.height) {
    y = tsbarvisualizercanvas.height - staticRadius - 10;
  } else if (y - staticRadius + 1 < 0) {
    y = staticRadius + 10;
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  // ctx.fillStyle = `hsla(69, 100%, ${(dataArray[0] / 500) * 100}%, 0.7)`;
  ctx.fillStyle = `hsla(40 , 100%, 50%, 0.8)`;
  // ctx.arc(tsbarvisualizercanvas.width * 0.5, tsbarvisualizercanvas.height * 0.7, (tsbarvisualizercanvas.width / 20) + (dataArray[40] / 6), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.53, tsbarvisualizercanvas.height * 0.7, ((Math.max(dataArray[40]-20, 0) / 900) + 0.4) * (tsbarvisualizercanvas.width/5), 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fillStyle = `hsla(120, 100%, 50%, 0.8)`;
  // ctx.arc(tsbarvisualizercanvas.width * 0.7, tsbarvisualizercanvas.height * 0.7, (tsbarvisualizercanvas.width / 30) + (dataArray[100] / 5), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.75, tsbarvisualizercanvas.height * 0.7, ((Math.max(dataArray[100]-20, 0) / 1000) + 0.25) * (tsbarvisualizercanvas.width/5), 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.fillStyle = `hsla(245, 100%, 50%, 0.8)`;
  // ctx.arc(tsbarvisualizercanvas.width * 0.85, tsbarvisualizercanvas.height * 0.7, (tsbarvisualizercanvas.width / 30) + (dataArray[160] / 6), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.9, tsbarvisualizercanvas.height * 0.7, ((Math.max(dataArray[160]-40, 0) / 1500) + 0.15) * (tsbarvisualizercanvas.width/5), 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = `hsla(340, 100%, 50%, 0.8)`;
  // ctx.arc(tsbarvisualizercanvas.width * 0.85, tsbarvisualizercanvas.height * 0.7, (tsbarvisualizercanvas.width / 30) + (dataArray[160] / 6), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.3, tsbarvisualizercanvas.height * 0.3, ((Math.max(dataArray[190], 0) / 1500) + 0.12) * (tsbarvisualizercanvas.width/5), 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = `hsla(300, 100%, 50%, 0.8)`;
  // ctx.arc(tsbarvisualizercanvas.width * 0.85, tsbarvisualizercanvas.height * 0.7, (tsbarvisualizercanvas.width / 30) + (dataArray[160] / 6), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.6, tsbarvisualizercanvas.height * 0.3, ((Math.max(dataArray[210], 0) / 1000) + 0.08) * (tsbarvisualizercanvas.width/5), 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();


  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(drawCircles);
    }, 17);
  }
}

function animate() {
  isPlaying = true;
  drawCircles();
}

function stopAnimate() {
  isPlaying = false;
}

function cleanUp() {
  tsbarvisualizercanvas.remove();
}

export const circles = {
  setUp,
  animate,
  stopAnimate,
  cleanUp
};