import React from 'react';
import { createRoot } from 'react-dom/client';
import SongInfoDisplay from './SongInfoDisplay';
import { store } from '../../store';
import { Provider  } from 'react-redux';

function SongInfoDisplayFeature() {
  React.useEffect(() => {
    const thumbnail = document.querySelector("ytmusic-player #thumbnail");
    let songDivContainer;
  
    if (document.getElementById("songDivContainer")) {
      document.getElementById("songDivContainer").remove();
    }
  
    songDivContainer = document.createElement("div");
    songDivContainer.id = "songDivContainer";
  
    thumbnail.append(songDivContainer);
  
    const root = createRoot(songDivContainer)
    root.render(<Provider store={store}><SongInfoDisplay /></Provider>)
  }, [])

  return <div></div>
}

export default SongInfoDisplayFeature;

