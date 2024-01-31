export const scrollbars = /*css*/ `
/* scrollbars */
::-webkit-scrollbar-thumb {
  background-color: var(--ts-base-100-alpha-02-color) !important;
}

/* new scrollbar properties? chrome version > 120 */
html {
  scrollbar-color: var(--ts-base-100-alpha-02-color) transparent;
}

/* carousel on homepage and stuff */
#items.ytmusic-carousel {
  scrollbar-width: none;
}

/* pills and chips */
#chips.ytmusic-chip-cloud-renderer {
  scrollbar-width: none;
}

/* sidebar playlist list */
#items.ytmusic-guide-section-renderer {
  scrollbar-width: none;
}

#items.ytmusic-guide-section-renderer:hover {
  scrollbar-width: auto;
}
`;
