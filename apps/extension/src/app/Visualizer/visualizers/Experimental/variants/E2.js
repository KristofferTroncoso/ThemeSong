import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function E2({ analyser }) {
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
    context.current.strokeStyle = "#000";
    analyser.fftSize = 4096;
    return function cleanUp() {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    let ctx = context.current;
    let canvas = canvasRef.current;

    function ai3() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get the frequency and amplitude data
      analyser.getByteFrequencyData(dataArray);

      canvas.height = ytmusicplayer.clientHeight;
      canvas.width = ytmusicplayer.clientWidth;

      const barWidth = 2;
      let x = 0;
      let y = canvas.height / 2;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let i = 0; i < bufferLength; i++) {
        const percent = dataArray[i] / 255;
        const height = canvas.height * percent * 0.5;
        const hue = (i / bufferLength) * 1000;
        const saturation = 100;
        const lightness = 60;
        ctx.strokeStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        ctx.lineTo(x, y - height);
        x += barWidth;
        ctx.lineTo(x, y + height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(ai3), 17);
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

export default E2;
