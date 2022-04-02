export const static_dark_css = /*css*/`
/* ThemeSong */
/* Static Dark Theme */

:root {
  --ts-default-app-color: #171717;

  --ts-topnav-color: var(--ts-default-app-color);
  --ts-mainbg-color: var(--ts-default-app-color);
  --ts-playpagebg-color: var(--ts-default-app-color);
  --ts-playbar-color: var(--ts-default-app-color);
  --ts-playpageavtoggle-color: var(--ts-default-app-color);

  --ts-playprogress-color: white;

  --ytmusic-brand-background-solid: var(--ts-mainbg-color) !important;
  --ytmusic-general-background-c: var(--ts-mainbg-color) !important;
  --ytmusic-search-background: var(--ts-playbar-color) !important;
}

/* start PlayPage song img styling */
ytmusic-player {
  border-radius: 6px;
}
#song-image {
  box-shadow: 0 2px 10px rgba(0,0,0,0.6);
  border-radius: 6px;
}
#song-image img{
  border-radius: 6px;
}
#song-video {
  box-shadow: 0 2px 10px rgba(0,0,0,0.6);
  border-radius: 6px;
}
#song-video .html5-video-player {
  border-radius: 6px;
}
ytmusic-player .song-media-controls {
  border-radius: 6px;
}
/* end PlayPage song img styling */

/* start MAIN */
/* This can be specific since we would like to individually adjust these portions. */
body {
  background-color: var(--ts-mainbg-color);
}

#nav-bar-background {
  background-color: var(--ts-topnav-color) !important;
}

ytmusic-player-page {
  background-color: var(--ts-playpagebg-color);
}

#player-bar-background {
  background-color: var(--ts-playbar-color) !important;
}
ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--ts-playbar-color);
}
/* end main */

/*
tp-yt-paper-listbox {
  background-color: var(--ts-playbar-color);
}
*/

ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  background-color: var(--ts-mainbg-color);
}

ytmusic-tabs.stuck {
  background-color: var(--ts-mainbg-color);
}

ytmusic-av-toggle[playback-mode=ATV_PREFERRED] .song-button.ytmusic-av-toggle {
  background-color: var(--ts-playpageavtoggle-color);
}

ytmusic-av-toggle[playback-mode=OMV_PREFERRED] .video-button.ytmusic-av-toggle {
  background-color: var(--ts-playpageavtoggle-color);
}

ytmusic-search-box[opened], ytmusic-search-box[has-query] {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

ytmusic-search-suggestions-section.ytmusic-search-box {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}


/* --- now playing progress bar color ---- */
#progress-bar.ytmusic-player-bar {
  --paper-slider-active-color: var(--ts-playprogress-color) !important;
}

#progress-bar.ytmusic-player-bar[focused], ytmusic-player-bar:hover #progress-bar.ytmusic-player-bar {
  --paper-slider-knob-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-border-color: var(--ts-playprogress-color) !important;
}

body::-webkit-scrollbar {
  background-color: rgba(255,255,255,0.1);
  width: 12px !important;
}

body::-webkit-scrollbar-track {
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(250, 250, 250, 0.2) !important;
  border: 1px solid rgba(0, 0, 0, 0.342);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(250, 250, 250, 0.5) !important;
}

::-webkit-scrollbar-corner {
  background: transparent;
}



/* logo */
ytmusic-nav-bar picture:first-child {
  display: none !important;
}

ytmusic-nav-bar picture[hidden] {
  display: block !important;
}

ytmusic-nav-bar .left-content img {
  filter: brightness(100%);
}
/* logo end */
`;