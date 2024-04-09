export const zebra_stripes = /*css*/ `
:root {
  --ts-zebra-stripes-color: var(--ts-base-100-alpha-005-color, rgb(0 0 0 / 0.04));
}

.ytmusic-section-list-renderer #contents ytmusic-responsive-list-item-renderer:nth-of-type(odd) {
  background-color: var(--ts-zebra-stripes-color);
  border-radius: 5px;
}

/* remove border-bottom / ruler from lists */
#contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
  border-bottom: none !important;
}

#contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
  border-bottom: none !important;
  padding: 1px 10px;
}

/* need a bit of margin between last-child and "Show All" button */
.ytmusic-section-list-renderer #contents ytmusic-responsive-list-item-renderer:last-child {
  margin-bottom: 6px;
}

/* remove lines from playerpage list */
ytmusic-player-queue-item {
  border-bottom: none;
}

ytmusic-player-queue-item[play-button-state=loading], ytmusic-player-queue-item[play-button-state=playing], ytmusic-player-queue-item[play-button-state=paused] {
  border-radius: 6px;
}
`;
