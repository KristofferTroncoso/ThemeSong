export const song_image = /*css*/ `
:root {
  --ts-songimg-border-radius: 12px;
  --ts-songimg-thumbnail-border-radius: 10px;
  --ts-songimg-box-shadow: 0 1px 4px rgb(0 0 0 / 0.6);
}

/* start image thumbnails */
ytmusic-two-row-item-renderer[aspect-ratio=MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_SQUARE] .image.ytmusic-two-row-item-renderer {
  border-radius: var(--ts-songimg-thumbnail-border-radius);
}

ytmusic-two-row-item-renderer[aspect-ratio=MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_SQUARE] .image-wrapper.ytmusic-two-row-item-renderer {
  border-radius: var(--ts-songimg-thumbnail-border-radius);
}
/* end image thumbnails */

/* start PlayPage song img styling */
ytmusic-player {
  border-radius: var(--ts-songimg-border-radius);
}
#song-image {
  box-shadow: var(--ts-songimg-box-shadow);
  border-radius: var(--ts-songimg-border-radius);
}
#song-image img{
  border-radius: var(--ts-songimg-border-radius);
  /* object-fit: contain; */
}
#song-video {
  box-shadow: var(--ts-songimg-box-shadow);
  border-radius: var(--ts-songimg-border-radius);
}
#song-video .html5-video-player {
  border-radius: var(--ts-songimg-border-radius);
}
ytmusic-player .song-media-controls {
  border-radius: var(--ts-songimg-border-radius);
}

ytmusic-player[player-ui-state=FULLSCREEN] #song-image {
  height: 100%;
  border-radius: 0;
}

ytmusic-player[player-ui-state=FULLSCREEN] #thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

ytmusic-player[player-ui-state=FULLSCREEN] #song-image #img {
  background-color: var(--ts-palette-dominant-hex);
  border-radius: var(--ts-songimg-border-radius);
  box-shadow: var(--ts-songimg-box-shadow);
  /* filter: drop-shadow(0px 0px 200px hsl(var(--ts-palette-dominant-hue), var(--ts-palette-dominant-saturation), 50%)); */
  width: 700px;
  height: 700px;
  margin: 0;
}
/* end PlayPage song img styling */

/* Your likes and playlists and albums image */
#thumbnail {
  border-radius: var(--ts-songimg-thumbnail-border-radius) !important;
}
`;
