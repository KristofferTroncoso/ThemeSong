import { analyser, dataArray, bufferLength } from '../..';
import { tsbarvisualizercanvas, isPlaying, barWidth, borderWidth, gap } from '../circles';

/*
export function white() {
  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  tsbarvisualizercanvas.height = ytmusicplayer.clientHeight;
  tsbarvisualizercanvas.width = ytmusicplayer.clientWidth;
  analyser.fftSize = 512;
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);

  ctx.fillStyle = "#fff";

  ctx.arc(tsbarvisualizercanvas.width * 0.2, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[0] / 5), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.4, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[40] / 5), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.6, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[100] / 5), 0, 2 * Math.PI);
  ctx.arc(tsbarvisualizercanvas.width * 0.8, tsbarvisualizercanvas.height * 0.8, (tsbarvisualizercanvas.width / 30) + (dataArray[160] / 5), 0, 2 * Math.PI);

  ctx.fill();
  ctx.beginPath();
  ctx.stroke();

  if (isPlaying) {
    setTimeout(() => {
      requestAnimationFrame(white);
    }, 17);
  }
}
*/

let circleArr = [];

export function white() {

  let ctx = tsbarvisualizercanvas.getContext("2d");
  let ytmusicplayer = document.querySelector("ytmusic-player");
  
  // Constants
  const 
      DEFAULT_RADIUS  = 50,
      MAX_SPEED       = 2,
      CIRCLE_COUNT    = 1;
      Math.TAU = Math.PI * 2;
  
  // Functions // Repetetive Code
  
  Math.rand = (min, max) => Math.random() * (max - min) + min;
  
  // arrays

  
  function Circle(
      // radius must be first argument as its used to set random x, and y
      radius = Math.rand(DEFAULT_RADIUS/4, DEFAULT_RADIUS),
      
      x = Math.rand(radius, ctx.width - radius),
      y = Math.rand(radius, ctx.width - radius),
      dx = Math.rand(-MAX_SPEED, MAX_SPEED),
      dy = Math.rand(-MAX_SPEED, MAX_SPEED),
      colour = 'red'
    ){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.colour = colour;
    }
  
      
      
  // Define Circle functions as prototype outside the function Circle (runs faster)
  Circle.prototype = {
      draw() {
          ctx.strokeStyle = ctx.fillStyle = this.colour;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.TAU);
          ctx.stroke();
          ctx.fill();
      },
      update() {
          this.x += this.dx;
          this.y += this.dy;
          if (this.x < this.radius) {
              this.x = this.radius;
              this.dx = Math.abs(this.dx);
          }
          if (this.y < this.radius) {
              this.y = this.radius;
              this.dy = Math.abs(this.dy);
          }
          if (this.x > ctx.width - this.radius) {
              this.x = ctx.width - this.radius;
              this.dx = -Math.abs(this.dx);
          }
          if (this.y > ctx.height - this.radius) {
              this.y = ctx.height - this.radius;
              this.dy = -Math.abs(this.dy);
              
          }
          
      }
  };
  
  for (let i = 0; i < CIRCLE_COUNT; i++) {
      circleArr.push(new Circle()) 
  }

    if (ctx.width !== ytmusicplayer.clientWidth || ctx.height !== ytmusicplayer.clientHeight) {
        ctx.width = ytmusicplayer.clientWidth;
        ctx.height = ytmusicplayer.clientHeight;
    } else {
        ctx.clearRect(0, 0, tsbarvisualizercanvas.width, tsbarvisualizercanvas.height);
    }


    // use for of loop (saves having to mess with index)
    for (const circle of circleArr) {
      circle.update(); // seperate update and draw
      circle.draw()
    }

    if (isPlaying) {
      setTimeout(() => {
        requestAnimationFrame(white);
      }, 100);
    }
}
