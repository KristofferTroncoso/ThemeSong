import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import Canvas from "../../components/Canvas";
import useAnimation from "../../components/useAnimation";

function Snowfall() {
  const canvasRef = useRef();

  const circumference = 2 * Math.PI;

  // Constants for the visualizer effect
  const numStars = 1000;
  const maxStarSize = 6;
  const minStarSize = 3;
  const maxStarSpeed = 1;
  const minStarSpeed = 0.1;

  // Generate random stars
  const stars = [];

  useEffect(() => {
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvasRef.current.width;
      const y = Math.random() * canvasRef.current.height;
      const size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
      const speed = Math.random() * (maxStarSpeed - minStarSpeed) + minStarSpeed;
      stars.push({ x, y, size, speed });
    }
  }, [stars]);

  useAnimation(() => {
    let canvas = canvasRef.current;
    let ctx = canvasRef.current.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the visualizer colors
    const starColor = "#ffffff";

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
  }, 40);

  return (
    <Canvas
      ref={canvasRef}
      height="1100"
      width="1400"
      css={css`
        background-color: rgba(0, 0, 40, 0.7);
      `}
    />
  );
}

export default Snowfall;
