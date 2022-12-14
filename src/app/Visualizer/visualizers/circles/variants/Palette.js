/** @jsx jsx */
import React, { useRef }  from 'react';
import { jsx, css } from '@emotion/react';

import { useStore } from '../../../../store';

let a = 160;
let b = 350;
let dirA = 1;
let dirB = -1;
let speedA = 0.7;
let speedB = 0.2;

let c = 450;
let d = 310;
let dirC = -1;
let dirD = 1;
let speedC = 0.7;
let speedD = 1.2;

let e = 230;
let f = 460;
let dirE = -1;
let dirF = -1;
let speedE = 0.8;
let speedF = 0.9;

let g = 310;
let h = 450;
let dirG = -1;
let dirH = 1;
let speedG = 1;
let speedH = 0.8;

let i = 160;
let j = 310;
let dirI = -1;
let dirJ = 1;
let speedI = 0.9;
let speedJ = 1.2;

let m = 150;
let n = 420;
let dirM = 1;
let dirN = -1;
let speedM = 0.6;
let speedN = 2;

let circumference = 2 * Math.PI;
let shorterCanvasSide;

let ctx;
let tscirclescanvas;
let borderWidth = 4;

function Palette({analyser, dataArray}) {
  const isSongPlaying = useStore(state => state.player.isSongPlaying);
  const palette = useStore(state => state.palette.palette);
  let ytmusicplayer = document.querySelector("ytmusic-player")

  const canvasRef = useRef(null);
  const intervalId = useRef();
  
  React.useEffect(() => {
    console.log('Palette time');
    tscirclescanvas = canvasRef.current;
    setUpCircles();
    paletteVis();

    return function cleanUp() {
      console.log('cleaning up');
      clearInterval(intervalId.current);
    }
  }, [])

  React.useEffect(() => {
    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(paletteVis), 17)
    }
  }, [isSongPlaying])

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

  function paletteVis() {
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
    ctx.fillStyle = `hsla(
      ${(palette.Vibrant.hsl[0] * 360).toFixed()}, 
      ${palette.Vibrant.hsl[1] * 100}%, 
      ${palette.Vibrant.hsl[2] * 100}%, 
      0.9
    )`;
    radius = ((Math.max(dataArray[0]-200, 0) / 300) + 1) * (shorterCanvasSide/5);
    [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, radius, speedA, speedB)
    ctx.arc(a, b, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = `hsla(
      ${(palette.Muted.hsl[0] * 360).toFixed()}, 
      ${palette.Muted.hsl[1] * 100}%, 
      ${palette.Muted.hsl[2] * 100}%, 
      0.9
    )`;
    radius = ((Math.max(dataArray[40]-20, 0) / 500) + 0.6) * (shorterCanvasSide/5);
    [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, radius, speedC, speedD)
    ctx.arc(c, d, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `hsla(
      ${(palette.DarkVibrant.hsl[0] * 360).toFixed()}, 
      ${palette.DarkVibrant.hsl[1] * 100}%, 
      ${palette.DarkVibrant.hsl[2] * 100}%, 
      0.9
    )`;
    radius = ((Math.max(dataArray[100], 0) / 500) + 0.38) * (shorterCanvasSide/5);
    [e, f, dirE, dirF] = updateValues(e, f, dirE, dirF, radius, speedE, speedF)
    ctx.arc(e, f, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `hsla(
      ${(palette.LightVibrant.hsl[0] * 360).toFixed()}, 
      ${palette.LightVibrant.hsl[1] * 100}%, 
      ${palette.LightVibrant.hsl[2] * 100}%, 
      0.9
    )`;
    radius = ((Math.max(dataArray[120], 0) / 500) + 0.37) * (shorterCanvasSide/5);
    [m, n, dirM, dirN] = updateValues(m, n, dirM, dirN, radius, speedM, speedN)
    ctx.arc(m, n, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `hsla(
      ${(palette.DarkMuted.hsl[0] * 360).toFixed()}, 
      ${palette.DarkMuted.hsl[1] * 100}%, 
      ${palette.DarkMuted.hsl[2] * 100}%, 
      0.9
    )`;
    radius = ((Math.max(dataArray[160]-10, 0) / 400) + 0.36) * (shorterCanvasSide/5);
    [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, radius, speedG, speedH)
    ctx.arc(g, h, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `hsla(
      ${(palette.LightMuted.hsl[0] * 360).toFixed()}, 
      ${palette.LightMuted.hsl[1] * 100}%, 
      ${palette.LightMuted.hsl[2] * 100}%, 
      0.9
    )`;
    radius = ((Math.max(dataArray[190], 0) / 1000) + 0.34) * (shorterCanvasSide/5);
    [i, j, dirI, dirJ] = updateValues(i, j,  dirI, dirJ, radius, speedI, speedJ)
    ctx.arc(i, j, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();
  }

  return (
    <canvas
      id="ThemeSong-Visualizer-Circles-Variant-Palette"
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

export default Palette;