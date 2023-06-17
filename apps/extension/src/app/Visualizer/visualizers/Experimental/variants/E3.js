import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function E3({ analyser }) {
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

    function ai4() {
      const barColor = "#00FF00";
      const graphColor = "#FFFFFF";

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get the current frequency data from the analyser
      analyser.getByteFrequencyData(dataArray);

      // Calculate the number of bars to be displayed
      const numBars = 64;
      const barWidth = canvas.width / numBars;

      // Draw the bars
      ctx.fillStyle = barColor;
      for (let i = 0; i < numBars; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;
        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth, barHeight);
      }

      // Draw the frequency graph
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - (dataArray[0] / 255) * canvas.height);
      ctx.strokeStyle = graphColor;
      for (let i = 1; i < bufferLength; i++) {
        const x = (i / bufferLength) * canvas.width;
        const y = canvas.height - (dataArray[i] / 255) * canvas.height;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(ai4), 17);
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

export default E3;
