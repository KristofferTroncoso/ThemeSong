

export const songImgStyles = /*css*/`
/* start PlayPage song img styling */
ytmusic-player {
  border-radius: 6px;
}
#song-image {
  box-shadow: 0 2px 10px rgba(0,0,0,0.6);
  border-radius: 6px;
}
#song-image img{
  border-radius: 6px;
  object-fit: contain;
}
#song-video {
  box-shadow: 0 2px 10px rgba(0,0,0,0.6);
  border-radius: 6px;
}
#song-video .html5-video-player {
  border-radius: 6px;
}
ytmusic-player .song-media-controls {
  border-radius: 6px;
}


ytmusic-player[player-ui-state_=FULLSCREEN] #song-image {
  height: 100%;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #thumbnail {
  /*
  margin: 160px 950px 160px 269px;
  max-width: 80%;
  max-height: 80%;
  */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #song-image #img {
  border-radius: 6px;
  box-shadow: 0 2px 80px black;
  width: 900px;
  height: 900px;
  margin: 0;
}
/* end PlayPage song img styling */

ytmusic-player:not([player-ui-state_=FULLSCREEN]) #songDivNode {
  display: none;
  border: 2px solid blue;
}
`;