export const song_image = /*css*/ `
/* start image thumbnails */
ytmusic-two-row-item-renderer[aspect-ratio=MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_SQUARE] .image.ytmusic-two-row-item-renderer {
  border-radius: 10px;
}
/* end image thumbnails */

/* start PlayPage song img styling */
ytmusic-player {
  border-radius: 4px;
}
#song-image {
  box-shadow: 0 1px 4px rgba(0,0,0,0.6);
  border-radius: 4px;
}
#song-image img{
  border-radius: 4px;
  /* object-fit: contain; */
}
#song-video {
  box-shadow: 0 1px 4px rgba(0,0,0,0.6);
  border-radius: 4px;
}
#song-video .html5-video-player {
  border-radius: 4px;
}
ytmusic-player .song-media-controls {
  border-radius: 4px;
}


ytmusic-player[player-ui-state_=FULLSCREEN] #song-image {
  height: 100%;
  border-radius: 0;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #song-image #img {
  background-color: var(--ts-palette-dominant-color);
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.6);
  filter: drop-shadow(0px 0px 200px hsl(var(--ts-palette-dominant-hue), var(--ts-palette-dominant-saturation), 50%));
  width: 760px;
  height: 760px;
  margin: 0;
}
/* end PlayPage song img styling */
`;
