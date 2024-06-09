export const scrollbars = /*css*/ `
:root {
  --ts-scrollbar-color: var(--ts-base-100-alpha-01-color);
}
/* scrollbars */
::-webkit-scrollbar-thumb {
  background-color: var(--ts-scrollbar-color) !important;
}

/* new scrollbar properties? chrome version > 120 */
html {
  scrollbar-color: var(--ts-scrollbar-color) var(--ts-base-100-alpha-005-color);
}

body {
  scrollbar-color: var(--ts-scrollbar-color) transparent;
}

/* carousel on homepage and stuff */
ytmusic-carousel:hover, ytmusic-carousel:active, ytmusic-carousel:focus {
  scrollbar-color: var(--ts-scrollbar-color) transparent;
}

/* pills and chips */
#chips.ytmusic-chip-cloud-renderer {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

#chips.ytmusic-chip-cloud-renderer:hover {
  scrollbar-color: var(--ts-scrollbar-color) transparent;
}

/* sidebar playlist list */
#items.ytmusic-guide-section-renderer {
  scrollbar-width: none;
}

#items.ytmusic-guide-section-renderer:hover {
  scrollbar-width: auto;
}

/* popup menu when right clicking a song */
ytmusic-menu-popup-renderer {
  scrollbar-width: thin;
}
`;
