export const dynamiclight_css = /*css*/`
/* ThemeSong */
/* Dynamic Light Theme */

:root {
  --ts-default-app-color: #ebebeb;

  --ts-picked-vibrant-static: var(--ts-default-app-color);
  --ts-topnav-color: var(--ts-default-app-color);
  --ts-mainbg-color: var(--ts-default-app-color);
  --ts-playpagebg-color: var(--ts-default-app-color);
  --ts-playbar-color: var(--ts-default-app-color);
  --ts-playpageavtoggle-color: var(--ts-default-app-color);

  --ts-playprogress-color: black !important;

  --ytmusic-brand-background-solid: var(--ts-playbar-color) !important;
  --ytmusic-general-background-a: var(--ts-mainbg-color) !important;
  --ytmusic-general-background-c: var(--ts-mainbg-color) !important;
  --ytmusic-text-primary: #000 !important;
  --ytmusic-text-secondary: #737373 !important;
  --ytmusic-text-disabled: #9b9b9b !important;

  --ytmusic-overlay-text-secondary: black !important;

  --ytmusic-10-percent-layer: rgba(0, 0, 0, 0.2) !important;
  --yt-spec-10-percent-layer: rgba(0, 0, 0, 0.2) !important;

  --ytmusic-search-background: var(--ts-playbar-color) !important;
  --ytmusic-search-border: rgba(0,0,0,0.4) !important;

  --ytmusic-divider: rgba(0,0,0,0.3) !important;
  --ytmusic-menu-item-hover-background-color: rgba(0,0,0,0.2) !important;

  --ytmusic-color-white1-alpha10: rgba(0, 0, 0, .1) !important;

  --yt-spec-text-primary-inverse: rgba(255,255,255,1) !important;

}

ytmusic-player {
  box-shadow: 0 0 200px var(--ts-picked-vibrant-static) !important;
  border-radius: 6px;
  --ytmusic-player-overlay-gradient: linear-gradient( rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 25%, rgba(0, 0, 0, 0) 100% ) !important;
}
#song-image {
  box-shadow: 2px 6px 10px rgba(0,0,0,0.5);
  border-radius: 6px;
}
#song-image img{
  border-radius: 6px;
}
#song-video {
  box-shadow: 2px 6px 10px rgba(0,0,0,0.5);
  border-radius: 6px;
}
#song-video .html5-video-player {
  border-radius: 6px;
  background-color: transparent;
}
ytmusic-player .song-media-controls {
  border-radius: 6px;
}

/* artist image white filter */
.image.ytmusic-immersive-header-renderer~.content-container-wrapper.ytmusic-immersive-header-renderer {
  background-color: rgba(255,255,255,0.2) !important;
}

ytmusic-background-overlay-renderer {
  --ytmusic-background-overlay-background: linear-gradient(rgba(255, 255, 255,0.9),rgba(255, 255, 255,0.4),rgba(255, 255, 255,0.1)) !important;
}


ytmusic-settings-page .title{
  color: white !important;
    --yt-endpoint-color: white !important;
    --yt-endpoint-hover-color: rgba(255, 255, 255,0.8) !important;
    --yt-endpoint-visited-color: white !important;
    --ytmusic-text-primary: white !important;
    --ytmusic-text-secondary: #737373 !important;
    --ytmusic-text-disabled: #9b9b9b !important;
}
/* start icons */
/* playbar icons */
tp-yt-paper-icon-button  {
  color: #4a4a4a !important;
}

.menu.ytmusic-player-bar {
  --iron-icon-fill-color: rgba(0,0,0,0.5) !important;
}

.left-controls.ytmusic-player-bar tp-yt-paper-icon-button.ytmusic-player-bar, .left-controls.ytmusic-player-bar .spinner-container.ytmusic-player-bar, .toggle-player-page-button.ytmusic-player-bar {
  --iron-icon-fill-color: rgba(0,0,0,0.8) !important;
}

ytmusic-player-bar {
  color: rgba(0,0,0,0.5) !important;
}

ytmusic-like-button-renderer[like-status=LIKE] .like.ytmusic-like-button-renderer, ytmusic-like-button-renderer[like-status=DISLIKE] .dislike.ytmusic-like-button-renderer {
  color: black !important;
}

ytmusic-player-bar:not([repeat-mode_=NONE]) .repeat.ytmusic-player-bar {
  color: black !important;
}

ytmusic-play-button-renderer {
  --ytmusic-play-button-icon-color: rgba(0,0,0,1) !important;
  --ytmusic-play-button-background-color: rgba(255,255,255,0.4) !important;
  --ytmusic-play-button-active-background-color: rgba(255,255,255,1) !important;
}
/* end playbar icons */

.cast-button.ytmusic-cast-button {
  --iron-icon-fill-color: rgba(0,0,0,0.6) !important;
}

/* "Explicit" icon */
yt-icon.ytmusic-inline-badge-renderer {
  color: rgba(0,0,0,0.6) !important;
}

ytd-multi-page-menu-renderer.ytmusic-popup-container {
  --yt-spec-call-to-action: rgba(24,2,200,0.8) !important;
  --yt-endpoint-hover-color: #3ea6ff;
  --yt-compact-link-icon-color: rgba(0,0,0,0.6) !important;
}

a.ytmusic-icon-link-renderer {
  color: rgba(0,0,0,0.8) !important;
}

yt-icon.ytmusic-navigation-button-renderer {
  color: rgba(0,0,0,0.6) !important;
}

.icon.ytmusic-menu-navigation-item-renderer {
  fill: rgba(0,0,0,0.6) !important;
}

.icon.ytmusic-menu-service-item-renderer {
  fill: rgba(0,0,0,0.6) !important;
}

.icon.ytmusic-toggle-menu-service-item-renderer {
  fill: rgba(0,0,0,0.6) !important;
}

.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
  --paper-slider-container-color: #525252 !important;
  --paper-slider-active-color: black !important;
  --paper-slider-knob-color: black  !important;
  --paper-slider-disabled-knob-color: black  !important;
  --paper-slider-knob-start-color: black  !important;
  --paper-slider-knob-start-border-color: black  !important;
}


/* end icons */

/* start rulers */
tp-yt-paper-tabs.ytmusic-player-page {
  --paper-tabs-selection-bar-color: black !important;
  --paper-tabs-content_-_color: black !important;
}

ytmusic-player-queue-item {
  border-bottom: 1px solid rgba(0,0,0,0.3);
}

tp-yt-paper-listbox.ytmusic-menu-popup-renderer {
  border: 1px solid rgba(0,0,0,0.2);
}

#end-items.ytmusic-item-section-tabbed-header-renderer {
  border-top: 1px solid rgba(0,0,0,0.2) !important;
}

#nav-bar-divider.ytmusic-app-layout {
  border-top: 1px solid rgba(0,0,0,0.2) !important;
}

ytmusic-playlist-add-to-option-renderer:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
}

#suggestions.ytmusic-search-suggestions-section>.ytmusic-search-suggestions-section:hover, ytmusic-search-suggestions-section:not([is-entity-search-suggestions-enabled]) #suggestions.ytmusic-search-suggestions-section>.selected-suggestion.ytmusic-search-suggestions-section {
  background-color: rgba(0, 0, 0, 0.2) !important;
}

tp-yt-paper-listbox > .ytmusic-menu-popup-renderer:hover {
  background-color: rgba(0, 0, 0, 0.15) !important;
}

ytmusic-tabs.iron-selected .tab.ytmusic-tabs, .tab.selected.ytmusic-tabs {
  color: black !important;
  border-bottom: 2px solid black !important;
}

.tab-container.ytmusic-tabs {
  border-bottom: 1px solid rgba(0,0,0,0.1) !important;
}

ytmusic-add-to-playlist-renderer {
  border: 1px solid rgba(0,0,0,0.2) !important;
}

ytmusic-carousel-shelf-renderer.ytmusic-add-to-playlist-renderer:not(:empty) {
  border-bottom: 1px solid rgba(0,0,0,0.2) !important;
}

.top-bar.ytmusic-add-to-playlist-renderer {
  border-bottom: 1px solid rgba(0,0,0,0.2) !important;
}

#contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid rgba(0,0,0,0.2) !important;
}

#contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid rgba(0,0,0,0.2) !important;
}
/* end rulers */

/* start buttons */
button.ytmusic-navigation-button-renderer {
  font-family: Roboto,Noto Naskh Arabic UI,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: black !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: start;
  padding: 0 12px;
  text-transform: none;
  border: none;
  background: rgba(0,0,0,0.15) !important;
  transition: background-color 0.2s cubic-bezier(0.2,0,0.6,1);
  white-space: normal;
}

ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]):hover button.ytmusic-navigation-button-renderer, ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]) button.ytmusic-navigation-button-renderer:focus-within {
  background: rgba(0,0,0,0.4) !important;
}

ytmusic-dropdown-renderer[dropdown-style=default] {
  background-color: rgba(0,0,0,0.1) !important;
  border: 1px solid rgba(0,0,0,0.1) !important;
}

#delete.ytmusic-search-suggestion {
  color: rgba(0,0,0,0.5) !important;
}
#delete.ytmusic-search-suggestion:hover {
  color: rgba(0,0,0,0.7) !important;
}

#top-level-buttons.ytmusic-menu-renderer>.outline-button.ytmusic-menu-renderer, .edit-playlist-button.ytmusic-menu-renderer, ytmusic-toggle-button-renderer.ytmusic-menu-renderer {
  border: 1px solid black !important;
  border-radius: 2px;
  --yt-button-color: black !important;
}

yt-button-renderer.watch-button.ytmusic-menu-renderer {
  color: white !important;
  background-color: black !important;
}

ytmusic-shelf-renderer yt-button-renderer #button.yt-button-renderer {
  color: black !important;
}

.play-button.ytmusic-immersive-header-renderer, .radio-button.ytmusic-immersive-header-renderer {
  color: black !important;
  --yt-button-background-color: black !important;
  --yt-button-color: white !important;
}

tp-yt-paper-button.ytmusic-subscribe-button-renderer {
  color: rgba(0,0,0,0.8) !important;
  border: 1px solid rgba(0,0,0,0.8) !important;
}

ytmusic-toggle-button-renderer #button.ytmusic-toggle-button-renderer {
  color: black !important;
}

ytmusic-chip-cloud-chip-renderer:not([chip-style=STYLE_PRIMARY]):not([chip-style=STYLE_SECONDARY]):not([is-selected]) a.ytmusic-chip-cloud-chip-renderer {
  border: 1px solid rgba(0,0,0,0.1) !important;
  background: black !important;
  color: white !important;
  --yt-endpoint-hover-color: white !important;
  background: rgba(0,0,0,0.1) !important;
  color: black !important;
}

.more-button.ytmusic-shelf-renderer tp-yt-paper-button.ytmusic-shelf-renderer {
  color: rgba(0,0,0,0.7);
}
/* end buttons */

/* start TEXTS */
.song-title, 
.title, 
.text {
  color: rgba(0,0,0,1) !important;
  --yt-endpoint-color: black !important;
  --yt-endpoint-hover-color: rgba(0,0,0,0.8) !important;
  --yt-endpoint-visited-color: black !important;
  --ytmusic-text-primary: #000 !important;
  --ytmusic-text-secondary: #737373 !important;
  --ytmusic-text-disabled: #9b9b9b !important;
}

ytmusic-pivot-bar-item-renderer {
  color: rgba(0,0,0,0.5) !important;
  --yt-endpoint-color: black !important;
  --yt-endpoint-hover-color: black !important;
  --yt-endpoint-visited-color: black !important;
}

ytmusic-unified-share-panel-renderer #title, #share-url {
  color: white !important;
  --yt-endpoint-color: white !important;
  --yt-endpoint-hover-color: rgba(255, 255, 255, .8) !important;
  --yt-endpoint-visited-color: white !important;
  --ytmusic-text-primary: white !important;
  --ytmusic-text-secondary: #737373 !important;
  --ytmusic-text-disabled: #9b9b9b !important;
}

.duration.ytmusic-player-queue-item, .byline.ytmusic-player-queue-item {
  color: rgba(0,0,0.8) !important;
  --yt-endpoint-color: rgba(0,0,0.8) !important;
  --yt-endpoint-hover-color: rgba(0,0,0.8) !important;
  --yt-endpoint-visited-color: rgba(0,0,0.8) !important;
}


ytmusic-pivot-bar-item-renderer:hover, ytmusic-pivot-bar-item-renderer.iron-selected {
  color: black !important;
}

.time-info.ytmusic-player-bar {
  color: black !important;
}

ytmusic-item-section-tab-renderer.iron-selected .tab.ytmusic-item-section-tab-renderer, .tab.selected.ytmusic-item-section-tab-renderer {
  color: black !important;
  border-bottom: 2px solid black !important;
}

.tab {
  color: black !important;
}

.description.ytmusic-description-shelf-renderer {
  color: black !important;
}

.footer.ytmusic-description-shelf-renderer {
  color: black !important;
}

.container.ytmusic-custom-index-column-renderer {
  color: rgba(0,0,0,0.6) !important;
}

#hover-time-info {
  color: black !important;
}

ytmusic-search-box[has-query] input.ytmusic-search-box, ytmusic-search-box[opened] input.ytmusic-search-box {
  color: black !important;
}

#placeholder.ytmusic-search-box {
  color: rgba(0,0,0,0.5) !important;
}

tp-yt-paper-tab.iron-selected.ytmusic-player-page {
  color: black !important;
}

tp-yt-paper-tab.ytmusic-player-page {
  --paper-tab-ink: black !important;
  color: rgba(0,0,0,0.6) !important;
}

tp-yt-paper-tab.ytmusic-player-page[disabled] {
  color: rgba(0,0,0,0.3) !important;
}

ytmusic-search-box[opened] input.ytmusic-search-box::-webkit-input-placeholder {
  color: rgba(0,0,0,0.5) !important;
}

ytmusic-search-box[opened] input.ytmusic-search-box::placeholder {
  color: rgba(0,0,0,0.5) !important;
}

.section-heading.ytmusic-add-to-playlist-renderer {
  color: black !important;
  --yt-endpoint-color: black !important;
  --yt-endpoint-hover-color: black !important;
  --yt-endpoint-visited-color: black !important;
}

#title.ytmusic-playlist-add-to-option-renderer {
  color: black !important;
  --yt-endpoint-color: black !important;
  --yt-endpoint-hover-color: black !important;
  --yt-endpoint-visited-color: black !important;
}

ytmusic-two-row-item-renderer[item-size=COLLECTION_STYLE_ITEM_SIZE_SMALL_STATIC] .details.ytmusic-two-row-item-renderer .subtitle.ytmusic-two-row-item-renderer {
  color: rgba(0,0,0,0.7) !important;
}

.autoplay.ytmusic-tab-renderer .subtitle.ytmusic-tab-renderer {
  color: rgba(0,0,0,0.7) !important;
}

.description.ytmusic-detail-header-renderer {
  font-family: Roboto,Noto Naskh Arabic UI,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: var(--ytmusic-body-line-height);
  color: black !important;
  max-width: var(--ytmusic-detail-header-renderer-description-width);
  margin: 16px 0 0;
}

.description {
  color: black !important;
}

/* end TEXTS */


/* logo */
ytmusic-nav-bar picture:first-child {
  display: none !important;
}

ytmusic-nav-bar picture[hidden] {
  display: block !important;
}

ytmusic-nav-bar .left-content img {
  filter: brightness(15%);
}
/* logo end */


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
/* end main */


/* --- now playing progress bar color ---- */
#progress-bar.ytmusic-player-bar {
  --paper-slider-active-color: var(--ts-playprogress-color) !important;
  --paper-slider-secondary-color: rgba(0,0,0,0.2) !important;
  --paper-slider-container-color: rgba(0,0,0,0.1) !important;

}

#progress-bar.ytmusic-player-bar[focused], ytmusic-player-bar:hover #progress-bar.ytmusic-player-bar {
  --paper-slider-knob-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-border-color: var(--ts-playprogress-color) !important;
}
/* --- end now playing progress bar color ---- */

/* scrollbar */
::-webkit-scrollbar {
  width: 1.2em !important;
  height: 1.2em !important;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(250, 250, 250, 0.342);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4) !important;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
/* end scrollbar */
`;