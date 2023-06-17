import { useRef } from "react";
import { css } from "@emotion/react";
import Canvas from "../../components/Canvas";
import useAnimation from "../../components/useAnimation";
import useDraw from "../../components/useDraw";

function SpiderVerse({ analyser }) {
  const barsPrefs = { barWidth: 16, gap: 2 };
  const canvasRef = useRef();
  const canvasRef2 = useRef();
  const ctx = useRef();

  const bufferLength = 1024;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  useAnimation(() => {
    let context = ctx.current;
    let canvas = canvasRef.current;

    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.fillStyle = "blue";

    analyser.fftSize = 2048;
    analyser.getByteFrequencyData(dataArray);

    context.clearRect(0, 0, canvas.width, canvas.height);

    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let barHeight = Math.max(dataArray[i] * 3, 220);
      let y = canvas.height;

      for (let j = 0; j < barHeight; j += barsPrefs.barWidth) {
        if (j > barHeight - barsPrefs.barWidth) {
          context.fillStyle = "#ff683b";
        } else if (y > canvas.height - 50) {
          context.fillStyle = "green";
        } else if (y > canvas.height - 240) {
          context.fillStyle = "#44d5fc";
        } else if (y > canvas.height - 300) {
          context.fillStyle = "#e28cff";
        } else if (y > canvas.height - 380) {
          context.fillStyle = "turquoise";
        } else if (y > canvas.height - 480) {
          context.fillStyle = "#6c259c";
        } else {
          context.fillStyle = "#ffff78";
        }

        context.fillRect(x, y + 150, barsPrefs.barWidth, barsPrefs.barWidth - 4);

        y -= 15;
      }

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
        context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.07})`; // Set the opacity
        context.fill();
        context.closePath();
      }
    }
    console.log(canvas.height);
  });

  return (
    <div
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: linear-gradient(
          180deg,
          rgba(20, 20, 90, 0.1) 0%,
          rgba(10, 10, 80, 0.6) 73%,
          rgba(10, 10, 80, 0.8) 100%
        );
      `}
    >
      <Canvas ref={canvasRef} height="1100" />
      <Canvas ref={canvasRef2} />
      <div
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 85%,
            rgba(200, 200, 255, 0.1) 93%,
            rgba(200, 200, 255, 0.4) 100%
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
            rgba(255, 255, 255, 0) 65%,
            rgba(200, 200, 255, 0.2) 85%,
            rgba(200, 200, 255, 0.4) 100%
          );
        `}
      />
    </div>
  );
}

export default SpiderVerse;
