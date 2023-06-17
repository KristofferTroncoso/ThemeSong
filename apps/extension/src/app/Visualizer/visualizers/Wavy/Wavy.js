import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import useAnimation from "../../components/useAnimation";

function Wavy({ analyser }) {
  const wavyPrefs = useStore((state) =>
    state.visualizer.visualizerPrefs.find((visualizer) => visualizer.id === "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d")
  );
  const dominantSwatch = useStore((state) => state.palette.dominant);

  const canvasRef = useRef();
  const context = useRef();

  const fftSize = 2048;
  const bufferLength = fftSize / 2;
  const dataArray = new Uint8Array(bufferLength);

  useEffect(() => {
    console.log("Wavy: Setup");
    context.current = canvasRef.current.getContext("2d");
    context.current.strokeStyle = "#fff";
    context.current.lineWidth = wavyPrefs.lineWidth;
    context.current.shadowBlur = 4;
    context.current.shadowOffsetY = wavyPrefs.lineWidth;
    context.current.shadowColor = `hsl(
      ${(dominantSwatch.hsl[0] * 360).toFixed()}, 
      ${dominantSwatch.hsl[1] * 180}%, 
      70%
    )`;
    analyser.fftSize = fftSize;
  }, [dominantSwatch, wavyPrefs, analyser]);

  useAnimation(() => {
    let ctx = context.current;
    let canvas = canvasRef.current;

    analyser.getByteTimeDomainData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    let sliceWidth = canvas.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128;
      let y = (v * canvas.height) / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x += sliceWidth;
    }

    ctx.stroke();
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
          rgba(0, 0, 0, 0.4) 0%,
          rgba(0, 0, 0, 0.6) 50%,
          rgba(0, 0, 0, 0.7) 75%,
          rgba(0, 0, 0, 0.6) 100%
        );
      `}
    >
      <canvas
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
