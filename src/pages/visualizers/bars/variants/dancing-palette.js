import { analyser, dataArray, bufferLength } from '../..';
import { palette } from '../../../Content';

import {tsbarvisualizercanvas, isPlaying} from '../bars';

export function dancingPalette() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let barWidth = (tsbarvisualizercanvas.width / bufferLength) * 1.35;
  let barHeight;

  let x = tsbarvisualizercanvas.width - barWidth;

  function yo(barHeight) {
    if (barHeight > 420) {
      return palette.LightVibrant;
    } else if (barHeight > 360) {
      return palette.Vibrant;
    } else if (barHeight > 320) {
      return palette.LightMuted;
    } else if (barHeight > 260) {
      return palette.Muted;
    } else if (barHeight > 140) {
      return palette.DarkVibrant;
    } else {
      return palette.DarkMuted;
    }
  };

  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;

    let pickedSwatch = yo(barHeight);
    ctx.fillStyle = `hsla(${pickedSwatch.hsl[0] * 360}, ${pickedSwatch.hsl[1] * 100}%, ${
      // pickedSwatch.hsl[2] * 100 + 10
      // (pickedSwatch.hsl[2] - ((pickedSwatch.hsl[2] - 0.7)/2)) * 100 //kinda normalizes the light
      barHeight/1000 * 100 + 20 //basically has like a minimum brightness
    }%, 0.9)`;


    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.stroke();
    // x += barWidth + 1;
    x -= barWidth + 1;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(dancingPalette);
    }, 16);
  }
}