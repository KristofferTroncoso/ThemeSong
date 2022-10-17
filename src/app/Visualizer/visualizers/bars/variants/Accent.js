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

function Accent({analyser, dataArray, bufferLength}) {
  const barsPrefs = useStore(state => state.visualizer.visualizers
.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")));
  const playPauseState = useStore(state => state.player.playPauseState);
  // const palette = useStore(state => state.palette.palette);
  const dominant = useStore(state => state.palette.dominant);

  const canvasRef = useRef(null);
  
  React.useEffect(() => {
    console.log('White Bars time');
    tsbarscanvas = canvasRef.current;
    isPlaying = true;
    setUpBars();
    accent();

    return function cleanUp() {
      console.log('cleaning up');
      isPlaying = false;
    }
  }, [])

  React.useEffect(() => {
    playState = playPauseState;
    if (playPauseState === "Play") {
      setUpBars();
      accent();
    }
  }, [playPauseState, dominant])

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

  function accent() {
    let ctx = tsbarscanvas.getContext("2d");
  
    analyser.getByteFrequencyData(dataArray);
  
    ctx.clearRect(0, 0, tsbarscanvas.width, tsbarscanvas.height);
  
    let barHeight;
  
    let x = 0;
  
    for(let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 2;
  
      ctx.fillStyle = `hsla(
        ${(dominant.hsl[0] * 360).toFixed()}, 
        ${dominant.hsl[1] * 100}%, 
        ${barHeight/1000 * 100 + 30}%, 
        0.95
      )`; //dominant accented color: barheight correlates to brightness
  
      ctx.strokeStyle = "black";
      ctx.lineWidth = borderWidth;
  
      ctx.fillRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      if (borderWidth !== 0) {
        ctx.strokeRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      }
      ctx.stroke();
  
      x += barWidth + gap;
    }
  
    if (isPlaying && playState === "Play") {
      setTimeout(() => {
        requestAnimationFrame(accent);
      }, 17);
    }
  }

  return (
    <canvas
      id="ts-accent-bars-canvas"
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

export default Accent;