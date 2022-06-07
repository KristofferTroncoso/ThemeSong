import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying, barWidth, lineWidth, gap } from '../bars';

export function black() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  // let barWidth ;
  let barHeight;
  let x = 0;

  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;

    ctx.fillStyle = "#000";
   
    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = lineWidth;
    if (lineWidth !== 0) {
      ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    }
    ctx.stroke();
    x += barWidth + gap;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(black);
    }, 16);
  }
}