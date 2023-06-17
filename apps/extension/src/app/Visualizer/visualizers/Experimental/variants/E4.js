import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function E4({ analyser }) {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  let ytmusicplayer = document.querySelector("ytmusic-player");

  const canvasRef = useRef();
  const intervalId = useRef();
  const context = useRef();

  const bufferLength = 1024;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

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

    // Camera variables
    let zoomFactor = 1;
    // const zoomSpeed = 0.0005;
    const zoomSpeed = 0.0001;

    // Function to draw the visualizer
    function drawVisualizer() {
      // Set the visualizer colors

      // Constants for the visualizer effect
      const numPoints = 200;
      // const radius = Math.min(canvas.width, canvas.height) * 0.1;
      let radius = canvas.width / 2;
      const angleIncrement = (Math.PI * 2) / numPoints;
      const lineThickness = 3;

      // Update the zoom factor
      zoomFactor -= zoomSpeed;

      // Clear the canvas with the background color
      // ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get the current frequency data from the analyser
      analyser.getByteFrequencyData(dataArray);

      // Move the canvas origin to the center
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Scale the canvas to achieve the zoom effect
      ctx.scale(zoomFactor, zoomFactor);

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
        const radiusOffset = (dataArray[frequencyIndex] / 255) * radius;
        const x = Math.cos(i * angleIncrement) * (radius + radiusOffset);
        const y = Math.sin(i * angleIncrement) * (radius + radiusOffset);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Reset the canvas transformation
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // Call the drawVisualizer function recursively to create an animation
    }

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawVisualizer), 17);
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

export default E4;
