/** @jsx jsx */
import React, { useRef }  from 'react';
import { jsx, css } from '@emotion/react';

import { useStore } from '../../../../store';

let playState;
let ctx;
let tsbarscanvas;
let isPlaying = false;
let barWidth = 30;
let borderWidth = 4;
let gap = 8;

function DancingPalette({analyser, dataArray, bufferLength}) {
  const barsPrefs = useStore(state => state.visualizer.visualizers
.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")));
  const playPauseState = useStore(state => state.player.playPauseState);
  const palette = useStore(state => state.palette.palette);

  const canvasRef = useRef(null);
  
  React.useEffect(() => {
    console.log('Dancing Palette time');
    tsbarscanvas = canvasRef.current;
    isPlaying = true;
    setUpBars();
    dancingPaletteDraw();

    return function cleanUp() {
      console.log('cleaning up');
      isPlaying = false;
    }
  }, [])

  React.useEffect(() => {
    playState = playPauseState;
    if (playPauseState === "Play") {
      setUpBars();
      dancingPaletteDraw();
    }
  }, [playPauseState, palette])

  React.useEffect(() => {
    setUpBars();
  }, [barsPrefs])

  function setUpBars() {
    barWidth = barsPrefs.barWidth;
    borderWidth = barsPrefs.borderWidth;
    gap = barsPrefs.gap;
    ctx = tsbarscanvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = borderWidth;
  }

  function dancingPaletteDraw() {
    let ctx = tsbarscanvas.getContext("2d");
  
    analyser.getByteFrequencyData(dataArray);
  
    ctx.clearRect(0, 0, tsbarscanvas.width, tsbarscanvas.height);
  
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

      ctx.fillRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = borderWidth;
      if (borderWidth !== 0) {
        ctx.strokeRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      }
      ctx.stroke();

      x += barWidth + gap;
    }
  
    if (isPlaying && playState === "Play") {
      setTimeout(() => {
        requestAnimationFrame(dancingPaletteDraw);
      }, 17);
    }
  }

  return (
    <canvas
      id="ts-palette-bars-canvas"
      ref={canvasRef}
      height='520'
      width='2400'
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 30%;
        width: 100%;
        border-radius: inherit;
        z-index: 100;
      `}
    />
  )
}

export default DancingPalette;