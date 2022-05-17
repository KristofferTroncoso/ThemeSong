import { analyser, dataArray, bufferLength } from '..';

let tsvisualizercanvas;
let ctx;

export function addOscilloscopeCanvas() {
  // Get a canvas defined with ID "oscilloscope"
  let ytmusicplayer = document.querySelector("ytmusic-player")
  tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");

  // ytmusicplayer.appendChild(document.createElement('div')).id = 'ts-visualizer-container';
  // let tsvisualizercontainer = document.getElementById("ts-visualizer-container");
  // tsvisualizercontainer.style.position = "absolute";
  // tsvisualizercontainer.style.height = "100%";
  // tsvisualizercontainer.style.width = "100%";
  // tsvisualizercontainer.style.bottom = "0";
  // tsvisualizercontainer.style.left = "0";
  // tsvisualizercontainer.style.border = "2px solid steelblue";
  // tsvisualizercontainer.style.borderRadius = "inherit";

  if (!tsvisualizercanvas) {
    ytmusicplayer.appendChild(document.createElement('canvas')).id = 'ts-visualizer-canvas';
  }

  tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");

  tsvisualizercanvas.style.position = "absolute";
  tsvisualizercanvas.style.height = "45%";
  tsvisualizercanvas.style.width = "100%";
  tsvisualizercanvas.style.bottom = "5%";
  tsvisualizercanvas.style.left = "0";
  // tsvisualizercanvas.style.border = "2px solid tomato";
  tsvisualizercanvas.height = '300';
  tsvisualizercanvas.width = '1000';


  //set up data for visualizer
  ctx = tsvisualizercanvas.getContext("2d");

  ctx.lineWidth = 8;
  ctx.strokeStyle = '#ffffff';
}



/*
export function drawOscilloscope() {
  analyser.getByteTimeDomainData(dataArray);

  // let gradient = ctx.createLinearGradient(0, 0, 0, tsvisualizercanvas.height);
  // gradient.addColorStop(0, 'transparent');
  // gradient.addColorStop(.5, 'rgba(0,0,0,0.2)');
  // // gradient.addColorStop(.5, 'hsla(0, 0%, 25%, 0.6)');
  // gradient.addColorStop(1, 'transparent');


  // let linegradient = ctx.createLinearGradient(0, 0, 0, tsvisualizercanvas.height);
  // linegradient.addColorStop(0.2, 'white');
  // linegradient.addColorStop(.5, 'hsl(36, 100%, 90%)');
  // linegradient.addColorStop(0.8, 'white');

  ctx.clearRect(0, 0, tsvisualizercanvas.width, tsvisualizercanvas.height);
  // ctx.fillStyle = gradient;
  // ctx.fillRect(0, 0, tsvisualizercanvas.width, tsvisualizercanvas.height);
  
  ctx.beginPath();

  let sliceWidth = tsvisualizercanvas.width * 1.0 / bufferLength;
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

  ctx.lineTo(tsvisualizercanvas.width, tsvisualizercanvas.height / 2);
  ctx.stroke();
}
*/


export function drawOscilloscope() {
  analyser.getByteTimeDomainData(dataArray);

  ctx.clearRect(0, 0, tsvisualizercanvas.width, tsvisualizercanvas.height);

  ctx.beginPath();

  let sliceWidth = tsvisualizercanvas.width * 1.0 / bufferLength;
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

  ctx.lineTo(tsvisualizercanvas.width, tsvisualizercanvas.height / 2);
  ctx.stroke();

  // requestAnimationFrame(drawOscilloscope);

  setTimeout(() => {
    requestAnimationFrame(drawOscilloscope);
  }, 16);
}
