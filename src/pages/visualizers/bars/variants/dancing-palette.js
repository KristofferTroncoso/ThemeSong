import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying, barWidth, borderWidth, gap } from '../bars';
import { palette } from '../../../Content';

export function dancingPalette() {
  // console.log(dataArray);
  let ctx = tsbarvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  let barHeight;

  let x = 0;

  function yo(barHeight) {
    if (barHeight > 185) {
      return palette.LightVibrant;
    } else if (barHeight > 165) {
      return palette.LightMuted;
    } else if (barHeight > 130) {
      return palette.Vibrant;
    } else if (barHeight > 110) {
      return palette.Muted;
    } else if (barHeight > 70) {
      return palette.DarkVibrant;
    } else {
      return palette.DarkMuted;
    }
  };

  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2;

    let pickedSwatch = yo(dataArray[i]);
    ctx.fillStyle = `hsla(
      ${pickedSwatch.hsl[0] * 360}, 
      ${pickedSwatch.hsl[1] * 100}%, 
      ${
        // pickedSwatch.hsl[2] * 100 + 10
        (pickedSwatch.hsl[2] - ((pickedSwatch.hsl[2] - 0.7)/2)) * 100 //kinda normalizes the light
        // barHeight/700 * 100 + 20 //barHeight correlates with brightness. has like a minimum brightness. problem is colors aren't 100% correct.
      }%, 
      0.95
    )`;

    ctx.fillRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = borderWidth;
    if (borderWidth !== 0) {
      ctx.strokeRect(x, tsbarvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    }
    ctx.stroke();

    x += barWidth + gap;
  }

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(dancingPalette);
    }, 16);
  }
}