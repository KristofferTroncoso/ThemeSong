/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import Wavy from './wavy/Wavy';
import Bars from './bars/Bars';
import Circles from './circles/Circles';
import { toggleIsVisualizerOn } from '../visualizersSlice';

let source;
let audioCtx;
let analyser;
let bufferLength;
let dataArray;

function Visualizer() {
  const isVisualizerOn = useSelector(state => state.visualizers.isVisualizerOn);
  const activeVisualizer = useSelector(state => state.visualizers.activeVisualizer);
  const songName = useSelector(state => state.song.songName);

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('Visualizer: useEffect 2');
    if (isVisualizerOn) {
      connectAudio();

      if (source === undefined) {
        /* so this is at least a trigger if the visualizer is disconnected. 
          i can just prompt them to refresh and remove the visualizer button and container. 
        */
        console.log('audioCtx', audioCtx)
        if (window.confirm(
          `ThemeSong extension was recently updated. 
Page reload required to reconnect visualizer. Reload now?`
        )) {
          window.location.reload();
        }
        dispatch(toggleIsVisualizerOn())
      }
    }
  }, [isVisualizerOn])

  React.useEffect(() => {
    /* visualizer sometimes disconnects when switching from song to specific songs/videos.
    This reconnects the visualizer when the song changes */
    connectAudio();
  }, [songName])

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

    if (document.querySelector('video')) {
      if (source === undefined) {
        try {
          source = audioCtx.createMediaElementSource(document.querySelector('video'));
          source.connect(analyser);
        } catch {
          console.log('error with connecting source');
        }
      } else {
        if (source.mediaElement.isConnected === false) {
          try {
            source = audioCtx.createMediaElementSource(document.querySelector('video'));
            source.connect(analyser);
          } catch {
            console.log('error with connecting source');
          }
        }
      }
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
        return (
          <button 
            onClick={e => {
              if (window.confirm(
                `ThemeSong extension was recently updated. 
      Page reload required to reconnect visualizer. Reload now?`
              )) {
                window.location.reload();
              }
            }}
          >
            Reload
          </button>
        )
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