import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying, barWidth, borderWidth, gap } from '../bars';

export function white() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let x = 0;

  for(let i = 0; i < bufferLength; i++) {
    let barHeight = dataArray[i] * 2;

    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = borderWidth;
    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    if (borderWidth !== 0) {
      ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    }
    ctx.stroke();
    x += barWidth + gap;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(white);
    }, 17);
  }
}