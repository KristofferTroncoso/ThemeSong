
export const main_BGs = /*css*/`
body {
  background: var(--ts-mainbg-color);
  transition: var(--ts-bgcolor-transition) !important;
}

#player-page {
  background-color: var(--ts-playpagebg-color) !important;
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--ts-bgcolor-transition);
}

#nav-bar-background {
  background-color: var(--ts-topnav-color) !important;
  transition: opacity 0.2s, var(--ts-bgcolor-transition) !important;
}

#player-bar-background {
  background-color: var(--ts-playbar-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
}

ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--ts-playbar-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
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
`;