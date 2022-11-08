/** @jsx jsx */
import { useEffect, useRef }  from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../../store';

function RGB({analyser, dataArray, bufferLength}) {
  const barsPrefs = useStore(state => state.visualizer.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")));
  const playPauseState = useStore(state => state.player.playPauseState);

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
  }, [barsPrefs])

  useEffect(() => {
    const drawBars = () => {  
      let context = ctx.current;
      let canvas = canvasRef.current || {width: 2400, height: 520};
    
      analyser.getByteFrequencyData(dataArray);
    
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      let barHeight;
      let x = 0;
    
      for(let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 2;
    
        context.fillStyle = `hsla(${barHeight}, 100%, 70%, 0.95)`; //rgb: bar height is correlated to hue

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
  }, [playPauseState, analyser, bufferLength, dataArray, barsPrefs])

  return (
    <canvas
      id="ThemeSong-Visualizer-Bars-Variant-RGB"
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

export default RGB;




