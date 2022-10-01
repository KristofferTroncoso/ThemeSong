/** @jsx jsx */
import React, { useRef }  from 'react';
import { jsx, css } from '@emotion/react';

import { useStore } from '../../../../store';

let a = 160;
let b = 350;
let dirA = 1;
let dirB = -1;

let c = 450;
let d = 310;
let dirC = -1;
let dirD = 1;

let e = 230;
let f = 460;
let dirE = -1;
let dirF = -1;

let g = 310;
let h = 450;
let dirG = -1;
let dirH = 1;

let i = 160;
let j = 310;
let dirI = -1;
let dirJ = 1;

let k = 400;
let l = 5;
let dirK = 1;
let dirL = -1;

let m = 150;
let n = 420;
let dirM = 1;
let dirN = -1;

let o = 400;
let p = 290;
let dirO = 1;
let dirP = 1;

let q = 200;
let r = 310;
let dirQ = 1;
let dirR = 1;


let circumference = 2 * Math.PI;
let shorterCanvasSide;


let playState;
let ctx;
let tscirclescanvas;
let isPlaying = false;
let borderWidth = 4;

function Palette({analyser, dataArray, bufferLength}) {
  const circlesPrefs = useStore(state => state.visualizer.visualizers
.find(visualizer => (visualizer.visualizerId  === "visualizerId:2")));
  const playPauseState = useStore(state => state.player.playPauseState);
  const palette = useStore(state => state.palette.palette);
  let ytmusicplayer = document.querySelector("ytmusic-player")

  const canvasRef = useRef(null);
  
  React.useEffect(() => {
    console.log('Palette time');
    tscirclescanvas = canvasRef.current;
    isPlaying = true;
    setUpCircles();
    paletteVis();

    return function cleanUp() {
      console.log('cleaning up');
      isPlaying = false;
    }
  }, [])

  React.useEffect(() => {
    playState = playPauseState;
    if (playPauseState === "Play") {
      setUpCircles();
      paletteVis();
    }
  }, [playPauseState])

  React.useEffect(() => {
    setUpCircles();
  }, [circlesPrefs])

  function setUpCircles() {
    ctx = tscirclescanvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = borderWidth;
  }

  function updateValues(x, y, dirX, dirY, staticRadius, speed) {
    if (y + staticRadius > tscirclescanvas.height || y - staticRadius < 0) {
      dirY *= -1;
    }
    if (x + staticRadius > tscirclescanvas.width || x - staticRadius < 0) {
      dirX *= -1;
    }
    x += dirX * speed * (tscirclescanvas.height / 500);
    y += dirY * speed * (tscirclescanvas.height / 500);

    if (x + staticRadius - 10 > tscirclescanvas.width) {
      x = tscirclescanvas.width - staticRadius - 10;
    } else if (x - staticRadius + 10 < 0) {
      x = staticRadius + 10;
    }
    if (y + staticRadius - 10 > tscirclescanvas.height) {
      y = tscirclescanvas.height - staticRadius - 10;
    } else if (y - staticRadius + 10 < 0) {
      y = staticRadius + 10;
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
    let staticRadius;
    let speed;
    ctx.strokeStyle = '#000';

    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.fillStyle = `${palette.Vibrant.hex}`;
    radius = ((Math.max(dataArray[0]-200, 0) / 300) + 1) * (shorterCanvasSide/5);
    staticRadius = 1 * (tscirclescanvas.height/5);
    speed = 0.3;
    [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, staticRadius, speed)
    ctx.arc(a, b, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = `${palette.Muted.hex}`;
    radius = ((Math.max(dataArray[40]-20, 0) / 500) + 0.6) * (shorterCanvasSide/5);
    staticRadius = 0.5 * (shorterCanvasSide/5);
    speed = 0.5;
    [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, staticRadius, speed)
    ctx.arc(c, d, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `${palette.DarkVibrant.hex}`;
    radius = ((Math.max(dataArray[100], 0) / 500) + 0.38) * (shorterCanvasSide/5);
    staticRadius = 0.35 * (shorterCanvasSide/5);
    speed = 0.8;
    [e, f, dirE, dirF] = updateValues(e, f, dirE, dirF, staticRadius, speed)
    ctx.arc(e, f, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `${palette.LightVibrant.hex}`;
    radius = ((Math.max(dataArray[120], 0) / 500) + 0.37) * (shorterCanvasSide/5);
    staticRadius = 0.35 * (shorterCanvasSide/5);
    speed = 1;
    [m, n, dirM, dirN] = updateValues(m, n, dirM, dirN, staticRadius, speed)
    ctx.arc(m, n, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `${palette.DarkMuted.hex}`;
    radius = ((Math.max(dataArray[160]-10, 0) / 400) + 0.36) * (shorterCanvasSide/5);
    staticRadius = 0.33 * (shorterCanvasSide/5);
    speed = 1.1;
    [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, staticRadius, speed)
    ctx.arc(g, h, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = `${palette.Muted.hex}`;
    radius = ((Math.max(dataArray[180]-10, 0) / 500) + 0.35) * (shorterCanvasSide/5);
    staticRadius = 0.33 * (shorterCanvasSide/5);
    speed = 1.2;
    [o, p, dirO, dirP] = updateValues(o, p, dirO, dirP, staticRadius, speed)
    ctx.arc(o, p, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = `${palette.Vibrant.hex}`;
    radius = ((Math.max(dataArray[190], 0) / 1000) + 0.34) * (shorterCanvasSide/5);
    staticRadius = 0.32 * (shorterCanvasSide/5);
    speed = 1.3;
    [i, j, dirI, dirJ] = updateValues(i, j,  dirI, dirJ, staticRadius, speed)
    ctx.arc(i, j, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = `${palette.DarkVibrant.hex}`;
    radius = ((Math.max(dataArray[200], 0) / 1000) + 0.32) * (shorterCanvasSide/5);
    staticRadius = 0.32 * (shorterCanvasSide/5);
    speed = 1.4;
    [q, r, dirQ, dirR] = updateValues(q, r,  dirQ, dirR, staticRadius, speed)
    ctx.arc(q, r, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    radius = ((Math.max(dataArray[210], 0) / 1000) + 0.3) * (shorterCanvasSide/5);
    staticRadius = 0.3 * (shorterCanvasSide/5);
    speed = 0.5;
    ctx.fillStyle = `${palette.LightVibrant.hex}`;
    [k, l, dirK, dirL] = updateValues(k, l, dirK, dirL, staticRadius, speed);
    ctx.arc(k, l, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();


    if (isPlaying && playState === "Play") {
      setTimeout(() => {
        requestAnimationFrame(paletteVis);
      }, 17);
    }
  }

  return (
    <canvas
      id="ts-palette-circles-canvas"
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