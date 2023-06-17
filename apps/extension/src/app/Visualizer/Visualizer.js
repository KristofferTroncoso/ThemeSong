import { useState, useEffect } from "react";
import Wavy from "./visualizers/Wavy/Wavy";
import Bars from "./visualizers/Bars/Bars";
import Circles from "./visualizers/Circles/Circles";
import Experimental from "./visualizers/Experimental/Experimental";
import { useStore } from "/src/app/store";
import PlayPauseChangeObserver from "../Player/PlayPauseChangeObserver";
import VolumeChangeObserver from "../Player/VolumeChangeObserver";
import PausedWarning from "./components/PausedWarning";
import SpiderVerse from "./visualizers/SpiderVerse/SpiderVerse";

let source;
let audioCtx;
let analyser;

function Visualizer() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);
  const activeVisualizer = useStore((state) => state.visualizer.activeVisualizer);
  const toggleIsVisualizerOn = useStore((state) => state.visualizer.toggleIsVisualizerOn);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log("Visualizer: useEffect 2");
    console.log("audioCtx", audioCtx);
    if (isVisualizerOn) {
      connectAudio();

      if (source === undefined) {
        /* so this is at least a trigger if the visualizer is disconnected. 
          i can just prompt them to refresh and remove the visualizer button and container. 
        */
        console.log("audioCtx", audioCtx);
        if (
          window.confirm(
            `ThemeSong extension was recently updated. 
Page reload required to reconnect visualizer. Reload now?`
          )
        ) {
          window.location.reload();
        }
        toggleIsVisualizerOn();
      }
    }
  }, [isVisualizerOn]);

  function connectAudio() {
    console.log("connectAudio()");
    if (audioCtx === undefined) {
      console.log("audioCtx is undefined. setting up new AudioContext");
      audioCtx = new AudioContext();
      analyser = audioCtx.createAnalyser();
    }
    analyser.fftSize = 2048;
    analyser.maxDecibels = -18;
    analyser.smoothingTimeConstant = 0.8;

    connectSource();

    analyser.connect(audioCtx.destination);
    setIsConnected(true);
  }

  function connectSource() {
    console.log("connectsource()");

    if (document.querySelector("video")) {
      if (source === undefined) {
        try {
          source = audioCtx.createMediaElementSource(document.querySelector("video"));
          source.connect(analyser);
        } catch {
          console.log("error with connecting source");
        }
      } else {
        if (source.mediaElement.isConnected === false) {
          try {
            source = audioCtx.createMediaElementSource(document.querySelector("video"));
            source.connect(analyser);
          } catch {
            console.log("error with connecting source");
          }
        }
      }
    }
  }

  function returnVisualizer() {
    switch (activeVisualizer) {
      case "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d":
        return <Wavy analyser={analyser} />;
      case "51dc50c8-eb06-4086-ad9c-a89758f63db6":
        return <Bars analyser={analyser} />;
      case "685d0ec7-5c52-4e48-a43d-11184a39f3da":
        return <Circles analyser={analyser} />;
      case "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae":
        return <Experimental analyser={analyser} />;
      case "57e7f170-a53d-4207-87f0-67633df37959":
        return <SpiderVerse analyser={analyser} />;
      default:
        return <Wavy analyser={analyser} />;
    }
  }

  if (isVisualizerOn && isConnected) {
    return (
      <div id="ThemeSong-Visualizer">
        <PlayPauseChangeObserver />
        <VolumeChangeObserver />
        <PausedWarning />
        {returnVisualizer()}
      </div>
    );
  }
}

export default Visualizer;
