import { useRef } from "react";
import Canvas from "../../../components/Canvas";
import useAnimation from "../../../components/useAnimation";

function E8({ analyser }) {
  const canvasRef = useRef();

  const bufferLength = 1024;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  useAnimation(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 8;
    ctx.shadowColor = `#000`;
    analyser.fftSize = 4096;

    // Constants for the visualizer effect
    const numPoints = 200;
    const radius = Math.min(canvas.width, canvas.height) * 0.1;
    const angleIncrement = (Math.PI * 2) / numPoints;
    const lineThickness = 3;

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get the current frequency data from the analyser
    analyser.getByteFrequencyData(dataArray);

    // Move the canvas origin to the center
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Rotate the canvas based on time for an animated effect
    const rotationSpeed = 0.001;
    const rotationAngle = performance.now() * rotationSpeed;
    ctx.rotate(rotationAngle);

    ctx.lineWidth = lineThickness;
    ctx.beginPath();
    for (let i = 0; i < numPoints; i++) {
      let barHeight = dataArray[i] * 2;
      ctx.strokeStyle = `hsla(${barHeight}, 100%, 70%, 0.95)`;
      const frequencyIndex = Math.floor((i / numPoints) * bufferLength);
      const radiusOffset = (dataArray[frequencyIndex] / 40) * radius;
      const x = Math.cos(i * angleIncrement) * (radius + radiusOffset);
      const y = Math.sin(i * angleIncrement) * (radius + radiusOffset);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    // Reset the canvas transformation
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  return <Canvas ref={canvasRef} />;
}

export default E8;
