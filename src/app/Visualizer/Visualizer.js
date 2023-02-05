import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Wavy from "./visualizers/wavy/Wavy";
import Bars from "./visualizers/bars/Bars";
import Circles from "./visualizers/circles/Circles";
import { useStore } from "../store";
import PlayPauseChangeObserver from "../Player/PlayPauseChangeObserver";
import VolumeChangeObserver from "../Player/VolumeChangeObserver";
import PausedWarning from "./components/PausedWarning";

let source;
let audioCtx;
let analyser;
let bufferLength;
let dataArray;

function Visualizer() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);
  const activeVisualizer = useStore(
    (state) => state.visualizer.activeVisualizer
  );
  const songName = useStore((state) => state.song.songName);
  const toggleIsVisualizerOn = useStore(
    (state) => state.visualizer.toggleIsVisualizerOn
  );
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

  useEffect(() => {
    /* visualizer sometimes disconnects when switching from song to specific songs/videos.
    This reconnects the visualizer when the song changes */
    if (isVisualizerOn) {
      connectAudio();
    }
  }, [songName]);

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

    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(dataArray);

    connectSource();

    analyser.connect(audioCtx.destination);
    setIsConnected(true);
  }

  function connectSource() {
    console.log("connectsource()");

    if (document.querySelector("video")) {
      if (source === undefined) {
        try {
          source = audioCtx.createMediaElementSource(
            document.querySelector("video")
          );
          source.connect(analyser);
        } catch {
          console.log("error with connecting source");
        }
      } else {
        if (source.mediaElement.isConnected === false) {
          try {
            source = audioCtx.createMediaElementSource(
              document.querySelector("video")
            );
            source.connect(analyser);
          } catch {
            console.log("error with connecting source");
          }
        }
      }
    }
  }

  if (isVisualizerOn && isConnected) {
    return (
      <div>
        {audioCtx && source && analyser ? (
          <div
            id="ThemeSong-Visualizer"
            css={css`
              border-radius: inherit;
              height: 100%;
              width: 100%;
            `}
          >
            <PlayPauseChangeObserver />
            <VolumeChangeObserver />
            <PausedWarning />
            {
              {
                "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d": (
                  <Wavy
                    analyser={analyser}
                    dataArray={dataArray}
                    bufferLength={bufferLength}
                  />
                ),
                "51dc50c8-eb06-4086-ad9c-a89758f63db6": (
                  <Bars
                    analyser={analyser}
                    dataArray={dataArray}
                    bufferLength={bufferLength}
                  />
                ),
                "685d0ec7-5c52-4e48-a43d-11184a39f3da": (
                  <Circles
                    analyser={analyser}
                    dataArray={dataArray}
                    bufferLength={bufferLength}
                  />
                ),
              }[activeVisualizer]
            }
          </div>
        ) : (
          <div
            id="ThemeSong-Visualizer-Error"
            css={css`
              border-radius: inherit;
              height: 60%;
              width: 80%;
              position: absolute;
              bottom: 5%;
              left: 10%;
              background-color: rgba(0, 0, 0, 0.8);
              z-index: 1001;
              padding: 10px;
            `}
          >
            <h1>Sorry, something has gone wrong with the Visualizer</h1>
            <div>
              {!audioCtx && <h2>audioCtx is undefined</h2>}
              {!source && <h2>source is undefined</h2>}
              {!analyser && <h2>analyser is undefined</h2>}
              <h2>link:{document.querySelector(".ytp-title-link").href}-end</h2>
              <h2>
                bloblink:{document.querySelector("video").getAttribute("src")}
                -end
              </h2>
            </div>
            <div
              css={css`
                margin-top: 20px;
              `}
            >
              <h1>Please reload and try again or report to dev</h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Visualizer;
