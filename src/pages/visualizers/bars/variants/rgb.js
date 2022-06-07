import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying, barWidth, borderWidth, gap } from '../bars';

export function rgb() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let barHeight;
  let x = 0;

  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;

    ctx.fillStyle = `hsla(${barHeight}, 100%, 70%, 0.95)`; //rgb: bar height is correlated to hue

    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeStyle = "black";
    ctx.lineWidth = borderWidth;
    if (borderWidth !== 0) {
      ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    }
    ctx.stroke();
    x += barWidth + gap;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(rgb);
    }, 16);
  }
}