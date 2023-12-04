export const thumbnail_border = /*css*/ `
  :root {
    --ts-thumbnail-border-color: var(--ts-base-20-color, grey);
  }

  /* border around album thumbnails */
  ytmusic-thumbnail-renderer:not([thumbnail-crop="MUSIC_THUMBNAIL_CROP_CIRCLE"]) {
    height: 98% !important;
    width: initial !important;
    border: 1px solid var(--ts-thumbnail-border-color);
  }

  /* set thumbnail back to 44px for add-to-playlist menu */
  .thumbnail.ytmusic-playlist-add-to-option-renderer {
    height: 44px !important;
    width: 44px !important;
  }

  /* album page light border */
  #thumbnail {
    border: 1px solid var(--ts-thumbnail-border-color);
  }
  #song-image > #thumbnail {
    border: none;
  }
`;
