import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying, barWidth, borderWidth, gap } from '../bars';

export function white() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let x = 0;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.beginPath();

  ctx.arc(400, 250, 20 + dataArray[0], 0, 2 * Math.PI);
  ctx.moveTo(1000, 250);
  ctx.arc(1000, 250, 20 + dataArray[40], 0, 2 * Math.PI);
  ctx.moveTo(1400, 250);
  ctx.arc(1400, 250, 10 + dataArray[100], 0, 2 * Math.PI);
  ctx.moveTo(1800, 250);
  ctx.arc(1800, 250, 5 + dataArray[160], 0, 2 * Math.PI);
  ctx.moveTo(400, 250);

  ctx.stroke();
  // for(let i = 0; i < bufferLength; i++) {
  //   let barHeight = dataArray[i] * 2;

  //   ctx.fillStyle = "#fff";
  //   ctx.strokeStyle = "#000";
  //   ctx.lineWidth = borderWidth;
  //   ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
  //   if (borderWidth !== 0) {
  //     ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
  //   }
  //   ctx.stroke();
  //   x += barWidth + gap;
  // }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(white);
    }, 17);
  }
}