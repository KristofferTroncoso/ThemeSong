import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import SongInfoDisplay from './SongInfoDisplay';

function SongInfoDisplayFeature() {
  useEffect(() => {
    const thumbnail = document.querySelector("ytmusic-player #thumbnail");
    let songDivContainer;
  
    if (document.getElementById("songDivContainer")) {
      document.getElementById("songDivContainer").remove();
    }
  
    songDivContainer = document.createElement("div");
    songDivContainer.id = "songDivContainer";
  
    thumbnail.append(songDivContainer);
  
    const root = createRoot(songDivContainer)
    root.render(<SongInfoDisplay />)
  }, [])

  return <div id="SongInfoDisplayFeature"></div>
}

export default SongInfoDisplayFeature;

