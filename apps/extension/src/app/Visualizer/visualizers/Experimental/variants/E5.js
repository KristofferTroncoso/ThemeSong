import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function E5({ analyser }) {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  let ytmusicplayer = document.querySelector("ytmusic-player");

  const canvasRef = useRef();
  const intervalId = useRef();
  const context = useRef();

  useEffect(() => {
    console.log("1");
    context.current = canvasRef.current.getContext("2d");

    analyser.fftSize = 4096;
    return function cleanUp() {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    let ctx = context.current;
    let canvas = canvasRef.current;

    // Constants for the visualizer effect
    const numParticles = 5000;
    const particleSize = 3;
    const particleSpeed = 2;
    const particleColorRange = [0, 360];

    // Generate random particles
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * particleSpeed;
      const color = `hsl(${
        Math.random() * (particleColorRange[1] - particleColorRange[0]) + particleColorRange[0]
      }, 100%, 50%)`;
      particles.push({ x, y, angle, velocity, color });
    }

    function drawVisualizer() {
      // Clear the canvas with the background color
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the particles
      for (let i = 0; i < numParticles; i++) {
        const particle = particles[i];
        particle.x += Math.cos(particle.angle) * particle.velocity;
        particle.y += Math.sin(particle.angle) * particle.velocity;

        // Wrap the particles around the canvas edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw the particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawVisualizer), 17);
    }
  }, [isSongPlaying, analyser]);

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

export default E5;
