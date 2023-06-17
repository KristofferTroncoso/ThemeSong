import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
// import Canvas from "../../../components/Canvas";
// import useAnimation from "../../../components/useAnimation";

function Snowfall() {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);

  const canvasRef = useRef();
  const intervalId = useRef();
  const context = useRef();

  const circumference = 2 * Math.PI;

  useEffect(() => {
    context.current = canvasRef.current.getContext("2d");

    return function cleanUp() {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    let ctx = context.current;
    let canvas = canvasRef.current;

    // Set the visualizer colors
    const starColor = "#ffffff";

    // Constants for the visualizer effect
    const numStars = 1000;
    const maxStarSize = 6;
    const minStarSize = 3;
    const maxStarSpeed = 1;
    const minStarSpeed = 0.1;

    // Generate random stars
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
      const speed = Math.random() * (maxStarSpeed - minStarSpeed) + minStarSpeed;
      stars.push({ x, y, size, speed });
    }

    function drawVisualizer() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the stars
      ctx.fillStyle = starColor;
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size / 2, 0, circumference);
        ctx.fill();
      }
    }

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawVisualizer), 40);
    }
  }, [isSongPlaying]);

  return (
    <canvas
      ref={canvasRef}
      height="1100"
      width="1400"
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background-color: rgba(0, 0, 40, 0.4);
      `}
    />
  );
}

export default Snowfall;
