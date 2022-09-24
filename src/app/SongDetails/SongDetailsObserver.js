import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSongDetails } from './songDetailsSlice';

function SongDetailsObserver() {
  const dispatch = useDispatch();
  React.useEffect(() => { 
    let songDetailsObserver;

    dispatch(changeSongDetails());

    let songTitleNode = document.querySelector("ytmusic-player-bar .title");
  
    songDetailsObserver = new MutationObserver(handleSongChange);
  
    songDetailsObserver.observe(songTitleNode, {
      attributeFilter: ["title"],
      attributeOldValue: true
    });
    
    function handleSongChange(mutationRecord) {
      dispatch(changeSongDetails());
    }

    return function() {
      songDetailsObserver.disconnect();
    }
  }, [])

  return (
    <div id="SongDetailsObserver"></div>
  )
}

export default SongDetailsObserver;
