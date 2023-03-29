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
    minRadius: 0.8,
    growRate: 200,
    color: "hsla(0, 100%, 45%, 0.8)",
    lineWidth: 1,
  },
  {
    x: 450,
    y: 310,
    dirX: -1,
    dirY: 1,
    speedX: 0.8,
    speedY: 0.5,
    freq: 1,
    minByte: 100,
    minRadius: 0.5,
    growRate: 500,
    color: "hsla(130 , 100%, 40%, 0.8)",
    lineWidth: 1,
  },
  {
    x: 230,
    y: 460,
    dirX: -1,
    dirY: -1,
    speedX: 0.8,
    speedY: 1.2,
    freq: 40,
    minByte: 0,
    minRadius: 0.38,
    growRate: 600,
    color: "hsla(40, 100%, 50%, 0.8)",
    lineWidth: 1,
  },
  {
    x: 310,
    y: 450,
    dirX: -1,
    dirY: 1,
    speedX: 1.4,
    speedY: 1,
    freq: 80,
    minByte: 0,
    minRadius: 0.37,
    growRate: 600,
    color: "hsla(265, 90%, 70%, 0.8)",
    lineWidth: 1,
  },
  {
    x: 160,
    y: 310,
    dirX: -1,
    dirY: 1,
    speedX: 1,
    speedY: 1.3,
    freq: 120,
    minByte: 10,
    minRadius: 0.36,
    growRate: 600,
    color: "hsla(35, 100%, 50%, 0.8)",
    lineWidth: 1,
  },
  {
    x: 400,
    y: 100,
    dirX: 1,
    dirY: -1,
    speedX: 1.5,
    speedY: 0.8,
    freq: 140,
    minByte: 10,
    minRadius: 0.35,
    growRate: 600,
    color: "hsla(170, 100%, 40%, 0.8)",
    lineWidth: 1,
  },
  {
    x: 150,
    y: 410,
    dirX: 1,
    dirY: -1,
    speedX: 0.6,
    speedY: 1,
    freq: 190,
    minByte: 0,
    minRadius: 0.32,
    growRate: 800,
    color: "hsla(150, 100%, 40%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 400,
    y: 290,
    dirX: -1,
    dirY: -1,
    speedX: 1.1,
    speedY: 1.8,
    freq: 190,
    minByte: 0,
    minRadius: 0.32,
    growRate: 800,
    color: "hsla(350, 90%, 45%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 200,
    y: 310,
    dirX: 1,
    dirY: 1,
    speedX: 0.9,
    speedY: 0.6,
    freq: 200,
    minByte: 0,
    minRadius: 0.3,
    growRate: 800,
    color: "hsla(10, 100%, 50%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 160,
    y: 350,
    dirX: -1,
    dirY: -1,
    speedX: 0.3,
    speedY: 0.8,
    freq: 0,
    minByte: 150,
    minRadius: 0.5,
    growRate: 300,
    color: "hsla(230, 100%, 50%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 420,
    y: 310,
    dirX: -1,
    dirY: -1,
    speedX: 0.9,
    speedY: 0.5,
    freq: 0,
    minByte: 150,
    minRadius: 0.5,
    growRate: 300,
    color: "hsla(30 , 90%, 50%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 230,
    y: 460,
    dirX: -1,
    dirY: 1,
    speedX: 0.9,
    speedY: 1.2,
    freq: 30,
    minByte: 0,
    minRadius: 0.38,
    growRate: 600,
    color: "hsla(60, 100%, 50%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 310,
    y: 450,
    dirX: -1,
    dirY: -1,
    speedX: 1.2,
    speedY: 1,
    freq: 70,
    minByte: 0,
    minRadius: 0.37,
    growRate: 600,
    color: "hsla(300, 100%, 70%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 160,
    y: 310,
    dirX: -1,
    dirY: -1,
    speedX: 1,
    speedY: 1.4,
    freq: 110,
    minByte: 10,
    minRadius: 0.36,
    growRate: 600,
    color: "hsla(200, 100%, 50%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 400,
    y: 100,
    dirX: -1,
    dirY: -1,
    speedX: 1.5,
    speedY: 0.5,
    freq: 120,
    minByte: 10,
    minRadius: 0.35,
    growRate: 600,
    color: "hsla(210, 100%, 40%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 150,
    y: 410,
    dirX: 1,
    dirY: 1,
    speedX: 2,
    speedY: 0.8,
    freq: 150,
    minByte: 0,
    minRadius: 0.32,
    growRate: 800,
    color: "hsla(280, 100%, 40%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 400,
    y: 290,
    dirX: 1,
    dirY: -1,
    speedX: 1.2,
    speedY: 1.2,
    freq: 170,
    minByte: 0,
    minRadius: 0.32,
    growRate: 800,
    color: "hsla(290, 100%, 50%, 0.8)",
    lineWidth: 3,
  },
  {
    x: 200,
    y: 310,
    dirX: -1,
    dirY: 1,
    speedX: 0.9,
    speedY: 0.3,
    freq: 210,
    minByte: 0,
    minRadius: 0.3,
    growRate: 800,
    color: "hsla(320, 100%, 50%, 0.8)",
    lineWidth: 3,
  },
];

let shorterCanvasSide;
let circumference = 2 * Math.PI;

let ctx;
let tscirclescanvas;
let borderWidth = 4;

function Bubbles({ analyser, dataArray, bufferLength }) {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  let ytmusicplayer = document.querySelector("ytmusic-player");

  const canvasRef = useRef(null);
  const intervalId = useRef();

  useEffect(() => {
    console.log("Bubbles time");
    tscirclescanvas = canvasRef.current;
    setUpCircles();
    bubbles();

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
      intervalId.current = setInterval(() => requestAnimationFrame(bubbles), 17);
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

  function bubbles() {
    let ctx = tscirclescanvas.getContext("2d");
    let ytmusicplayer = document.querySelector("ytmusic-player");
    tscirclescanvas.height = ytmusicplayer.clientHeight;
    tscirclescanvas.width = ytmusicplayer.clientWidth;
    shorterCanvasSide =
      ytmusicplayer.clientHeight < ytmusicplayer.clientWidth ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
    analyser.fftSize = 512;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, tscirclescanvas.width, tscirclescanvas.height);

    //update values
    circles = circles.map((circle) => {
      let newValues = updateValues(circle);
      return { ...circle, ...newValues };
    });

    //draw values
    for (let circle of circles) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000";
      ctx.fillStyle = circle.color;
      ctx.arc(circle.x, circle.y, circle.radius, 0, circumference);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(circle.x - circle.radius * 0.55, circle.y - circle.radius * 0.5);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.ellipse(
        circle.x - circle.radius * 0.55,
        circle.y - circle.radius * 0.55,
        circle.radius * 0.08,
        circle.radius * 0.16,
        Math.PI / 4,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  }

  return (
    <canvas
      id="ThemeSong-Visualizer-Circles-Variant-Bubbles"
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

export default Bubbles;
