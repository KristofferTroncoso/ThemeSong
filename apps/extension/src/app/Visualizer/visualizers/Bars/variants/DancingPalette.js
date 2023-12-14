import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function DancingPalette({ analyser, dataArray, bufferLength }) {
  const barsPrefs = useStore((state) => state.visualizer.prefs["51dc50c8-eb06-4086-ad9c-a89758f63db6"]);
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const palette = useStore((state) => state.palette.palette);

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

      function yo(barHeight) {
        if (barHeight > 185) {
          return palette.LightVibrant;
        } else if (barHeight > 165) {
          return palette.LightMuted;
        } else if (barHeight > 130) {
          return palette.Vibrant;
        } else if (barHeight > 110) {
          return palette.Muted;
        } else if (barHeight > 70) {
          return palette.DarkVibrant;
        } else {
          return palette.DarkMuted;
        }
      }

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 2;

        let pickedSwatch = yo(dataArray[i]);
        context.fillStyle = `hsl(
          ${pickedSwatch.hsl[0] * 360}, 
          ${pickedSwatch.hsl[1] * 100}%, 
          ${
            (pickedSwatch.hsl[2] - (pickedSwatch.hsl[2] - 0.7) / 2) * 100 //kinda normalizes the light
          }%
        )`;

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
  }, [isSongPlaying, analyser, bufferLength, dataArray, barsPrefs, palette]);

  return (
    <canvas
      id="ThemeSong-Visualizer-Bars-Variant-DancingPalette"
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

export default DancingPalette;
