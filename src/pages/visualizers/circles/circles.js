import { analyser, dataArray } from '../';
import { visualizers } from '..';
export let tsbarvisualizercanvas;
export let isPlaying = false;

export let barWidth = 30;
export let borderWidth = 4;
export let gap = 8;

let ctx;
let circleArr = [];

const 
    DEFAULT_RADIUS  = 50,
    MAX_SPEED       = 0.2,
    CIRCLE_COUNT    = 1;
    Math.TAU = Math.PI * 2;

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
  tsbarvisualizercanvas.style.border = "1px solid tomato";
  tsbarvisualizercanvas.style.borderRadius = "6px";
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;

  ctx = tsbarvisualizercanvas.getContext("2d");
}

export function drawCircles() {

  let ytmusicplayer = document.querySelector("ytmusic-player");
    
    for (let i = 0; i < CIRCLE_COUNT; i++) {
        circleArr.push() 
    }

    if (ctx.width !== ytmusicplayer.clientWidth || ctx.height !== ytmusicplayer.clientHeight) {
        ctx.width = ytmusicplayer.clientWidth;
        ctx.height = ytmusicplayer.clientHeight;
    } else {
        ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);
    }


    // use for of loop (saves having to mess with index)
    for (let circle of circleArr) {
      circle.update();
      circle.draw()
    }

  console.log(circleArr.length);
  circleArr = [];
  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(drawCircles);
    }, 100);
  }
}

function animate() {
  isPlaying = true;
  console.log('circles.js animate')
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