import React from 'react';
import { useSelector } from 'react-redux';

function AddSongChangeNotification() {
  const song = useSelector(state => state.song);

  React.useEffect(() => {
    chrome.runtime.sendMessage({notify: song})
  }, [song])

  return <div id="AddSongChangeNotification"></div>
}

export default AddSongChangeNotification;