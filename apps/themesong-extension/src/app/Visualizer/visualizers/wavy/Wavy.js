import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function Wavy({ analyser, dataArray, bufferLength }) {
  const wavyPrefs = useStore((state) =>
    state.visualizer.visualizerPrefs.find((visualizer) => visualizer.id === "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d")
  );
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const dominantSwatch = useStore((state) => state.palette.dominant);

  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();

  useEffect(() => {
    console.log("3");
    return function cleanUp() {
      console.log("Wavy: Cleaning up");
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    console.log("1");
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.strokeStyle = "#fff";
    ctx.current.lineWidth = wavyPrefs.lineWidth;
    ctx.current.shadowBlur = 4;
    ctx.current.shadowOffsetY = wavyPrefs.lineWidth;
    ctx.current.shadowColor = `hsl(
      ${(dominantSwatch.hsl[0] * 360).toFixed()}, 
      ${dominantSwatch.hsl[1] * 100 * 2}%, 
      70%
    )`;
  }, [dominantSwatch, wavyPrefs]);

  useEffect(() => {
    console.log("5");

    const drawWavy = () => {
      let context = ctx.current;
      let canvas = canvasRef.current || { width: 1920, height: 512 };
      analyser.fftSize = 2048;
      analyser.getByteTimeDomainData(dataArray);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();

      let sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128;
        let y = (v * canvas.height) / 2;

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
        x += sliceWidth;
      }

      ctx.current.stroke();
    };

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawWavy), 17);
    }
  }, [isSongPlaying, analyser, bufferLength, dataArray]);

  return (
    <div
      id="ThemeSong-Visualizer-Wavy-Container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.4) 0%,
          rgba(0, 0, 0, 0.6) 50%,
          rgba(0, 0, 0, 0.7) 75%,
          rgba(0, 0, 0, 0.6) 100%
        );
      `}
    >
      <canvas
        id="ThemeSong-Visualizer-Wavy-Canvas"
        ref={canvasRef}
        height="512"
        width="1920"
        css={css`
          position: absolute;
          bottom: 10%;
          left: 0;
          height: 35%;
          width: 100%;
          border-radius: inherit;
          z-index: 100;
        `}
      />
    </div>
  );
}

export default Wavy;
