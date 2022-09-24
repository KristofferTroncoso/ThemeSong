/** @jsx jsx */
import React, { useRef }  from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

let playState;
let ctx;
let tsbarscanvas;
let isPlaying = false;
let barWidth = 30;
let borderWidth = 4;
let gap = 8;

function White({analyser, dataArray, bufferLength}) {
  const barsPrefs = useSelector(state => state.visualizers.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")));
  const playPauseState = useSelector(state => state.playerState.playPauseState);
  // const palette = useSelector(state => state.palette.palette);
  // const mostPopulatedColor = useSelector(state => state.palette.mostPopulatedColor);

  const canvasRef = useRef(null);
  
  React.useEffect(() => {
    console.log('White Bars time');
    tsbarscanvas = canvasRef.current;
    isPlaying = true;
    setUpBars();
    drawBars();

    return function cleanUp() {
      console.log('cleaning up');
      isPlaying = false;
    }
  }, [])

  React.useEffect(() => {
    playState = playPauseState;
    if (playPauseState === "Play") {
      setUpBars();
      drawBars();
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

  function drawBars() {
    let ctx = tsbarscanvas.getContext("2d");
  
    analyser.getByteFrequencyData(dataArray);
  
    ctx.clearRect(0, 0, tsbarscanvas.width, tsbarscanvas.height);
  
    let x = 0;
  
    for(let i = 0; i < bufferLength; i++) {
      let barHeight = dataArray[i] * 2;
  
      ctx.fillRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      if (borderWidth !== 0) {
        ctx.strokeRect(x, tsbarscanvas.height - barHeight + 6, barWidth, barHeight);
      }
      ctx.stroke();
      x += barWidth + gap;
    }
  
    if (isPlaying && playState === "Play") {
      setTimeout(() => {
        requestAnimationFrame(drawBars);
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

export default White;




