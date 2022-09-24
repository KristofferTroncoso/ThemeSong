import { store } from '../store';
// import { analyser } from '../';
import { bubbles } from './variants/Bubbles';
import { party } from './variants/Party';
import { ot9 } from './variants/OT9';
import { rgb } from './variants/RGB';
import { accent } from './variants/Accent';
import { paletteVis } from './variants/Palette';

let visualizers = store.getState().visualizers.visualizers;

export let tsbarvisualizercanvas;
export let isPlaying = false;

export let barWidth = 30;
export let borderWidth = 4;
export let gap = 8;

function setUp() {
  console.log('circles setup')
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
  tsbarvisualizercanvas.style.borderRadius = "6px";
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth; 
}

function animate() {
  isPlaying = true;
  let activeVariant = (visualizers.find(visualizer => visualizer.visualizerId === "visualizerId:2")).activeVariant;
  console.log('circles.js animate')
  console.log(activeVariant)
  switch (activeVariant) {
    case "variantId:1":
      rgb();
      break;
    case "variantId:2":
      accent();
      break;
    case "variantId:3":
      paletteVis();
      break;
    case "variantId:4":
      party();
      break;
    case "variantId:5":
      bubbles();
      break;
    case "variantId:6":
      // analyser.fftSize = 128;
      // connectSource();
      ot9();
      break;
    default:
      accent();
  }
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