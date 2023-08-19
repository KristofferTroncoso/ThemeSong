import { useEffect, useRef } from "react";
import { css } from "@emotion/react";

import { useStore } from "/src/app/store";

let circles = [
  {
    x: 160,
    y: 350,
    dirX: 1,
    dirY: -1,
    speedX: 0.3,
    speedY: 0.6,
    freq: 0,
    minByte: 190,
    minRadius: 1,
    growRate: 300,
    color: "hsl(155 81% 30% / 0.9)",
    lineWidth: 5,
  },
  {
    x: 450,
    y: 310,
    dirX: -1,
    dirY: 1,
    speedX: 0.8,
    speedY: 0.5,
    freq: 2,
    minByte: 40,
    minRadius: 0.6,
    growRate: 600,
    color: "hsl(12 80% 51% / 0.9)",
    lineWidth: 5,
  },
  {
    x: 230,
    y: 460,
    dirX: -1,
    dirY: -1,
    speedX: 0.8,
    speedY: 1.2,
    freq: 20,
    minByte: 0,
    minRadius: 0.38,
    growRate: 600,
    color: "hsl(40 100% 53% / 0.9)",
    lineWidth: 4,
  },
  {
    x: 160,
    y: 310,
    dirX: -1,
    dirY: 1,
    speedX: 1,
    speedY: 1.3,
    freq: 80,
    minByte: 10,
    minRadius: 0.36,
    growRate: 400,
    color: "hsl(303 80% 80% / 0.9)",
    lineWidth: 4,
  },
  {
    x: 400,
    y: 100,
    dirX: 1,
    dirY: -1,
    speedX: 1.5,
    speedY: 0.8,
    freq: 120,
    minByte: 10,
    minRadius: 0.35,
    growRate: 600,
    color: "hsl(222 94% 66% / 0.9)",
    lineWidth: 5,
  },
  {
    x: 150,
    y: 410,
    dirX: 1,
    dirY: -1,
    speedX: 1,
    speedY: 3,
    freq: 150,
    minByte: 0,
    minRadius: 0.33,
    growRate: 800,
    color: "hsl(278 44% 56% / 0.9)",
    lineWidth: 3,
  },
];

let shorterCanvasSide;
let circumference = 2 * Math.PI;

let ctx;
let tscirclescanvas;
let borderWidth = 4;

function Swith({ analyser, dataArray }) {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  let ytmusicplayer = document.querySelector("ytmusic-player");

  const canvasRef = useRef(null);
  const intervalId = useRef();

  useEffect(() => {
    console.log("Swith time");
    tscirclescanvas = canvasRef.current;
    setUpCircles();
    ot6();

    return function cleanUp() {
      console.log("cleaning up");
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(ot6), 17);
    }
  }, [isSongPlaying]);

  function setUpCircles() {
    ctx = tscirclescanvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = borderWidth;
  }

  function updateValues({ x, y, dirX, dirY, radius, speedX, speedY, freq, minByte, minRadius, growRate }) {
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
    x += dirX * speedX * (shorterCanvasSide / 500);
    y += dirY * speedY * (shorterCanvasSide / 500);

    if (x + radius - 300 > tscirclescanvas.width) {
      x = tscirclescanvas.width * Math.random();
    } else if (x - radius + 300 < 0) {
      x = radius + 300;
    }
    if (y + radius - 300 > tscirclescanvas.height) {
      y = tscirclescanvas.height * Math.random();
    } else if (y - radius + 300 < 0) {
      y = radius + 300;
    }

    radius = (Math.max(dataArray[freq] - minByte, 0) / growRate + minRadius) * (shorterCanvasSide / 5);

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
    };
  }

  function updateAndDraw(ctx) {
    //update values
    circles = circles.map((circle) => {
      let newValues = updateValues(circle);
      return { ...circle, ...newValues };
    });

    //draw values
    for (let circle of circles) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.fillStyle = circle.color;
      ctx.arc(circle.x, circle.y, circle.radius, 0, circumference);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(circle.x - circle.radius * 0.55, circle.y - circle.radius * 0.5);
      ctx.fillStyle = "rgb(255 255 255 / 0.9)";
      ctx.ellipse(
        circle.x - circle.radius * 0.55,
        circle.y - circle.radius * 0.55,
        circle.radius * 0.08,
        circle.radius * 0.18,
        Math.PI / 4,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  }

  function ot6() {
    let ctx = tscirclescanvas.getContext("2d");
    let ytmusicplayer = document.querySelector("ytmusic-player");
    tscirclescanvas.height = ytmusicplayer.clientHeight;
    tscirclescanvas.width = ytmusicplayer.clientWidth;
    shorterCanvasSide =
      ytmusicplayer.clientHeight < ytmusicplayer.clientWidth ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
    analyser.fftSize = 512;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, tscirclescanvas.width, tscirclescanvas.height);
    ctx.strokeStyle = "#000";

    updateAndDraw(ctx);
  }

  return (
    <canvas
      id="ThemeSong-Visualizer-Circles-Variant-Swith"
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

export default Swith;
