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

  --ts-accent-color-light-14: var(--ts-default-app-color);

  --ts-playprogress-color: white;

  --ytmusic-general-background-c: var(--ts-mainbg-color) !important;
  --ytmusic-search-background: var(--ts-playbar-color) !important;
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

body {
  background-color: var(--ts-mainbg-color);
}

#player-page {
  background-color: var(--ts-playpagebg-color) !important;
}

#nav-bar-background {
  background-color: var(--ts-topnav-color) !important;
}

#player-bar-background {
  background-color: var(--ts-playbar-color) !important;
}


ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--ts-playbar-color) !important;
}

tp-yt-paper-listbox {
  background-color: var(--ts-playbar-color);
}

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

::-webkit-scrollbar {
  width: 1.2em !important;
  height: 1.2em !important;
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
`;