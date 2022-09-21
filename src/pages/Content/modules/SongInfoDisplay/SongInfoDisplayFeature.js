import React from 'react';
import ReactDOM from 'react-dom';
import SongInfoDisplay from './SongInfoDisplay';
import { store } from '../../../../redux/store';
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
  
    ReactDOM.render(<Provider store={store}><SongInfoDisplay /></Provider>, songDivContainer);
  }, [])

  return <div></div>
}

export default SongInfoDisplayFeature;

