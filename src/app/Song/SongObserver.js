import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSong } from './songSlice';

function SongObserver() {
  const dispatch = useDispatch();
  React.useEffect(() => { 
    let songObserver;

    dispatch(changeSong());

    let songTitleNode = document.querySelector("ytmusic-player-bar .title");
  
    songObserver = new MutationObserver(handleSongChange);
  
    songObserver.observe(songTitleNode, {
      attributeFilter: ["title"],
      attributeOldValue: true
    });
    
    function handleSongChange(mutationRecord) {
      dispatch(changeSong());
    }

    return function() {
      songObserver.disconnect();
    }
  }, [])

  return (
    <div id="SongObserver"></div>
  )
}

export default SongObserver;
