import {analyser, connectSource, connectAudio} from '../index';
import { dancingPalette } from './variants/dancing-palette';
import { white } from './variants/white';
import { black } from './variants/black';
import { rgb } from './variants/rgb';
import { accent } from './variants/accent';
import { paletteVis } from './variants/paletteVis';
import { visualizers } from '../';
export let tsbarvisualizercanvas;
export let isPlaying = false;

export let barWidth = 30;
export let lineWidth = 4;
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
  tsbarvisualizercanvas.style.height = "30%";
  tsbarvisualizercanvas.style.width = "100%";
  tsbarvisualizercanvas.style.bottom = "0";
  tsbarvisualizercanvas.style.left = "0";
  // tsbarvisualizercanvas.style.border = "1px solid steelblue";
  tsbarvisualizercanvas.style.borderRadius = "6px";
  tsbarvisualizercanvas.height = '520';
  tsbarvisualizercanvas.width = '2400';

  let obj = visualizers.find(visualizer => (visualizer.visualizerId === "visualizerId:1"));
  console.log(obj);
  barWidth = obj.barWidth;
  lineWidth = obj.lineWidth;
  gap = obj.gap;
}

function animate() {
  isPlaying = true;
  let activeVariant = (visualizers.find(visualizer => visualizer.visualizerId === "visualizerId:1")).activeVariant;
  console.log('bars.js animate')
  console.log(activeVariant)
  switch (activeVariant) {
    case "variantId:1":
      white();
      break;
    case "variantId:2":
      black();
      break;
    case "variantId:3":
      rgb();
      break;
    case "variantId:4":
      accent();
      break;
    case "variantId:5":
      paletteVis();
      break;
    case "variantId:6":
      // analyser.fftSize = 128;
      // connectSource();
      dancingPalette();
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

export const bars = {
  setUp,
  animate,
  stopAnimate,
  cleanUp
};