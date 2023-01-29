import { playerbar_progressbar } from "../../universal/playerbar-progressbar";
import { universalstyles } from "../../universal/universalstyles";

export const youtubemusicmobile_css = /*css*/ `
/* ThemeSong */
/* Ditto Theme */

:root {
  --themesong-base-00-color: #00000;
  --themesong-base-10-color: #1a1a1a;
  --themesong-base-20-color: #333333;
  --themesong-base-30-color: #4d4d4d;
  --themesong-base-40-color: #666666;
  --themesong-base-50-color: #808080;
  --themesong-base-60-color: #999999;
  --themesong-base-70-color: #b3b3b3;
  --themesong-base-80-color: #cccccc;
  --themesong-base-90-color: #e6e6e6;
  --themesong-base-100-color: #ffffff;

  --themesong-base-00-alpha10-color: rgba(255, 255, 255, 0.1);
  --themesong-base-00-alpha20-color: rgba(255, 255, 255, 0.2);

  --themesong-topbarbg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-topbarbg-light));
  --themesong-bodybg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-bodybg-light));
  --themesong-playpagebg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-playpagebg-light));
  --themesong-playbarbg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-playbarbg-light));
  --themesong-playpageavtoggle-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-playpageavtoggle-light));

  --themesong-primary-text-color: var(--themesong-base-100-color);
  --themesong-secondary-text-color: var(--themesong-base-80-color);
  --themesong-tertiary-text-color: var(--themesong-base-70-color);

  --themesong-playprogress-color: var(--themesong-base-100-color);
}

:root {
  --themesong-bgcolor-transition: background-color 0.5s ease-out;
}

#player-page {
  background-color: var(--themesong-playpagebg-color) !important;
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--themesong-bgcolor-transition);
}

#nav-bar-background {
  background-color: var(--themesong-topbarbg-color) !important;
  transition: opacity 0.2s, var(--themesong-bgcolor-transition) !important;
}

#player-bar-background {
  background-color: var(--themesong-playbarbg-color) !important;
  transition: var(--themesong-bgcolor-transition) !important;
}

ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--themesong-playbarbg-color) !important;
  transition: var(--themesong-bgcolor-transition) !important;
}

tp-yt-paper-listbox {
  background-color: var(--themesong-playbarbg-color);
}

ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  background-color: var(--themesong-bodybg-color);
}

ytmusic-tabs.stuck {
  background-color: var(--themesong-bodybg-color);
}

ytmusic-av-toggle[playback-mode=ATV_PREFERRED] .song-button.ytmusic-av-toggle {
  background-color: var(--themesong-playpageavtoggle-color);
}

ytmusic-av-toggle[playback-mode=OMV_PREFERRED] .video-button.ytmusic-av-toggle {
  background-color: var(--themesong-playpageavtoggle-color);
}


ytmusic-search-box[opened], ytmusic-search-box[has-query] {
  border: 1px solid var(--themesong-base-00-alpha20-color);
}

ytmusic-search-suggestions-section.ytmusic-search-box {
  border-top: 1px solid var(--themesong-base-00-alpha10-color);
}

/* start PlayPage song img styling */
ytmusic-player {
  border-radius: 4px;
}
#song-image {
  border-radius: 4px;
}
#song-image img{
  border-radius: 4px;
  /* object-fit: contain; */
}
#song-video {
  border-radius: 4px;
}
#song-video .html5-video-player {
  border-radius: 4px;
}
ytmusic-player .song-media-controls {
  border-radius: 4px;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #song-image {
  height: 100%;
  border-radius: 0;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #song-image #img {
  background-color: var(--themesong-palette-dominant-color);
  border-radius: 6px;
  width: 1000px;
  height: 1000px;
  margin: 0;
}
/* end PlayPage song img styling */

${playerbar_progressbar}
${universalstyles}

`;
