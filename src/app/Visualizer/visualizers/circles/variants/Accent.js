import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

let circles = [
  {
    x: 160,
    y: 350,
    dirX: 1,
    dirY: -1,
    speedX: 0.4,
    speedY: 0.7,
    freq: 0,
    minByte: 200,
    minRadius: 1,
    growRate: 300,
    lineWidth: 5,
  },
  {
    x: 150,
    y: 410,
    dirX: 1,
    dirY: -1,
    speedX: 1.2,
    speedY: 1,
    freq: 190,
    minByte: 0,
    minRadius: 0.32,
    growRate: 800,
    lineWidth: 3,
  },
];

let shorterCanvasSide;

function Accent({ analyser, dataArray }) {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const sortedPalette = useStore((state) => state.palette.sortedPalette);

  const ytmusicplayer = document.querySelector("ytmusic-player");
  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();

  const circumference = 2 * Math.PI;

  useEffect(() => {
    console.log("Accent time");
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.fillStyle = "#fff";
    ctx.current.strokeStyle = "#000";
    ctx.current.lineWidth = 4;

    return function cleanUp() {
      console.log("cleaning up");
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    function updateAndDraw(ctx) {
      ctx.current = canvasRef.current.getContext("2d");
      //update values
      circles = circles.map((circle) => {
        let newValues = updateValues(circle);
        return { ...circle, ...newValues };
      });

      //draw values
      for (let [i, circle] of circles.entries()) {
        ctx.current.beginPath();
        ctx.current.lineWidth = circle.lineWidth;
        ctx.current.fillStyle = `hsla(
          ${(sortedPalette[i].hsl[0] * 360).toFixed()}, 
          ${sortedPalette[i].hsl[1] * 100}%, 
          ${shorterCanvasSide / (circle.radius / 2.5) + 40}%, 
          0.95
        )`;
        ctx.current.arc(circle.x, circle.y, circle.radius, 0, circumference);
        ctx.current.fill();
        ctx.current.stroke();
      }
    }

    function accent() {
      let context = canvasRef.current.getContext("2d");
      let ytmusicplayer = document.querySelector("ytmusic-player");
      canvasRef.current.height = ytmusicplayer.clientHeight;
      canvasRef.current.width = ytmusicplayer.clientWidth;
      shorterCanvasSide =
        ytmusicplayer.clientHeight < ytmusicplayer.clientWidth ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
      analyser.fftSize = 512;
      analyser.getByteFrequencyData(dataArray);

      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      context.strokeStyle = "#000";

      updateAndDraw(context);
    }

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(accent), 17);
    }
  }, [isSongPlaying, sortedPalette]);

  function updateValues({ x, y, dirX, dirY, radius, speedX, speedY, freq, minByte, minRadius, growRate, color }) {
    if (y + radius > canvasRef.current.height) {
      dirY = Math.abs(dirY) * -1;
    } else if (y - radius < 0) {
      dirY = Math.abs(dirY);
    }
    if (x + radius > canvasRef.current.width) {
      dirX = Math.abs(dirX) * -1;
    } else if (x - radius < 0) {
      dirX = Math.abs(dirX);
    }
    x += dirX * speedX * (shorterCanvasSide / 500);
    y += dirY * speedY * (shorterCanvasSide / 500);

    if (x + radius - 30 > canvasRef.current.width) {
      x = canvasRef.current.width * Math.random();
    } else if (x - radius + 30 < 0) {
      x = radius + 30;
    }
    if (y + radius - 30 > canvasRef.current.height) {
      y = canvasRef.current.height * Math.random();
    } else if (y - radius + 30 < 0) {
      y = radius + 30;
    }

    radius = (Math.max(dataArray[freq] - minByte, 0) / growRate + minRadius) * (shorterCanvasSide / 5);

    color = sortedPalette[0].hex;
    return {
      x,
      y,
      dirX,
      dirY,
      radius,
      speedX,
      speedY,
      freq,
      minByte,
      minRadius,
      color,
    };
  }

  return (
    <canvas
      id="ThemeSong-Visualizer-Circles-Variant-Accent"
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

export default Accent;
