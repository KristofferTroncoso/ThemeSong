export const main_BGs = /*css*/ `
:root {
  --themesong-bgcolor-transition: background 0.5s ease-out;

  --ytmusic-brand-background-solid: var(--themesong-playbarbg-color) !important;
  --ytmusic-general-background-a: var(--themesong-bodybg-color) !important;
  --ytmusic-general-background-c: var(--themesong-bodybg-color) !important;
  --ytmusic-search-background: var(--themesong-playbarbg-color) !important;
}

body {
  background: var(--themesong-bodybg-color);
  transition: var(--themesong-bgcolor-transition) !important;
}

.background-gradient {
  background: var(--themesong-bodybg-color) !important;
}

#player-page {
  background: var(--themesong-playpagebg-color) !important;
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--themesong-bgcolor-transition);
}

#song-image {
  background: var(--themesong-playpagebg-color) !important;
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--themesong-bgcolor-transition);
}

#nav-bar-background {
  background: var(--themesong-topbarbg-color) !important;
  transition: opacity 0.2s, var(--themesong-bgcolor-transition) !important;
}

#player-bar-background {
  background: var(--themesong-playbarbg-color) !important;
  transition: var(--themesong-bgcolor-transition) !important;
}

ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--themesong-playbarbg-color) !important;
  transition: var(--themesong-bgcolor-transition) !important;
}

tp-yt-paper-listbox {
  background: var(--themesong-playbarbg-color);
}

ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  background: var(--themesong-bodybg-color);
}

ytmusic-tabs.stuck {
  background: var(--themesong-bodybg-color);
}

ytmusic-av-toggle[playback-mode=ATV_PREFERRED] .song-button.ytmusic-av-toggle {
  background: var(--themesong-playpageavtoggle-color);
}

ytmusic-av-toggle[playback-mode=OMV_PREFERRED] .video-button.ytmusic-av-toggle {
  background: var(--themesong-playpageavtoggle-color);
}


ytmusic-search-box[opened], ytmusic-search-box[has-query] {
  border: 1px solid var(--themesong-base-00-alpha20-color);
}

ytmusic-search-suggestions-section.ytmusic-search-box {
  border-top: 1px solid var(--themesong-base-00-alpha10-color);
}

/* start PlayPage song img styling */
ytmusic-player {
  /* below is like an accent gradient for the song img */
  --ytmusic-player-overlay-gradient: linear-gradient( var(--themesong-base-00-alpha-06-color) 0%, rgba(0, 0, 0, 0) 40% ) !important;
}
/* end PlayPage song img styling */



/* artist image white filter */
/* aside from the gradient, there's also a default dark filter applied to the artist image header on the artist page */
/* this needs to be set to a white/light filter on light themes or else it wont look right */
.image.ytmusic-immersive-header-renderer~.content-container-wrapper.ytmusic-immersive-header-renderer {
  background-color: var(--themesong-base-00-alpha-03-color) !important;
}


/* semi-transparent overlay on top of album images (on home page) on-hover */
ytmusic-background-overlay-renderer {
  --ytmusic-background-overlay-background: var(--themesong-base-00-alpha-06-color) !important;
}
`;
