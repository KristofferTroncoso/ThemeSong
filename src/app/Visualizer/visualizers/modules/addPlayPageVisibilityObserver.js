import { activeVisualizer } from '../';
import { wavy } from '../wavy/wavy';
import { bars } from '../bars/bars';


let playPageVisibilityObserver;
let playPageUIstate = "PLAYER_PAGE_OPEN";

export function addPlayPageVisibilityObserver() {
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

    try {
      chrome.runtime.sendMessage('r u still there?');
    } catch {
      console.log('remove playpage visibility observer');
      removePlayPageVisibilityObserver();
    }
  }
}


export function removePlayPageVisibilityObserver() {
  playPageVisibilityObserver.disconnect();
}