export const apple_music_css = /*css*/ `



/* start icons */
tp-yt-paper-icon-button  {
  /* color: var(--ts-base-100-color) !important; */
  color: #d60017 !important;
}


ytmusic-like-button-renderer[like-status=LIKE] .like.ytmusic-like-button-renderer, ytmusic-like-button-renderer[like-status=DISLIKE] .dislike.ytmusic-like-button-renderer {
  /* color: var(--ts-primary-text-color) !important; */
  color: #d60017 !important;
}


/* "Explicit" icon */
yt-icon.ytmusic-inline-badge-renderer {
  color: #d60017 !important;
}

ytd-multi-page-menu-renderer.ytmusic-popup-container {
  --yt-spec-call-to-action: rgba(24,2,200,0.8) !important;
  --yt-endpoint-hover-color: #3ea6ff;
  --yt-compact-link-icon-color: var(--ts-base-100-alpha-06-color) !important;
}

a.ytmusic-icon-link-renderer {
  color: #d60017 !important;
}

yt-icon.ytmusic-navigation-button-renderer {
  color: #d60017 !important;
}

.icon.ytmusic-menu-navigation-item-renderer {
  fill: #d60017 !important;
}

.icon.ytmusic-menu-service-item-renderer {
  fill: #d60017 !important;
}

.icon.ytmusic-toggle-menu-service-item-renderer {
  fill: #d60017 !important;
}
/* end icons */


#nav-bar-background {
  backdrop-filter: blur(12px);
}


#player-bar-background {
  background: var(--ts-playbarbg-color) !important;
  backdrop-filter: blur(12px);
  transition: var(--ts-bgcolor-transition) !important;
}


ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  backdrop-filter: blur(12px);
}

ytmusic-tabs.stuck {
  backdrop-filter: blur(12px);
}

tp-yt-iron-dropdown {
  backdrop-filter: blur(14px);
}

ytmusic-search-box {
  backdrop-filter: blur(14px);
}
/* end main */

/* override to make scrollbar less bright on dark mode */
body::-webkit-scrollbar-track {
  background-color: var(--ts-base-100-alpha-005-color);
}

/* for some reason the rulers on the playpage are brighter on this theme than other themes */
/* i have to override it and make it less bright just for Apple Music */
/* probably has something to do with the different bg and gradient im using */
ytmusic-player-queue-item {
  border-bottom: 1px solid var(--ts-base-100-alpha-01-color);
}
`;
