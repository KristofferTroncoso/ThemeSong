/** @jsx jsx */
import { useEffect, useRef }  from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../../store';

function Palette({analyser, dataArray, bufferLength}) {
  const barsPrefs = useStore(state => state.visualizer.visualizerPrefs.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")));
  const playPauseState = useStore(state => state.player.playPauseState);
  const palette = useStore(state => state.palette.palette);

  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();
  
  useEffect(() => {
    return function cleanUp() {
      console.log('cleaning up');
      clearInterval(intervalId.current);
    }
  }, [])

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.strokeStyle = "#000";
    ctx.current.lineWidth = barsPrefs.borderWidth;
    analyser.fftSize = 2048;
  }, [barsPrefs])

  useEffect(() => {
    const drawBars = () => {  
      let context = ctx.current;
      let canvas = canvasRef.current || {width: 2400, height: 520};
    
      analyser.getByteFrequencyData(dataArray);
    
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      let barHeight;
      let x = 0;
      let paletteArray = Object.values(palette);
      let arrLoopNum = 0;
      for(let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 2;
    
        // ctx.fillStyle = paletteArray[yoyo].hex;
    
        context.fillStyle = `hsla(
          ${paletteArray[arrLoopNum].hsl[0] * 360}, 
          ${paletteArray[arrLoopNum].hsl[1] * 100}%, 
          ${
            // pickedSwatch.hsl[2] * 100 + 10
            // (paletteArray[arrLoopNum].hsl[2] - ((paletteArray[arrLoopNum].hsl[2] - 0.7)/2)) * 100 //kinda normalizes the light
            barHeight/1000 * 100 + 30 //basically has like a minimum brightness
          }%, 
          0.95
        )`;
      
        arrLoopNum = (arrLoopNum + 1) % paletteArray.length;

        context.fillRect(x, canvas.height - barHeight + 6, barsPrefs.barWidth, barHeight);
        if (barsPrefs.borderWidth !== 0) {
          context.strokeRect(x, canvas.height - barHeight + 6, barsPrefs.barWidth, barHeight);
        }
        context.stroke();
        x += barsPrefs.barWidth + barsPrefs.gap;
      }
    };

    if (playPauseState === "Pause") {
      clearInterval(intervalId.current);
    } else if (playPauseState === "Play") {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawBars), 17)
    }
  }, [playPauseState, analyser, bufferLength, dataArray, barsPrefs, palette])

  return (
    <canvas
      id="ThemeSong-Visualizer-Bars-Variant-Palette"
      ref={canvasRef}
      height='520'
      width='2400'
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
  )
}

export default Palette;