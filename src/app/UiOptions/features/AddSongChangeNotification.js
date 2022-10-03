import React from 'react';
import { useStore } from '../../store';

function AddSongChangeNotification() {
  const song = useStore(state => state.song);

  React.useEffect(() => {
    if (song.songName !== '') {
      chrome.runtime.sendMessage({notify: song})
    }
  }, [song])

  return <div id="AddSongChangeNotification"></div>
}

export default AddSongChangeNotification;