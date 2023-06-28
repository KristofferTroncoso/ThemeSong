import { useRef, useEffect } from "react";
import Canvas from "../../../components/Canvas";
import useAnimation from "../../../components/useAnimation";

function E1({ analyser }) {
  const canvasRef = useRef();
  const context = useRef();

  const bufferLength = 1024;

  useEffect(() => {
    context.current = canvasRef.current.getContext("2d");
    context.current.strokeStyle = "#000000";
  }, []);

  useAnimation(() => {
    let canvas = canvasRef.current;
    let ctx = context.current;

    ctx = canvas.getContext("2d");
    analyser.fftSize = 2048;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get the frequency and amplitude data
    analyser.getByteFrequencyData(dataArray);

    // Loop through the data and draw a circle for each frequency
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    const maxRadius = 350;
    for (let i = 0; i < bufferLength; i++) {
      // Calculate the angle and distance of the circle
      const angle = (i / bufferLength) * Math.PI * 2;
      const distance = (dataArray[i] / 255) * (maxRadius - radius) + radius;

      // Calculate the x and y position of the circle
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      // Draw the circle
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${(i / bufferLength) * 360}, 100%, 50%)`;
      ctx.fill();
    }
  });

  return <Canvas ref={canvasRef} />;
}

export default E1;
