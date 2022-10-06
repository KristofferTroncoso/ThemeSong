import React from 'react';
import { useStore } from '../../store';

function AddSongChangeNotification() {
  const song = useStore(state => state.song);

  React.useEffect(() => {
    try {
      if (song.songName !== '') {
        chrome.runtime.sendMessage({notify: song})
      }
    } catch {
      console.log('AddSongChangeNotification: context invalidated')
    }
  }, [song])

  return <div id="AddSongChangeNotification"></div>
}

export default AddSongChangeNotification;