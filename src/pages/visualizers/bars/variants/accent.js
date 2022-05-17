import { analyser, dataArray, bufferLength } from '../..';
import { mostPopulatedColor } from '../../../Content';

import {tsbarvisualizercanvas, isPlaying} from '../bars';

export function accent() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let barWidth = (tsbarvisualizercanvas.width / bufferLength) * 1.4;
  let barHeight;

  let x = tsbarvisualizercanvas.width - barWidth;

  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;

    ctx.fillStyle = `hsla(
      ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
      ${mostPopulatedColor.hsl[1] * 100}%, 
      ${barHeight/1000 * 100 + 30}%, 
      0.9
    )`; //mostPopulatedColor accented color: barheight correlates to brightness

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;


    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.stroke();
    // x += barWidth + 1;
    x -= barWidth + 1;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(accent);
    }, 16);
  }
}