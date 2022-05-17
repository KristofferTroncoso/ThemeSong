import { analyser, dataArray, bufferLength } from '../..';
import { palette, mostPopulatedColor } from '../../../Content';

export function addBarGraphVizCanvas() {
  // Get a canvas defined with ID "oscilloscope"
  let ytmusicplayer = document.querySelector("ytmusic-player")
  let tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");

  if (!tsvisualizercanvas) {
    ytmusicplayer.appendChild(document.createElement('canvas')).id = 'ts-visualizer-canvas';
  }

  tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");

  tsvisualizercanvas.style.position = "absolute";
  tsvisualizercanvas.style.height = "40%";
  tsvisualizercanvas.style.width = "100%";
  tsvisualizercanvas.style.bottom = "0";
  tsvisualizercanvas.style.left = "0";
  // tsvisualizercanvas.style.border = "1px solid steelblue";
  tsvisualizercanvas.style.borderRadius = "6px";
  tsvisualizercanvas.height = '300';
  tsvisualizercanvas.width = '1000';
}

export function drawBarGraphViz() {
  let tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");
  let ctx = tsvisualizercanvas.getContext("2d");

  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsvisualizercanvas.width, tsvisualizercanvas.height);

  let barWidth = (tsvisualizercanvas.width / bufferLength) * 1.5;
  let barHeight;
  // let x = 0;
  // console.log(barWidth);
  let x = tsvisualizercanvas.width - barWidth;

  function yo(barHeight) {
    if (barHeight > 210) {
      return palette.LightVibrant;
    } else if (barHeight > 190) {
      return palette.Vibrant;
    } else if (barHeight > 170) {
      return palette.LightMuted;
    } else if (barHeight > 150) {
      return palette.Muted;
    } else if (barHeight > 100) {
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
    ctx.fillRect(x, tsvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, tsvisualizercanvas.height - barHeight + 6, barWidth, barHeight);
    ctx.stroke();
    // x += barWidth + 1;
    x -= barWidth + 1;
  }

}
