import React from 'react';
import { useStore } from '../store';

function PlayPauseChangeObserver() {
  const changeIsSongPlaying = useStore(state => state.player.changeIsSongPlaying);

  React.useEffect(() => {
    let playPauseChangeObserver;
    let moviePlayerNode = document.getElementById("movie_player");

    playPauseChangeObserver = new MutationObserver(handlePlayPauseChange);

    playPauseChangeObserver.observe(moviePlayerNode, {
      attributeFilter: ["class"]
    });

    function handlePlayPauseChange(mutationRecord) {
      console.log('handlePlayPauseChangeObserver')
      let domtokenlist = mutationRecord[0].target.classList;
      if (!domtokenlist.contains('playing-mode')) {
        console.log('song PAUSED')
        changeIsSongPlaying(false);
      } else {
        console.log('song PLAYING');
        changeIsSongPlaying(true);
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
