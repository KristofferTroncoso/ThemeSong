import { addSongTitles } from "./addSongTitles";

export let songName;
export let songDetails;
let songDetailsObserver;

export function addSongDetailsObserver() {
  let songTitleNode = document.querySelector("ytmusic-player-bar .title");

  songDetailsObserver = new MutationObserver(handleSongChange);

  songDetailsObserver.observe(songTitleNode, {
    attributeFilter: ["title"],
    attributeOldValue: true
  });
  
  function handleSongChange(mutationRecord) {
    console.log('song change observer');
    songName = document.querySelector("ytmusic-player-bar .title").title;
    console.log(songName)
    if (document.querySelector("ytmusic-player-bar .byline").innerText !== "") {
      songDetails = document.querySelector("ytmusic-player-bar .byline").title;
    } else {
      songDetails = document.querySelector("ytmusic-player-bar .byline").innerText;
    }
    console.log(songDetails)
    addSongTitles();
  }
}

export function removeSongDetailsObserver() {
  songDetailsObserver.disconnect();
}