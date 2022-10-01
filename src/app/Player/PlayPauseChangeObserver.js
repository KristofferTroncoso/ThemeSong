import React from 'react';
import { useStore } from '../store';

let playPauseChangeObserver;
let playPauseState = "Pause";

function PlayPauseChangeObserver() {
  const changePlayPauseState = useStore(state => state.player.changePlayPauseState);

  React.useEffect(() => {
    let playPauseButtonNode = document.getElementById("play-pause-button");

    playPauseChangeObserver = new MutationObserver(handlePlayPauseChange);
  
    playPauseChangeObserver.observe(playPauseButtonNode, {
      attributeFilter: ["title"],
      attributeOldValue: true
    });
    
    function handlePlayPauseChange(mutationRecord) {
      console.log('handlePlayPauseChangeObserver')
      playPauseState = mutationRecord[0].oldValue;
      console.log(playPauseState);
      changePlayPauseState(playPauseState);
      try {
        chrome.runtime.sendMessage('r u still there?');
      } catch {
        playPauseChangeObserver.disconnect();
      }
    }

    return function() {
      console.log('removing playPauseChangeObserver')
      playPauseChangeObserver.disconnect();
    }
  }, [])

  return (
    <div id="PlayPauseChangeObserver"></div>
  )
}

export default PlayPauseChangeObserver;
