import { wavy } from './wavy/wavy';
import { bars } from './bars/bars';

let source;
let audioCtx;
export let analyser;
export let bufferLength;
export let dataArray;
let activeVisualizer;
export let visualizers;
let isVisualizerOn = false;
let videoElementNode;

let playPauseChangeObserver;
let playState = "Pause";

let playPageVisibilityObserver;
let playPageUIstate = "PLAYER_PAGE_OPEN";

function addPlayPauseChangeObserver() {
  let playPauseButtonNode = document.getElementById("play-pause-button");

  playPauseChangeObserver = new MutationObserver(handlePlayPauseChange);

  playPauseChangeObserver.observe(playPauseButtonNode, {
    attributeFilter: ["title"],
    attributeOldValue: true
  });
  
  function handlePlayPauseChange(mutationRecord) {
    playState = mutationRecord[0].oldValue;
    console.log(playState);
 
    if (playState === "Pause") {
      wavy.stopAnimate();
      bars.stopAnimate();
    } else {
      connectSource();
      if (activeVisualizer === "visualizerId:0") {
        wavy.animate();
      } else {
        bars.animate();
      }
    }
  }
}

function removePlayPauseChangeObserver() {
  playPauseChangeObserver.disconnect();
}


function addPlayPageVisibilityObserver() {
  // this is necessary because requestAnimationFrame() doesn't account for play page visibility in regards to ytm.
  // as in if the play page isnt showing, the cpu and gpu is still running.
  // let ytmusicplayernode = document.querySelector("ytmusic-player");
  let ytmusicplayernode = document.querySelector("ytmusic-player");

  playPageVisibilityObserver = new MutationObserver(handlePlayPageVisibilityChange);

  playPageVisibilityObserver.observe(ytmusicplayernode, {
      attributeFilter: ["player-ui-state_"],
      attributeOldValue: true
    },
  );
  
  function handlePlayPageVisibilityChange(mutationRecord) {
    playPageUIstate = mutationRecord[0].target.attributes["4"].value;

    // PLAYER_PAGE_OPEN
    // MINIPLAYER
    // FULLSCREEN
    // PLAYER_BAR_ONLY

    if (playPageUIstate === "PLAYER_BAR_ONLY") {
      console.log('stopping');
      if (activeVisualizer === "visualizerId:0") {
        wavy.stopAnimate();
      } else {
        bars.stopAnimate();
      }
    }

    if (mutationRecord[0].oldValue === "PLAYER_BAR_ONLY") {
      console.log('starting');
      if (activeVisualizer === "visualizerId:0") {
        wavy.animate();
      } else {
        bars.animate();
      }
    }
  }
}


function removePlayPageVisibilityObserver() {
  playPageVisibilityObserver.disconnect();
}

chrome.storage.sync.get(["activeVisualizer", "visualizers"], (res) => {
  console.log(res);
  activeVisualizer = res.activeVisualizer;
  visualizers = res.visualizers;
});

// chrome.storage.onChanged.addListener((changes, namespace) => {
//   for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
//     console.log(
//       `Storage key "${key}" in namespace "${namespace}" changed.`,
//       `Old value was "${oldValue}", new value is "${newValue}".`
//     );
//   }
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`content-script: message received`);
  console.log(message);
  let messageKey = Object.keys(message)[0];
  console.log(messageKey)
  switch (messageKey) {
    case "activeVisualizer":
      console.log('case activeVisualizer');
      activeVisualizer = message[messageKey];
      switchActiveVisualizer(activeVisualizer);
      break;

    case "visualizers":
      console.log('received visualizers');
      console.log(message[messageKey]);
      visualizers = message[messageKey];
      bars.stopAnimate();
      bars.cleanUp();
      setTimeout(() => {
        bars.setUp();
        bars.animate();
      }, 100);
      sendResponse('received visualizers');
      break;
      
    default:
      console.log('default visualizer message')
  }
});

function switchActiveVisualizer(activeVisualizer) {
  console.log(activeVisualizer);
  if (isVisualizerOn) {
    if (activeVisualizer === "visualizerId:0") {
      bars.cleanUp();
      bars.stopAnimate();
      wavy.setUp();
      wavy.animate();
    } else if (activeVisualizer === "visualizerId:1") {
      wavy.cleanUp();
      wavy.stopAnimate();
      bars.setUp();
      bars.animate();
    } else {
      wavy.cleanUp();
      wavy.stopAnimate();
      bars.cleanUp();
      bars.stopAnimate();
    }
  }
  connectAudio();
}

export function addVisualizerButton() {
  let topRowButtons = document.querySelector('.top-row-buttons');
  let button = document.createElement('span');
  button.id = "ts-visualizer-toggle";
  button.innerText = "🥽 OFF";
  button.style.border = "0";
  button.style.height = "30px";
  button.style.width = "60px";
  button.style.backgroundColor = "transparent";
  button.style.fontSize = "17px";
  button.style.padding = "9px 2px";
  button.style.cursor = "pointer";
  button.title = "Turn ON Visualizer";
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    handleVisualizerButtonClick();
  });


  //when script is executed, it adds a new updated button (in case there's updated logic)
  if (document.getElementById("ts-visualizer-toggle") === null) {
    topRowButtons.prepend(button);
  } else {
    document.getElementById("ts-visualizer-toggle").remove();
    topRowButtons.prepend(button);
    document.getElementById("ts-visualizer-toggle2").remove();
  }
}

function handleVisualizerButtonClick() {
  console.log(activeVisualizer)
  if (!isVisualizerOn) {
    isVisualizerOn = true;
    document.getElementById("ts-visualizer-toggle").innerText = "🥽 ON";
    document.getElementById("ts-visualizer-toggle").title = "Turn OFF Visualizer";
    addPlayPauseChangeObserver();
    addPlayPageVisibilityObserver();
    if (activeVisualizer === "visualizerId:0") {
      wavy.setUp();
    } else {
      bars.setUp();
    }
    connectAudio();
    console.log(analyser);
    console.log(dataArray);
    console.log(bufferLength);
    if (activeVisualizer === "visualizerId:0") {
      wavy.animate();
    } else {
      bars.animate();
    }
    console.log(audioCtx);
    console.log(analyser);
  } else {
    isVisualizerOn = false;
    document.getElementById("ts-visualizer-toggle").innerText = "🥽 OFF";
    document.getElementById("ts-visualizer-toggle").title = "Turn ON Visualizer";
    removePlayPauseChangeObserver();
    removePlayPageVisibilityObserver();
    if (activeVisualizer === "visualizerId:0") {
      wavy.stopAnimate();
      wavy.cleanUp();
    } else {
      bars.stopAnimate();
      bars.cleanUp();
    }
    console.log(audioCtx);
    console.log(analyser);
  }
}


function connectAudio() {
  if (audioCtx === undefined) {
    audioCtx = new AudioContext();
    console.log(audioCtx);
    analyser = audioCtx.createAnalyser();
  } 
  if (activeVisualizer === "visualizerId:0") {
    analyser.fftSize = 2048;
  } else {
    analyser.fftSize = 128;
  }
  analyser.maxDecibels = -18;
  analyser.smoothingTimeConstant = 0.8;
  
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteTimeDomainData(dataArray);
  
  connectSource();

  analyser.connect(audioCtx.destination);  
}


function connectSource() {
  videoElementNode = document.querySelector('video');

  try {
    source = audioCtx.createMediaElementSource(videoElementNode);
    source.connect(analyser);
  } catch {
    console.log('hi')
  }
}
