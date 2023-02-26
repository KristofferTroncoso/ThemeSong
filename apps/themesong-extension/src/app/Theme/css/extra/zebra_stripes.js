export const zebra_stripes = /*css*/ `
:root {
  --ts-zebra-stripes-color: var(--ts-base-100-alpha-005-color, rgba(0,0,0,0.04));
}

.ytmusic-section-list-renderer #contents ytmusic-responsive-list-item-renderer:nth-of-type(odd) {
  background-color: var(--ts-zebra-stripes-color);
  border-radius: 2px;
}

/* remove border-bottom / ruler from lists */
#contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
  border-bottom: none !important;
}

#contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
  border-bottom: none !important;
}

/* to adjust height of list items */
/*
ytmusic-responsive-list-item-renderer {
  height: 40px;
}
*/
`;
