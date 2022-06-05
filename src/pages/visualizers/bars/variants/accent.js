import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying, barWidth, lineWidth, gap } from '../bars';
import { mostPopulatedColor } from '../../../Content';

export function accent() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let barHeight;

  let x = 0;

  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;

    ctx.fillStyle = `hsla(
      ${(mostPopulatedColor.hsl[0] * 360).toFixed()}, 
      ${mostPopulatedColor.hsl[1] * 100}%, 
      ${barHeight/1000 * 100 + 30}%, 
      0.95
    )`; //mostPopulatedColor accented color: barheight correlates to brightness

    ctx.strokeStyle = "black";
    ctx.lineWidth = lineWidth;

    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.stroke();

    x += barWidth + gap;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(accent);
    }, 16);
  }
}