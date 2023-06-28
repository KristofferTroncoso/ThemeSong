import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

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

function RGB({ analyser, dataArray }) {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  let ytmusicplayer = document.querySelector("ytmusic-player");

  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();

  const circumference = 2 * Math.PI;
  let shorterCanvasSide;

  useEffect(() => {
    console.log("1");
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.strokeStyle = "#000";
    return function cleanUp() {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    let context = ctx.current;
    let canvas = canvasRef.current;

    function updateValues(x, y, dirX, dirY, radius, speedX, speedY) {
      if (y + radius > canvas.height) {
        dirY = Math.abs(dirY) * -1;
      } else if (y - radius < 0) {
        dirY = Math.abs(dirY);
      }
      if (x + radius > canvas.width) {
        dirX = Math.abs(dirX) * -1;
      } else if (x - radius < 0) {
        dirX = Math.abs(dirX);
      }
      x += dirX * speedX * (shorterCanvasSide / 500);
      y += dirY * speedY * (shorterCanvasSide / 500);

      if (x + radius - 10 > canvas.width) {
        x = canvas.width - radius - 10;
      } else if (x - radius + 10 < 0) {
        x = radius + 10;
      }
      if (y + radius - 10 > canvas.height) {
        y = canvas.height - radius - 10;
      } else if (y - radius + 10 < 0) {
        y = radius + 10;
      }

      return [x, y, dirX, dirY];
    }

    function rgb() {
      let ytmusicplayer = document.querySelector("ytmusic-player");
      analyser.fftSize = 512;
      canvas.height = ytmusicplayer.clientHeight;
      canvas.width = ytmusicplayer.clientWidth;
      shorterCanvasSide =
        ytmusicplayer.clientHeight < ytmusicplayer.clientWidth ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
      analyser.getByteFrequencyData(dataArray);

      context.clearRect(0, 0, canvas.width, canvas.height);

      let radius;

      context.beginPath();
      context.lineWidth = 6;
      radius = (Math.max(dataArray[0] - 190, 0) / 300 + 1) * (shorterCanvasSide / 5);
      context.fillStyle = `hsla(${345 + Math.max(dataArray[0] - 190, 0) * 0.4 + 1}, 100%, 50%, 0.9)`;
      [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, radius, speedA, speedB);
      context.arc(a, b, radius, 0, circumference);
      context.fill();
      context.stroke();

      context.beginPath();
      context.lineWidth = 5;
      radius = (Math.max(dataArray[20] - 20, 0) / 700 + 0.5) * (shorterCanvasSide / 5);
      context.fillStyle = `hsla(${210 + dataArray[40] * 0.4}, 100%, 50%, 0.9)`;
      [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, radius, speedC, speedD);
      context.arc(c, d, radius, 0, circumference);
      context.fill();
      context.stroke();

      context.beginPath();
      context.lineWidth = 3;
      radius = (Math.max(dataArray[160] - 10, 0) / 600 + 0.33) * (shorterCanvasSide / 5);
      context.fillStyle = `hsla(${105 + dataArray[160] * 0.5}, 100%, 40%, 0.9)`;
      [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, radius, speedG, speedH);
      context.arc(g, h, radius, 0, circumference);
      context.fill();
      context.stroke();
    }

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(rgb), 17);
    }
  }, [isSongPlaying, analyser, dataArray]);

  return (
    <canvas
      id="ThemeSong-Visualizer-Circles-Variant-RGB"
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
  );
}

export default RGB;
