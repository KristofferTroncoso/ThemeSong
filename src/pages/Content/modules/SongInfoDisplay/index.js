import React from 'react';
import ReactDOM from 'react-dom';
import SongInfoDisplay from './SongInfoDisplay';
import { store } from '../../app/store';
import { Provider  } from 'react-redux';

let songDivContainer;

function addSongDivContainer() {
  const thumbnail = document.querySelector("ytmusic-player #thumbnail");

  if (document.getElementById("songDivContainer")) {
    document.getElementById("songDivContainer").remove();
  }

  songDivContainer = document.createElement("div");
  songDivContainer.id = "songDivContainer";
  songDivContainer.style.padding = "80px 0 80px 80px";
  songDivContainer.style.height = "600px";
  songDivContainer.style.maxWidth = "900px";

  thumbnail.append(songDivContainer);
}

addSongDivContainer();

ReactDOM.render(<Provider store={store}><SongInfoDisplay /></Provider>, songDivContainer);
