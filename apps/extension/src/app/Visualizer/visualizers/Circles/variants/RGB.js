import { useEffect } from "react";
import useAnimation from "../../../components/useAnimation";

let a = 160;
let b = 350;
let dirA = 1;
let dirB = 1;
let speedA = 0.7;
let speedB = 0.2;

let c = 450;
let d = 310;
let dirC = -1;
let dirD = 1;
let speedC = 0.7;
let speedD = 1.2;

let g = 310;
let h = 450;
let dirG = -1;
let dirH = 1;
let speedG = 1.4;
let speedH = 1.2;

function RGB({ analyser, dataArray, canvasRef }) {
  const circumference = 2 * Math.PI;
  let shorterCanvasSide;

  let canvas;
  let ctx;

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000";
  }, []);

  useAnimation(() => {
    function updateValues(x, y, dirX, dirY, radius, speedX, speedY) {
      if (y + radius > canvas.height) {
        dirY = Math.abs(dirY) * -1;
      } else if (y - radius < 0) {
        dirY = Math.abs(dirY);
      }
      if (x + radius > canvas.width) {
        dirX = Math.abs(dirX) * -1;
      } else if (x - radius < 0) {
        dirX = Math.abs(dirX);
      }
      x += dirX * speedX * (shorterCanvasSide / 500);
      y += dirY * speedY * (shorterCanvasSide / 500);

      if (x + radius - 10 > canvas.width) {
        x = canvas.width - radius - 10;
      } else if (x - radius + 10 < 0) {
        x = radius + 10;
      }
      if (y + radius - 10 > canvas.height) {
        y = canvas.height - radius - 10;
      } else if (y - radius + 10 < 0) {
        y = radius + 10;
      }

      return [x, y, dirX, dirY];
    }

    analyser.fftSize = 512;
    shorterCanvasSide = canvas.height < canvas.width ? canvas.height : canvas.width;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let radius;

    ctx.beginPath();
    ctx.lineWidth = 1;
    radius = (Math.max(dataArray[0] - 190, 0.5) / 300 + 1) * (shorterCanvasSide / 5);
    ctx.fillStyle = `hsla(${345 + Math.max(dataArray[0] - 190, 0) * 0.4 + 1}, 100%, 50%, 0.9)`;
    [a, b, dirA, dirB] = updateValues(a, b, dirA, dirB, radius, speedA, speedB);
    ctx.arc(a, b, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    radius = (Math.max(dataArray[20] - 20, 0) / 700 + 0.5) * (shorterCanvasSide / 5);
    ctx.fillStyle = `hsla(${210 + dataArray[40] * 0.4}, 100%, 50%, 0.9)`;
    [c, d, dirC, dirD] = updateValues(c, d, dirC, dirD, radius, speedC, speedD);
    ctx.arc(c, d, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    radius = (Math.max(dataArray[160] - 10, 0) / 600 + 0.33) * (shorterCanvasSide / 5);
    ctx.fillStyle = `hsla(${105 + dataArray[160] * 0.5}, 100%, 40%, 0.9)`;
    [g, h, dirG, dirH] = updateValues(g, h, dirG, dirH, radius, speedG, speedH);
    ctx.arc(g, h, radius, 0, circumference);
    ctx.fill();
    ctx.stroke();
  });

  return null;
}

export default RGB;
