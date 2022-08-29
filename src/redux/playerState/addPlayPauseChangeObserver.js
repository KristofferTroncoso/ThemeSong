import { store } from '../store';
import { changePlayPauseState } from './playerStateSlice';

let playPauseChangeObserver;
let playPauseState = "Pause";

export function addPlayPauseChangeObserver() {
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
      removePlayPauseChangeObserver();
    }
  }
}

export function removePlayPauseChangeObserver() {
  console.log('removing playPauseChangeObserver')
  playPauseChangeObserver.disconnect();
}