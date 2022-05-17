import { analyser, dataArray, bufferLength } from '../..';
import { palette } from '../../../Content';

import {tsbarvisualizercanvas, isPlaying} from '../bars';

export function paletteVis() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let barWidth = (tsbarvisualizercanvas.width / bufferLength) * 1.4;
  let barHeight;

  let x = tsbarvisualizercanvas.width - barWidth;
  let paletteArray = Object.values(palette);
  let arrLoopNum = 0;
  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;

    // ctx.fillStyle = paletteArray[yoyo].hex;

    ctx.fillStyle = `hsla(
      ${paletteArray[arrLoopNum].hsl[0] * 360}, 
      ${paletteArray[arrLoopNum].hsl[1] * 100}%, 
      ${
        // pickedSwatch.hsl[2] * 100 + 10
        // (paletteArray[arrLoopNum].hsl[2] - ((paletteArray[arrLoopNum].hsl[2] - 0.7)/2)) * 100 //kinda normalizes the light
        barHeight/1000 * 100 + 20 //basically has like a minimum brightness
      }%, 
      0.9
    )`;
  
    arrLoopNum = (arrLoopNum + 1) % paletteArray.length;

    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.stroke();

    x -= barWidth + 1;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(paletteVis);
    }, 16);
  }
}