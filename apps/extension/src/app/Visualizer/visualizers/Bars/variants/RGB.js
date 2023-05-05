import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function RGB({ analyser, dataArray, bufferLength }) {
  const barsPrefs = useStore((state) =>
    state.visualizer.visualizerPrefs.find((visualizer) => visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6")
  );
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);

  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");

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

        context.fillStyle = `hsla(${barHeight}, 100%, 70%, 0.95)`; //rgb: bar height is correlated to hue

        context.fillRect(x, canvas.height - barHeight + 6, barsPrefs.barWidth, barHeight);

        x += barsPrefs.barWidth + barsPrefs.gap;
      }
    };

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawBars), 17);
    }
  }, [isSongPlaying, analyser, bufferLength, dataArray, barsPrefs]);

  return (
    <canvas
      id="ThemeSong-Visualizer-Bars-Variant-RGB"
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

export default RGB;
