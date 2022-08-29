import { store } from '../store';
import { changeSongDetails } from './songDetailsSlice';

let songDetailsObserver;

export function addSongDetailsFeature() {
  //initial
  store.dispatch(changeSongDetails());

  let songTitleNode = document.querySelector("ytmusic-player-bar .title");

  songDetailsObserver = new MutationObserver(handleSongChange);

  songDetailsObserver.observe(songTitleNode, {
    attributeFilter: ["title"],
    attributeOldValue: true
  });
  
  function handleSongChange(mutationRecord) {
    store.dispatch(changeSongDetails());
  }
}

export function removeSongDetailsObserver() {
  songDetailsObserver.disconnect();
}

export default addSongDetailsFeature;