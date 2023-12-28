export const frosted_glass = /*css*/ `
:root {
  --ts-frosted-glass-blur: blur(12px);
}

#nav-bar-background {
  backdrop-filter: var(--ts-frosted-glass-blur);
}

#player-bar-background {
  backdrop-filter: var(--ts-frosted-glass-blur);
}

ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  backdrop-filter: var(--ts-frosted-glass-blur);
}

ytmusic-tabs.stuck {
  backdrop-filter: var(--ts-frosted-glass-blur);
  box-shadow: none !important;
}

tp-yt-iron-dropdown {
  backdrop-filter: var(--ts-frosted-glass-blur);
}

ytmusic-search-box {
  backdrop-filter: var(--ts-frosted-glass-blur);
}

tp-yt-paper-dialog {
  backdrop-filter: var(--ts-frosted-glass-blur);
}

/* sidebar */
#guide-wrapper {
  backdrop-filter: var(--ts-frosted-glass-blur);
}
`;
