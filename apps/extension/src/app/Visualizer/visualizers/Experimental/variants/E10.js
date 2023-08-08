import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import Canvas from "../../../components/Canvas";
import useAnimation from "../../../components/useAnimation";
import useDraw from "../../../components/useDraw";

function RGB({ analyser }) {
  const barsPrefs = { barWidth: 16, gap: 1.5 };
  const canvasRef = useRef();
  const canvasRef2 = useRef();
  const ctx = useRef();

  const bufferLength = 1024;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  useAnimation(() => {
    let context = ctx.current;
    let canvas = canvasRef.current;

    ctx.current = canvasRef.current.getContext("2d");

    analyser.fftSize = 2048;
    analyser.getByteFrequencyData(dataArray);

    context.clearRect(0, 0, canvas.width, canvas.height);

    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let barHeight = Math.max(dataArray[i] * 2, 50);
      let y = canvas.height;

      for (let j = 0; j < barHeight; j += barsPrefs.barWidth) {
        if (j > barHeight - barsPrefs.barWidth) {
          context.fillStyle = "#ff683b";
        } else if (y > canvas.height - 50) {
          context.fillStyle = "green";
        } else if (y > canvas.height - 170) {
          context.fillStyle = "#e8faff";
        } else if (y > canvas.height - 200) {
          context.fillStyle = "#c7e3ff";
        } else if (y > canvas.height - 230) {
          context.fillStyle = "#fadbff";
        } else if (y > canvas.height - 250) {
          context.fillStyle = "#9e6dbf";
        } else if (y > canvas.height - 280) {
          context.fillStyle = "#ffffb5";
        } else {
          context.fillStyle = "#ffffa3";
        }

        context.fillRect(x, y, barsPrefs.barWidth, barsPrefs.barWidth - 8);

        y -= 10;
      }

      // context.fillStyle = "#ff683b";
      // context.fillRect(x, canvas.height - barHeight + 100, barsPrefs.barWidth, barsPrefs.barWidth - 12);
      // context.fillStyle = "purple";
      // context.fillRect(x, canvas.height - barHeight + 4, barsPrefs.barWidth, barsPrefs.barWidth - 12);

      x += barsPrefs.barWidth + barsPrefs.gap;
    }
  }, 45);

  useDraw(() => {
    const canvas = canvasRef2.current;
    const context = canvas.getContext("2d");
    const circleSize = 4; // Adjust the size of each mini circle
    const spacing = 6; // Adjust the spacing between each mini circle
    const rows = Math.ceil(canvas.height / spacing);
    const cols = Math.ceil(canvas.width / spacing);

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * spacing + (i % 2 === 0 ? spacing / 2 : 0);
        const y = i * spacing;
        let opacity = y / (canvas.height / 3) - 1; // Calculate opacity based on vertical position
        opacity = opacity < 0 ? 0 : opacity; // Clamp opacity to minimum 0

        context.beginPath();
        context.arc(x, y, circleSize / 2, 0, 2 * Math.PI);
        context.fillStyle = `rgb(255 255 255 / ${opacity * 0.1})`; // Set the opacity
        context.fill();
        context.closePath();
      }
    }
  });

  return (
    <div
      id="ThemeSong-Visualizer-Bars-Container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(0, 0, 60, 0.2) 0%, rgba(0, 0, 60, 0.9) 73%, rgba(0, 0, 50, 1) 100%);
      `}
    >
      <div
        css={css`
          height: 50%;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
        `}
      >
        <Canvas ref={canvasRef} />
      </div>
      <Canvas ref={canvasRef2} />
      <div
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            180deg,
            rgb(255 255 255 / 0) 85%,
            rgba(200, 200, 255, 0.1) 93%,
            rgba(220, 220, 255, 0.3) 100%
          );
        `}
      />
      <div
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            320deg,
            rgb(255 255 255 / 0) 30%,
            rgb(255 255 255 / 0.05) 40%,
            rgb(255 255 255 / 0.1) 50%,
            rgb(255 255 255 / 0.05) 60%,
            rgb(255 255 255 / 0) 65%,
            rgba(200, 200, 255, 0.2) 95%,
            rgba(200, 200, 255, 0.4) 100%
          );
          /* background: linear-gradient(
            142deg,
            rgb(255 255 255 / 0.2) 0%,
            rgba(241, 240, 244, 0.2) 4%,
            rgb(255 255 255 / 0.2) 56%,
            rgb(255 255 255 / 0.2) 59%
          ); */
        `}
      />
    </div>
  );
}

export default RGB;
