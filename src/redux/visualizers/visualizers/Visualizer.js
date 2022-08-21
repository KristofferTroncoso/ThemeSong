/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import Wavy from './wavy/Wavy';
import Bars from './bars/Bars';
import Circles from './circles/Circles';

let source;
let audioCtx;
let analyser;
let bufferLength;
let dataArray;
let videoElementNode;

function Visualizer() {
  const isVisualizerOn = useSelector(state => state.visualizers.isVisualizerOn);
  const activeVisualizer = useSelector(state => state.visualizers.activeVisualizer);

  React.useEffect(() => {
    console.log('Visualizer: useEffect');
    connectAudio();
    console.log(source)
  }, [isVisualizerOn])

  function connectAudio() {
    console.log('connectAudio()')
    if (audioCtx === undefined) {
      console.log('audioCtx is undefined. setting up new AudioContext')
      audioCtx = new AudioContext();
      analyser = audioCtx.createAnalyser();
    } 
    analyser.fftSize = 2048;
    analyser.maxDecibels = -18;
    analyser.smoothingTimeConstant = 0.8;
    
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(dataArray);
    
    connectSource();

    analyser.connect(audioCtx.destination);  
  }

  function connectSource() {
    console.log('connectsource()')
    videoElementNode = document.querySelector('video');

    try {
      source = audioCtx.createMediaElementSource(videoElementNode);
      source.connect(analyser);
    } catch {
      console.log('error with connecting source');
    }
  }

  const returnActiveVisualizer = () => {
    switch (activeVisualizer) {
      case "visualizerId:0":
        return <Wavy analyser={analyser} dataArray={dataArray} bufferLength={bufferLength}  />
      case "visualizerId:1":
        return <Bars analyser={analyser} dataArray={dataArray} bufferLength={bufferLength}  />
      case "visualizerId:2":
        return <Circles analyser={analyser} dataArray={dataArray} bufferLength={bufferLength}  />
      default:
        return <h1>Unknown Visualizer</h1>
    }
  }

  return (
    isVisualizerOn && (
      <div
        css={css`
          border-radius: inherit;
          height: 100%;
          width: 100%;
        `}
      >
        {returnActiveVisualizer()}
      </div>
    )
  )
}

export default Visualizer;