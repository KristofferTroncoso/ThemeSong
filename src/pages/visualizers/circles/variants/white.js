import { analyser, dataArray } from '../..';
import { tsbarvisualizercanvas, isPlaying } from '../circles';

export function white() {
  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  ctx.fillStyle = "#fff";

  ctx.arc(tsbarvisualizercanvas.width * 0.2, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[0] / 5), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.4, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[40] / 5), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.6, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[100] / 5), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.8, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[160] / 5), 0, 2 * Math.PI);

  ctx.fill();
  ctx.beginPath();
  ctx.stroke();

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(white);
    }, 17);
  }
}

