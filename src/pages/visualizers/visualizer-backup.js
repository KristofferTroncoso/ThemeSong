
// export function visualizer() {
//   const audioCtx = new AudioContext();
//   const analyser = audioCtx.createAnalyser();

//   analyser.fftSize = 2048;

//   let bufferLength = analyser.frequencyBinCount;
//   let dataArray = new Uint8Array(bufferLength);
//   analyser.getByteTimeDomainData(dataArray);

//   // Connect the source to be analysed
//   const videoElementNode = document.querySelector('video');
//   console.log('source is')
//   console.log(source);
//   // if (source === undefined) {
//     source = audioCtx.createMediaElementSource(videoElementNode);
//     source.connect(analyser);
//   // }
//   analyser.connect(audioCtx.destination);  
//   let tsvisualizercanvas = document.getElementById("ts-visualizer-canvas");

//   let ctx = tsvisualizercanvas.getContext("2d");
//   // draw an oscilloscope of the current audio source

//   let gradient = ctx.createLinearGradient(0, 0, 0, tsvisualizercanvas.height);
//   gradient.addColorStop(0, 'transparent');
//   gradient.addColorStop(.5, 'rgba(0,0,0,0.2)');
//   gradient.addColorStop(1, 'transparent');

//   function drawOscilloscope() {
//     console.log('hi')
//     analyser.getByteTimeDomainData(dataArray);

//     ctx.clearRect(0, 0, tsvisualizercanvas.width, tsvisualizercanvas.height);
//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, tsvisualizercanvas.width, tsvisualizercanvas.height);
    
//     ctx.lineWidth = 8;
//     ctx.strokeStyle = "white";

//     ctx.beginPath();

//     let sliceWidth = tsvisualizercanvas.width * 1.0 / bufferLength;
//     let x = 0;

//     for (let i = 0; i < bufferLength; i++) {
//       let v = dataArray[i] / 128;
//       let y = v * tsvisualizercanvas.height / 2;
      
//       if (i === 0) {
//         ctx.moveTo(x, y);
//       } else {
//         ctx.lineTo(x, y);
//       }

//       x += sliceWidth;
//     }

//     ctx.lineTo(tsvisualizercanvas.width, tsvisualizercanvas.height / 2);
//     ctx.stroke();
//   }

//   drawOscilloscopeInterval = setInterval(drawOscilloscope, 40);
// }
