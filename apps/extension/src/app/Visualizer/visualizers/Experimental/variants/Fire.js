import React, { useRef, useEffect } from "react";
import Canvas from "../../../components/Canvas";

/*
Need to fix.
This visualizer is making everything lag. 
All other visualizers start lagging after this is used.
*/

const FireVisualizer = () => {
  const canvasRef = useRef(null);
  const emberParticlesRef = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    const fireColorsPalette = [
      [7, 7, 7, 0.1],
      [31, 7, 7, 0.1],
      [47, 15, 7, 0.1],
      [71, 15, 7, 0.3],
      [87, 23, 7, 0.5],
      [103, 31, 7, 0.5],
      [119, 31, 7, 0.5],
      [143, 39, 7, 0.5],
      [159, 47, 7, 0.7],
      [175, 63, 7, 0.7],
      [191, 71, 7, 0.7],
      [199, 71, 7, 0.7],
      [223, 79, 7, 0.8],
      [223, 87, 7, 0.8],
      [223, 87, 7, 0.8],
      [215, 95, 7, 0.8],
      [215, 95, 7, 0.8],
      [215, 103, 15, 0.8],
      [207, 111, 15, 0.8],
      [207, 119, 15, 0.8],
      [207, 127, 15, 0.8],
      [207, 135, 23, 0.8],
      [199, 135, 23, 0.9],
      [199, 143, 23, 0.9],
      [199, 151, 31, 0.9],
      [191, 159, 31, 0.9],
      [191, 159, 31, 0.9],
      [191, 167, 39, 0.9],
      [191, 167, 39, 0.9],
      [191, 175, 47, 0.9],
      [183, 175, 47, 1],
      [183, 183, 47, 1],
      [183, 183, 55, 1],
      [207, 207, 111, 1],
      [223, 223, 159, 1],
      [239, 239, 199, 1],
      [255, 255, 255, 1],
    ];

    const fireWidth = Math.floor(width / 2);
    const fireHeight = Math.floor(height / 2);
    const firePixels = new Array(fireWidth * fireHeight).fill(0);

    for (let x = 0; x < fireWidth; x++) {
      const lastRowIndex = (fireHeight - 1) * fireWidth;
      firePixels[lastRowIndex + x] = 36;
    }

    function updateFire() {
      for (let y = 0; y < fireHeight - 1; y++) {
        for (let x = 0; x < fireWidth; x++) {
          const pixelIndex = y * fireWidth + x;
          const belowPixelIndex = (y + 1) * fireWidth + x;
          const decay = Math.floor(Math.random() * 1.4);
          const belowPixelFireIntensity = firePixels[belowPixelIndex];
          const newFireIntensity = belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0;
          firePixels[pixelIndex - decay] = newFireIntensity;
        }
      }
    }

    function renderFire() {
      ctx.clearRect(0, 0, width, height);

      for (let y = 0; y < fireHeight; y++) {
        for (let x = 0; x < fireWidth; x++) {
          const pixelIndex = y * fireWidth + x;
          const fireIntensity = firePixels[pixelIndex];
          const color = fireColorsPalette[fireIntensity];
          const r = color[0];
          const g = color[1];
          const b = color[2];
          const a = color[3];
          ctx.fillStyle = `rgba(${r},${g},${b}, ${a})`;
          ctx.fillRect(x * 2, y * 2, 2, 2);
        }
      }
    }

    function createEmberParticle() {
      const particle = {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * -3 - 1,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.5,
      };
      emberParticlesRef.current.push(particle);
    }

    function updateEmberParticles() {
      for (let i = emberParticlesRef.current.length - 1; i >= 0; i--) {
        const particle = emberParticlesRef.current[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity -= 0.01;

        if (particle.opacity <= 0) {
          emberParticlesRef.current.splice(i, 1);
        }
      }
    }

    function renderEmberParticles() {
      for (let i = 0; i < emberParticlesRef.current.length; i++) {
        const particle = emberParticlesRef.current[i];
        ctx.fillStyle = `rgba(255, 180, 180, ${particle.opacity})`;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      }
    }

    function animateFire() {
      updateFire();
      renderFire();

      if (Math.random() < 1) {
        createEmberParticle();
      }

      updateEmberParticles();
      renderEmberParticles();

      requestAnimationFrame(animateFire);
    }

    animateFire();
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default FireVisualizer;
