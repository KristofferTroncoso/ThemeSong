import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function Accent({ analyser, dataArray, bufferLength }) {
  const barsPrefs = useStore((state) => state.visualizer.prefs["51dc50c8-eb06-4086-ad9c-a89758f63db6"]);
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const dominant = useStore((state) => state.palette.dominant);

  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.strokeStyle = "#000000";
    ctx.current.lineWidth = 2;

    return function cleanUp() {
      console.log("cleaning up");
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    const drawBars = () => {
      let context = ctx.current;
      let canvas = canvasRef.current || { width: 2400, height: 520 };

      analyser.fftSize = 2048;
      analyser.getByteFrequencyData(dataArray);

      context.clearRect(0, 0, canvas.width, canvas.height);

      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 2;

        context.fillStyle = `hsl(
          ${(dominant.hsl[0] * 360).toFixed()}, 
          ${dominant.hsl[1] * 100}%, 
          ${(barHeight / 1000) * 100 + 30}%
        )`; //dominant accented color: barheight correlates to brightness

        context.fillRect(x, canvas.height - barHeight + 6, barsPrefs.barWidth, barHeight);
        context.strokeRect(x, canvas.height - barHeight + 6, barsPrefs.barWidth, barHeight);

        x += barsPrefs.barWidth + barsPrefs.gap;
      }
    };

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawBars), 17);
    }
  }, [isSongPlaying, analyser, bufferLength, dataArray, barsPrefs, dominant]);

  return (
    <canvas
      id="ThemeSong-Visualizer-Bars-Variant-Accent"
      ref={canvasRef}
      height="520"
      width="2400"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 40%;
        width: 100%;
        border-radius: inherit;
        z-index: 100;
      `}
    />
  );
}

export default Accent;
