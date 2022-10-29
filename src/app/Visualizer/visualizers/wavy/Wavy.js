/** @jsx jsx */
import React, { useRef }  from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../store';

let playState;
let ctx;
let tswavycanvas;
let isPlaying = false;
let lineWidth;
let calculatedColor;

function Wavy({analyser, dataArray, bufferLength}) {
  const wavyPrefs = useStore(state => state.visualizer.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:0")));
  const playPauseState = useStore(state => state.player.playPauseState);
  const dominant = useStore(state => state.palette.dominant);

  const canvasRef = useRef(null);
  
  React.useEffect(() => {
    console.log('wavy time');
    tswavycanvas = canvasRef.current;
    isPlaying = true;
    setUpWavy();
    drawOscilloscope();

    return function cleanUp() {
      console.log('cleaning up');
      isPlaying = false;
    }
  }, [])

  React.useEffect(() => {
    playState = playPauseState;
    if (playPauseState === "Play") {
      setUpWavy();
      drawOscilloscope();
    }
  }, [playPauseState, dominant])

  React.useEffect(() => {
    setUpWavy();
  }, [wavyPrefs])

  function setUpWavy() {
    ctx = tswavycanvas.getContext("2d");
    lineWidth = wavyPrefs.lineWidth;
    ctx.strokeStyle = '#fff';
    calculatedColor  = `hsl(
      ${(dominant.hsl[0] * 360).toFixed()}, 
      ${dominant.hsl[1] * 100 * 2}%, 
      70%
    )`;
  }

  function drawOscilloscope() {
    analyser.fftSize = 2048; // im trying to set this up just once but it's not working. this one works but its every animate
    analyser.getByteTimeDomainData(dataArray);
    ctx.clearRect(0, 0, tswavycanvas.width, tswavycanvas.height);
    ctx.lineWidth = lineWidth;
    ctx.shadowBlur = 4;
    ctx.shadowColor = calculatedColor;
    ctx.shadowOffsetY = lineWidth;
    ctx.beginPath();

    let sliceWidth = tswavycanvas.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128;
      let y = v * tswavycanvas.height / 2;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x += sliceWidth;
    }

    ctx.stroke();

    if (isPlaying && playState === "Play") {
      setTimeout(() => {
        requestAnimationFrame(drawOscilloscope);
      }, 17);
    }
  }

  return (
    <div
      id="ts-wavy-container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 75%,  rgba(0,0,0,0.3) 100%);
      `}
    >
      <canvas
        id="ts-wavy-canvas"
        ref={canvasRef}
        height='512'
        width='1920'
        css={css`
          position: absolute;
          bottom: 10%;
          left: 0;
          height: 35%;
          width: 100%;
          border-radius: inherit;
          z-index: 100;
        `}
      />
    </div>
  )
}

export default Wavy;




