import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useStore } from "../../../../store";

function DancingPalette({ analyser, dataArray, bufferLength }) {
  const barsPrefs = useStore((state) =>
    state.visualizer.visualizerPrefs.find(
      (visualizer) => visualizer.visualizerId === "visualizerId:1"
    )
  );
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const palette = useStore((state) => state.palette.palette);

  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();

  useEffect(() => {
    return function cleanUp() {
      console.log("cleaning up");
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.strokeStyle = "#000";
    ctx.current.lineWidth = barsPrefs.borderWidth;
  }, [barsPrefs]);

  useEffect(() => {
    const drawBars = () => {
      let context = ctx.current;
      let canvas = canvasRef.current || { width: 2400, height: 520 };

      analyser.fftSize = 2048;
      analyser.getByteFrequencyData(dataArray);

      context.clearRect(0, 0, canvas.width, canvas.height);

      let barHeight;
      let x = 0;
      let paletteArray = Object.values(palette);
      let arrLoopNum = 0;

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
        context.fillStyle = `hsla(
          ${pickedSwatch.hsl[0] * 360}, 
          ${pickedSwatch.hsl[1] * 100}%, 
          ${
            // pickedSwatch.hsl[2] * 100 + 10
            (pickedSwatch.hsl[2] - (pickedSwatch.hsl[2] - 0.7) / 2) * 100 //kinda normalizes the light
            // barHeight/700 * 100 + 20 //barHeight correlates with brightness. has like a minimum brightness. problem is colors aren't 100% correct.
          }%, 
          0.95
        )`;

        context.fillRect(
          x,
          canvas.height - barHeight + 6,
          barsPrefs.barWidth,
          barHeight
        );
        if (barsPrefs.borderWidth !== 0) {
          context.strokeRect(
            x,
            canvas.height - barHeight + 6,
            barsPrefs.barWidth,
            barHeight
          );
        }
        context.stroke();
        x += barsPrefs.barWidth + barsPrefs.gap;
      }
    };

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(
        () => requestAnimationFrame(drawBars),
        17
      );
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
        height: 30%;
        width: 100%;
        border-radius: inherit;
        z-index: 100;
      `}
    />
  );
}

export default DancingPalette;
