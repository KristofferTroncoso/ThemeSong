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

function RGB({analyser, dataArray, bufferLength}) {
  const barsPrefs = useStore(state => state.visualizer.visualizers
.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")));
  const playPauseState = useStore(state => state.player.playPauseState);

  const canvasRef = useRef(null);
  
  React.useEffect(() => {
    console.log('RGB time');
    tsbarscanvas = canvasRef.current;
    isPlaying = true;
    setUpBars();
    rgb();

    return function cleanUp() {
      console.log('cleaning up');
      isPlaying = false;
    }
  }, [])

  React.useEffect(() => {
    playState = playPauseState;
    if (playPauseState === "Play") {
      setUpBars();
      rgb();
    }
  }, [playPauseState])

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

  function rgb() {
    let ctx = tsbarscanvas.getContext("2d");
  
    analyser.getByteFrequencyData(dataArray);
  
    ctx.clearRect(0, 0, tsbarscanvas.width, tsbarscanvas.height);
    
    let barHeight;
    let x = 0;
  
    for(let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 2;
  
      ctx.fillStyle = `hsla(${barHeight}, 100%, 70%, 0.95)`; //rgb: bar height is correlated to hue
  
      ctx.fillRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      ctx.strokeStyle = "black";
      ctx.lineWidth = borderWidth;
      if (borderWidth !== 0) {
        ctx.strokeRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      }
      ctx.stroke();
      x += barWidth + gap;
    }

    if (isPlaying && playState === "Play") {
      setTimeout(() => {
        requestAnimationFrame(rgb);
      }, 17);
    }
  }

  return (
    <canvas
      id="ts-white-bars-canvas"
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

export default RGB;




