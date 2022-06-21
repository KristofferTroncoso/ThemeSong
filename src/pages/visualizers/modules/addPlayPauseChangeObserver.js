import { activeVisualizer, connectSource } from '../';
import { wavy } from '../wavy/wavy';
import { bars } from '../bars/bars';
import { circles } from '../circles/circles';
import { audioCtx } from '../';

let playPauseChangeObserver;
let playState = "Pause";


export function addPlayPauseChangeObserver() {
  // If we pause the song, we need to stop the calculation loop.
  /* We're also hitching the connectSource() func to this observer.
  It's to reconnect the source because it sometimes disconnects when switching
  from song to song. (e.g. switching to Madeon's song) */

  let playPauseButtonNode = document.getElementById("play-pause-button");

  playPauseChangeObserver = new MutationObserver(handlePlayPauseChange);

  playPauseChangeObserver.observe(playPauseButtonNode, {
    attributeFilter: ["title"],
    attributeOldValue: true
  });
  
  function handlePlayPauseChange(mutationRecord) {
    console.log('handlePlayPauseChangeObserver')
    playState = mutationRecord[0].oldValue;
    console.log(playState);

    if (playState === "Pause") {
      console.log('playstate === "pause"')
      wavy.stopAnimate();
      bars.stopAnimate();
      circles.stopAnimate();
    } else {
      console.log('playState something else')
      connectSource();
      if (activeVisualizer === "visualizerId:0") {
        wavy.animate();
      } else if (activeVisualizer === "visualizerId:1") {
        bars.animate();
      } else if (activeVisualizer === "visualizerId:2") {
        circles.animate();
      } else {
        wavy.stopAnimate();
        bars.stopAnimate();
        circles.stopAnimate();
      }
    }

    try {
      chrome.runtime.sendMessage('r u still there?');
    } catch {
      console.log('stop visualizers');
      removePlayPauseChangeObserver();
      bars.cleanUp();
      audioCtx.close()
      .then(res => {
        console.log('done');
        console.log(res);
      });
      // wavy.cleanUp();
    }

  }
}

export function removePlayPauseChangeObserver() {
  console.log('removing playPauseChangeObserver')
  playPauseChangeObserver.disconnect();
}