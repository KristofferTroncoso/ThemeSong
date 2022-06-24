import { analyser, dataArray } from '../..';
import { tsbarvisualizercanvas, isPlaying } from '../circles';
import { mostPopulatedColor } from '../../../Content';

let circles;
setTimeout(() => {
  circles = [
    {
      x: 160,
      y: 350,
      dirX: 1,
      dirY: -1,
      speedX: 0.4,
      speedY: 0.7,
      freq: 0,
      minByte: 200,
      minRadius: 1,
      growRate: 300,
      color: mostPopulatedColor.hex,
      lineWidth: 5
    },
    {
      x: 450,
      y: 310,
      dirX: -1,
      dirY: 1,
      speedX: 1,
      speedY: 0.5,
      freq: 1,
      minByte: 20,
      minRadius: 0.6,
      growRate: 500,
      color: 'hsla(130 , 90%, 50%, 1)',
      lineWidth: 5
    },
    {
      x: 230,
      y: 460,
      dirX: -1,
      dirY: -1,
      speedX: 1,
      speedY: 1.1,
      freq: 40,
      minByte: 0,
      minRadius: 0.38,
      growRate: 600,
      color: 'hsla(330, 70%, 75%, 1)',
      lineWidth: 4
    },
    {
      x: 310,
      y: 450,
      dirX: -1,
      dirY: 1,
      speedX: 1.6,
      speedY: 1.2,
      freq: 80,
      minByte: 0,
      minRadius: 0.37,
      growRate: 600,
      color: 'hsla(265, 80%, 70%, 1)',
      lineWidth: 4
    },
    {
      x: 160,
      y: 310,
      dirX: -1,
      dirY: 1,
      speedX: 1.3,
      speedY: 1.5,
      freq: 120,
      minByte: 10,
      minRadius: 0.36,
      growRate: 400,
      color: 'hsla(35, 100%, 60%, 1)',
      lineWidth: 4
    },
    {
      x: 400,
      y: 100,
      dirX: 1,
      dirY: -1,
      speedX: 2,
      speedY: 1,
      freq: 140,
      minByte: 10,
      minRadius: 0.35,
      growRate: 600,
      color: 'hsla(170, 100%, 40%, 1)',
      lineWidth: 6
    },
    {
      x: 150,
      y: 410,
      dirX: 1,
      dirY: -1,
      speedX: 1.5,
      speedY: 4,
      freq: 190,
      minByte: 0,
      minRadius: 0.32,
      growRate: 800,
      color: 'hsla(0, 0%, 100%, 1)',
      lineWidth: 3
    },
    {
      x: 400,
      y: 290,
      dirX: 1,
      dirY: 1,
      speedX: 1.7,
      speedY: 1.3,
      freq: 190,
      minByte: 0,
      minRadius: 0.32,
      growRate: 800,
      color: 'hsla(0, 100%, 50%, 1)',
      lineWidth: 3
    },
    {
      x: 200,
      y: 310,
      dirX: 1,
      dirY: 1,
      speedX: 0.9,
      speedY: 0.6,
      freq: 200,
      minByte: 0,
      minRadius: 0.3,
      growRate: 800,
      color: 'hsla(230, 100%, 50%, 1)',
      lineWidth: 3
    }
  ]
}, 1000)


let shorterCanvasSide;
let circumference = 2 * Math.PI;

function updateValues({x, y, dirX, dirY, radius, speedX, speedY, freq, minByte, minRadius, growRate, color}) {
  if (y + radius > tsbarvisualizercanvas.height) {
    dirY = Math.abs(dirY) * -1;
  } else if (y - radius < 0) {
    dirY = Math.abs(dirY);
  }
  if (x + radius > tsbarvisualizercanvas.width) {
    dirX = Math.abs(dirX) * -1;
  } else if (x - radius < 0) {
    dirX = Math.abs(dirX);
  }
  x += dirX * speedX * (shorterCanvasSide / 500);
  y += dirY * speedY * (shorterCanvasSide / 500);

  if (x + radius - 30 > tsbarvisualizercanvas.width) {
    x = tsbarvisualizercanvas.width * Math.random();
  } else if (x - radius + 30 < 0) {
    x = radius + 30;
  }
  if (y + radius - 30 > tsbarvisualizercanvas.height) {
    y = tsbarvisualizercanvas.height * Math.random();
  } else if (y - radius + 30 < 0) {
    y = radius + 30;
  }

  radius = ((Math.max(dataArray[freq] - minByte, 0) / growRate ) + minRadius) * (shorterCanvasSide/5);

  color = mostPopulatedColor.hex;
  return {x, y, dirX, dirY, radius, speedX, speedY, freq, minByte, minRadius, color};
}

function updateAndDraw(ctx) {
  //update values
  circles = circles.map(circle => {
    let newValues = updateValues(circle);
    return {...circle, ...newValues};
  });

  //draw values
  for (let circle of circles) {
    ctx.beginPath();
    ctx.lineWidth = circle.lineWidth;
    ctx.fillStyle = circle.color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, circumference);
    ctx.fill();
    ctx.stroke();
  };
}

export function accent() {
  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
  shorterCanvasSide = (ytmusicplayer.clientHeight < ytmusicplayer.clientWidth) ? ytmusicplayer.clientHeight : ytmusicplayer.clientWidth;
  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);
  ctx.strokeStyle = '#000';

  updateAndDraw(ctx);

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(accent);
    }, 17);
  }
}