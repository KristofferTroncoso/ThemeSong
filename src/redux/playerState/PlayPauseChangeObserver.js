import React from 'react';
import { store } from '../store';
import { changePlayPauseState } from './playerStateSlice';

let playPauseChangeObserver;
let playPauseState = "Pause";

function PlayPauseChangeObserver() {

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
      store.dispatch(changePlayPauseState(playPauseState));
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
    <div></div>
  )
}

export default PlayPauseChangeObserver;
