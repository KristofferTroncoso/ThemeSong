import { dancingPalette } from './variants/dancing-palette';
import { white } from './variants/white';
import { rgb } from './variants/rgb';
import { accent } from './variants/accent';
import { paletteVis } from './variants/paletteVis';
import { visualizers } from '../';
export let tsbarvisualizercanvas;
export let isPlaying = false;

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
  tsbarvisualizercanvas.style.height = "40%";
  tsbarvisualizercanvas.style.width = "100%";
  tsbarvisualizercanvas.style.bottom = "0";
  tsbarvisualizercanvas.style.left = "0";
  // tsbarvisualizercanvas.style.border = "1px solid steelblue";
  tsbarvisualizercanvas.style.borderRadius = "6px";
  tsbarvisualizercanvas.height = '520';
  tsbarvisualizercanvas.width = '1600';
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
      rgb();
      break;
    case "variantId:3":
      accent();
      break;
    case "variantId:4":
      paletteVis();
      break;
    case "variantId:5":
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