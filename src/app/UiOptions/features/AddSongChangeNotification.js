import React from 'react';
import { useSelector } from 'react-redux';

function AddSongChangeNotification() {
  const songDetails = useSelector(state => state.songDetails);

  React.useEffect(() => {
    chrome.runtime.sendMessage({notify: songDetails})
  }, [songDetails])

  return <div id="AddSongChangeNotification"></div>
}

export default AddSongChangeNotification;