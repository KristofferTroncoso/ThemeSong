/** @jsx jsx */
import React, { useRef }  from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

let a = 160;
let b = 350;
let dirA = 1;
let dirB = 1;
let speedA = 0.7;
let speedB = 0.2;

let c = 450;
let d = 310;
let dirC = -1;
let dirD = 1;
let speedC = 0.7;
let speedD = 1.2;

let g = 310;
let h = 450;
let dirG = -1;
let dirH = 1;
let speedG = 1.4;
let speedH = 1.2;

let circumference = 2 * Math.PI;
let shorterCanvasSide;

let playState;
let ctx;
let tscirclescanvas;
let isPlaying = false;
let borderWidth = 4;

function RGB({analyser, dataArray, bufferLength}) {
  const circlesPrefs = useSelector(state => state.visualizers.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:2")));
  const playPauseState = useSelector(state => state.playerState.playPauseState);
  let ytmusicplayer = document.querySelector("ytmusic-player")

  const canvasRef = useRef(null);
  
  React.useEffect(() => {
    console.log('RGB time');
    tscirclescanvas = canvasRef.current;
    isPlaying = true;
    setUpCircles();
    rgb();

    return function cleanUp() {
      console.log('cleaning up');
      isPlaying = false;
    }
  }, [])

  React.useEffect(() => {
    playState = playPauseState;
    if (playPauseState === "Play") {
      setUpCircles();
      rgb();
    }
  }, [playPauseState, circlesPrefs])

  function setUpCircles() {
    ctx = tscirclescanvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = borderWidth;
  }

  function updateValues(x, y, dirX, dirY, radius, speedX, speedY) {
    if (y + radius > tscirclescanvas.height) {
      dirY = Math.abs(dirY) * -1;
    } else if (y - radius < 0) {
      dirY = Math.abs(dirY);
    }
    if (x + radius > tscirclescanvas.width) {
      dirX = Math.abs(dirX) * -1;
    } else if (x - radius < 0) {
      dirX = Math.abs(dirX);
    }
    x += dirX * speedX * (shorterCanvasSide/ 500);
    y += dirY * speedY * (shorterCanvasSide / 500);
  
    if (x + radius - 10 > tscirclescanvas.width) {
      x = tscirclescanvas.width - radius - 10;
    } else if (x - radius + 10 < 0) {
      x = radius + 10;
    }
    if (y + radius - 10 > tscirclescanvas.height) {
      y = tscirclescanvas.height - radius - 10;
    } else if (y - radius + 10 < 0) {
      y = radius + 10;
    }
  
    return [x, y, dirX, dirY];
  }

  function rgb() {
    let ctx = tscirclescanvas.getContext("2d");
    let ytmusicplayer = document.querySelector("ytmusic-player");
    tscirclescanvas.height = ytmusicplayer.clientHeight;
    tscirclescanvas.width = ytmusicplayer.clientWidth;
    shorterCanvasSide = (ytmusicplayer.clientHeight < ytmusicplayer.clientWidth) ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
    analyser.fftSize = 512;
    analyser.getByteFrequencyData(dataArray);
  
    ctx.clearRect(0, 0, tscirclescanvas.width, tscirclescanvas.height);
  
    let radius;
    ctx.strokeStyle = '#000';
  
    ctx.beginPath();
    ctx.lineWidth = 6;
    radius = ((Math.max(dataArray[0] - 190, 0) / 300) + 1) * (shorterCanvasSide/5);
    ctx.fillStyle = `hsla(${345 + (Math.max(dataArray[0]- 190, 0) * 0.4) + 1}, 100%, 50%, 0.9)`;
    [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, radius, speedA, speedB)
    ctx.arc(a, b, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();
  
    ctx.beginPath();
    ctx.lineWidth = 5;
    radius = ((Math.max(dataArray[20]- 20, 0) / 700) + 0.5) * (shorterCanvasSide/5);
    ctx.fillStyle = `hsla(${210 + (dataArray[40] * 0.4)}, 100%, 50%, 0.9)`;
    [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, radius, speedC, speedD)
    ctx.arc(c, d, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();
  
    ctx.beginPath();
    ctx.lineWidth = 3;
    radius = ((Math.max(dataArray[160]-10, 0) / 600) + 0.33) * (shorterCanvasSide/5);
    ctx.fillStyle = `hsla(${105 + (dataArray[160] * 0.5)}, 100%, 40%, 0.9)`;
    [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, radius, speedG, speedH)
    ctx.arc(g, h, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();
  
  
    if (isPlaying && playState === "Play") {
      setTimeout(() => {
        requestAnimationFrame(rgb);
      }, 17);
    }
  }

  return (
    <canvas
      id="ts-rgb-circles-canvas"
      ref={canvasRef}
      height={ytmusicplayer.clientHeight}
      width={ytmusicplayer.clientWidth}
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
      `}
    />
  )
}

export default RGB;