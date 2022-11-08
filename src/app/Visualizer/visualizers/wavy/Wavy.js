/** @jsx jsx */
import { useRef, useEffect }  from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../store';

function Wavy({analyser, dataArray, bufferLength}) {
  const wavyPrefs = useStore(state => state.visualizer.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:0")));
  const playPauseState = useStore(state => state.player.playPauseState);
  const dominantSwatch = useStore(state => state.palette.dominant);

  const canvasRef = useRef();
  const intervalId = useRef();
  const ctx = useRef();

  useEffect(() => {
    console.log('3')
    return function cleanUp() {
      console.log('Wavy: Cleaning up');
      clearInterval(intervalId.current);
    }
  }, [])

  useEffect(() => {
    console.log('1')
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.strokeStyle = '#fff';
    ctx.current.lineWidth = wavyPrefs.lineWidth;
    ctx.current.shadowBlur = 4;
    ctx.current.shadowOffsetY = wavyPrefs.lineWidth;
    ctx.current.shadowColor = `hsl(
      ${(dominantSwatch.hsl[0] * 360).toFixed()}, 
      ${dominantSwatch.hsl[1] * 100 * 2}%, 
      70%
    )`;
    analyser.fftSize = 2048;
  }, [analyser, dominantSwatch, wavyPrefs]);

  useEffect(() => {
    console.log('5')

    const drawWavy = () => {
      let context = ctx.current;
      let canvas = canvasRef.current || {width: 1920, height: 512};
  
      analyser.getByteTimeDomainData(dataArray);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
  
      let sliceWidth = canvas.width / bufferLength;
      let x = 0;
  
      for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128;
        let y = v * canvas.height / 2;
        
        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
        x += sliceWidth;
      }
  
      ctx.current.stroke();
    };

    if (playPauseState === "Pause") {
      clearInterval(intervalId.current);
    } else if (playPauseState === "Play") {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(drawWavy), 17)
    }
  }, [playPauseState, analyser, bufferLength, dataArray])

  return (
    <div
      id="ThemeSong-Visualizer-Wavy-Container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 75%,  rgba(0,0,0,0.3) 100%);
      `}
    >
      <canvas
        id="ThemeSong-Visualizer-Wavy-Canvas"
        ref={canvasRef}
        height='512'
        width='1920'
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
  )
}

export default Wavy;




