import { useRef } from "react";
import { css } from "@emotion/react";
import Canvas from "../../components/Canvas";
import useAnimation from "../../components/useAnimation";
import useDraw from "../../components/useDraw";

function RetroBars({ analyser }) {
  const barsPrefs = { barWidth: 34, gap: 4 };
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
        context.fillStyle = `hsl(${y / 2 - 190}, 100%, 50%)`;

        context.beginPath();
        context.roundRect(x, y, barsPrefs.barWidth, barsPrefs.barWidth - 20, 4);
        context.fill();

        y -= 20;
      }

      x += barsPrefs.barWidth + barsPrefs.gap;
    }
  });

  useDraw(() => {
    let canvas = canvasRef2.current;

    let context = canvasRef2.current.getContext("2d");

    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let barHeight = 500;
      let y = canvas.height;

      for (let j = 0; j < barHeight; j += barsPrefs.barWidth) {
        context.fillStyle = `hsl(${y / 2 - 200}, 100%, 15%)`;

        context.beginPath();
        context.roundRect(x, y, barsPrefs.barWidth, barsPrefs.barWidth - 20, 4);
        context.fill();

        y -= 20;
      }

      x += barsPrefs.barWidth + barsPrefs.gap;
    }
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
        background-color: rgba(0, 0, 0, 0.4);
      `}
    >
      <Canvas
        ref={canvasRef2}
        css={css`
          background-color: rgba(0, 0, 0, 0.6);
        `}
      />
      <Canvas ref={canvasRef} />
    </div>
  );
}

export default RetroBars;
