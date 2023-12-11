import { useState, useEffect } from "react";
import Wavy from "./visualizers/Wavy/Wavy";
import Bars from "./visualizers/Bars/Bars";
import Circles from "./visualizers/Circles/Circles";
import Experimental from "./visualizers/Experimental/Experimental";
import { useStore } from "/src/app/store";
import VolumeChangeObserver from "../Player/VolumeChangeObserver";
import PausedWarning from "./components/PausedWarning";
import SpiderVerse from "./visualizers/SpiderVerse/SpiderVerse";
import DiscoBall from "./visualizers/DiscoBall/DiscoBall";
import Snowfall from "./visualizers/Snowfall/Snowfall";
import RetroBars from "./visualizers/RetroBars/RetroBars";

let source;
let audioCtx;
let analyser;

function Visualizer() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);
  const activeVisualizer = useStore((state) => state.visualizer.prefs.activeVisualizer);
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
    analyser.smoothingTimeConstant = 0.9;

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

  const visualizers = {
    "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d": <Wavy analyser={analyser} />,
    "51dc50c8-eb06-4086-ad9c-a89758f63db6": <Bars analyser={analyser} />,
    "685d0ec7-5c52-4e48-a43d-11184a39f3da": <Circles analyser={analyser} />,
    "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae": <Experimental analyser={analyser} />,
    "57e7f170-a53d-4207-87f0-67633df37959": <SpiderVerse analyser={analyser} />,
    "2f34a5b3-6d29-42c8-bac0-a7356ee88151": <DiscoBall analyser={analyser} />,
    "86a81510-3e5d-4d1e-9318-3ea0750393a3": <Snowfall analyser={analyser} />,
    "f8cfcb9f-6639-4702-aa44-2261ba7a543b": <RetroBars analyser={analyser} />,
  };

  function returnVisualizer() {
    if (!visualizers.hasOwnProperty(activeVisualizer)) {
      return <Wavy analyser={analyser} />;
    } else {
      return visualizers[activeVisualizer];
    }
  }

  if (isVisualizerOn && isConnected) {
    return (
      <div id="ThemeSong-Visualizer">
        <VolumeChangeObserver />
        <PausedWarning />
        {returnVisualizer()}
      </div>
    );
  }
}

export default Visualizer;
