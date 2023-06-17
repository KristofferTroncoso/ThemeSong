import { useRef } from "react";
import { css } from "@emotion/react";
import Canvas from "../../../components/Canvas";
import useAnimation from "../../../components/useAnimation";
import useDraw from "../../../components/useDraw";

function RGB({ analyser }) {
  const barsPrefs = { barWidth: 30, gap: 2 };
  const canvasRef = useRef();
  const canvasRef2 = useRef();
  const ctx = useRef();

  const bufferLength = 1024;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  useDraw(() => {
    var canvas = canvasRef2.current;
    var context = canvas.getContext("2d");

    // Box width
    var bw = canvas.width;
    // Box height
    var bh = canvas.height;
    // Padding
    var p = 0;

    function drawBoard() {
      for (var x = 0; x <= bw; x += barsPrefs.barWidth + barsPrefs.gap) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
      }

      for (var x = 0; x <= bh; x += 12) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
      }
      context.lineWidth = 3;
      context.strokeStyle = "black";
      context.stroke();
    }

    drawBoard();
  });

  useAnimation(() => {
    let context = ctx.current;
    let canvas = canvasRef.current;

    ctx.current = canvasRef.current.getContext("2d");

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
        background-color: rgba(0, 0, 0, 0.6);
      `}
    >
      <Canvas ref={canvasRef} height="1100" />
      <Canvas ref={canvasRef2} height="1100" />
    </div>
  );
}

export default RGB;
