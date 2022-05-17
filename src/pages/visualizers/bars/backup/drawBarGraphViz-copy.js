import { analyser, dataArray, bufferLength } from '../';
import { palette, mostPopulatedColor } from '../../Content';

import {tsbarvisualizercanvas, isPlaying} from './bars';

export function dancingPalette() {
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let barWidth = (tsbarvisualizercanvas.width / bufferLength) * 1.5;
  let barHeight;
  // let x = 0;
  // console.log(barWidth);
  let x = tsbarvisualizercanvas.width - barWidth;

  function yo(barHeight) {
    if (barHeight > 210) {
      return palette.LightVibrant;
    } else if (barHeight > 180) {
      return palette.Vibrant;
    } else if (barHeight > 160) {
      return palette.LightMuted;
    } else if (barHeight > 130) {
      return palette.Muted;
    } else if (barHeight > 70) {
      return palette.DarkVibrant;
    } else {
      return palette.DarkMuted;
    }
  };

  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    // ctx.fillStyle = "white"; //static white
    // ctx.fillStyle = `hsla(${barHeight + 100}, 100%, 70%, 0.7)`; //rgb: bar height is correlated to hue
    // ctx.fillStyle = `hsla(${(mostPopulatedColor.hsl[0] * 360).toFixed()}, ${mostPopulatedColor.hsl[1] * 100}%, ${barHeight/300 * 100}%, 0.8)`; //mostPopulatedColor accented color: barheight correlates to brightness

    let pickedSwatch = yo(barHeight);
    ctx.fillStyle = `hsla(${pickedSwatch.hsl[0] * 360}, ${pickedSwatch.hsl[1] * 100}%, ${pickedSwatch.hsl[2] * 100}%, 0.9)`;


    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
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