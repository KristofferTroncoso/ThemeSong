import { analyser, dataArray } from '../';
import { visualizers } from '..';
import { dancingPalette } from './variants/dancing-palette';
import { white } from './variants/white';
import { twice } from './variants/twice';
import { rgb } from './variants/rgb';
import { accent } from './variants/accent';
import { paletteVis } from './variants/paletteVis';
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

function animate() {
  isPlaying = true;
  let activeVariant = (visualizers.find(visualizer => visualizer.visualizerId === "visualizerId:2")).activeVariant;
  console.log('circles.js animate')
  console.log(activeVariant)
  switch (activeVariant) {
    case "variantId:1":
      white();
      break;
    case "variantId:2":
      twice();
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

export const circles = {
  setUp,
  animate,
  stopAnimate,
  cleanUp
};