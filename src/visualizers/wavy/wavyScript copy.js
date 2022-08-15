import { store } from '../../redux/store';

import { analyser, dataArray, bufferLength } from '..';

console.log('wavy')

let mostPopulatedColor = store.getState().palette.mostPopulatedColor;
let visualizers = store.getState().visualizers.visualizers;

let tsvisualizercanvas;
let tsvisualizercontainer;
let ctx;
let isPlaying = false;

let lineWidth = 8;

export function setUp() {
  isPlaying = true;
  // Get a canvas defined with ID "oscilloscope"
  let ytmusicplayer = document.querySelector("ytmusic-player")
  tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");

  ytmusicplayer.appendChild(document.createElement('div')).id = 'ts-visualizer-container';
  tsvisualizercontainer = document.getElementById("ts-visualizer-container");
  tsvisualizercontainer.style.position = "absolute";
  tsvisualizercontainer.style.borderRadius = "6px";
  tsvisualizercontainer.style.height = "100%";
  tsvisualizercontainer.style.width = "100%";
  tsvisualizercontainer.style.bottom = "0";
  tsvisualizercontainer.style.left = "0";
  tsvisualizercontainer.style.background = "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 75%,  rgba(0,0,0,0.3) 100%)";

  if (!tsvisualizercanvas) {
    ytmusicplayer.appendChild(document.createElement('canvas')).id = 'ts-visualizer-canvas';
  }

  tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");

  tsvisualizercanvas.style.position = "absolute";
  tsvisualizercanvas.style.height = "35%";
  tsvisualizercanvas.style.width = "100%";
  tsvisualizercanvas.style.bottom = "10%";
  tsvisualizercanvas.style.left = "0";
  tsvisualizercanvas.style.zIndex = '1';
  // tsvisualizercanvas.style.border = "2px solid tomato";
  tsvisualizercanvas.height = '512';
  tsvisualizercanvas.width = '1920';

  // fetch settings
  let obj = visualizers.find(visualizer => (visualizer.visualizerId === "visualizerId:0"));
  console.log('wavy.setup');
  console.log(obj);
  lineWidth = obj.lineWidth;

  //set up data for visualizer
  ctx = tsvisualizercanvas.getContext("2d");

  ctx.strokeStyle = '#fff';
}

export function drawOscilloscope() {
  analyser.getByteTimeDomainData(dataArray);
  ctx.clearRect(0, 0, tsvisualizercanvas.width, tsvisualizercanvas.height);
  ctx.lineWidth = lineWidth;
  ctx.shadowBlur = 4;
  ctx.shadowColor = `hsl(
    ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
    ${mostPopulatedColor.hsl[1] * 100 * 2}%, 
    70%
  )`;
  ctx.shadowOffsetY = lineWidth;
  ctx.beginPath();

  let sliceWidth = tsvisualizercanvas.width / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    let v = dataArray[i] / 128;
    let y = v * tsvisualizercanvas.height / 2;
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  }

  ctx.stroke();

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(drawOscilloscope);
    }, 17);
  }
}

function animate() {
  isPlaying = true;
  drawOscilloscope();
}

function stopAnimate() {
  isPlaying = false;
}

function cleanUp() {
  tsvisualizercanvas.remove();
  tsvisualizercontainer.remove();
}

export const wavy = {
  setUp,
  animate,
  stopAnimate,
  cleanUp
};