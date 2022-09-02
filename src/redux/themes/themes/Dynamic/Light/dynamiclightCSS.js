import { universalstyles } from '../../universal/universalstyles';
import { songImgStyles } from '../../universal/songImgStyles';

export const dynamiclight_css = /*css*/`
/* ThemeSong */
/* Dynamic Light Theme */

:root {
  --ts-default-app-color: #ebebeb;

  --ts-primary-text-color: #000;
  --ts-secondary-text-color: #474747;

  --ts-picked-vibrant-static: var(--ts-default-app-color);
  --ts-picked-vibrant-light50: var(--ts-default-app-color);
  --ts-picked-vibrant-alpha10: var(--ts-default-app-color);
  --ts-picked-vibrant-alpha20: var(--ts-default-app-color);
  --ts-topnav-color: var(--ts-default-app-color);
  --ts-mainbg-color: var(--ts-default-app-color);
  --ts-playpagebg-color: var(--ts-default-app-color);
  --ts-playbar-color: var(--ts-default-app-color);
  --ts-playpageavtoggle-color: var(--ts-default-app-color);

  --ts-playprogress-color: #000 !important;

  --ts-bgcolor-transition: background-color 1s ease-out;

  --ytmusic-brand-background-solid: var(--ts-playbar-color) !important;
  --ytmusic-general-background-a: var(--ts-mainbg-color) !important;
  --ytmusic-general-background-c: var(--ts-mainbg-color) !important;
  --ytmusic-text-primary: #000 !important;
  --ytmusic-text-secondary: #737373 !important;
  --ytmusic-text-disabled: #9b9b9b !important;

  --ytmusic-overlay-text-secondary: var(--ts-secondary-text-color) !important;

  --ytmusic-10-percent-layer: rgba(0, 0, 0, 0.2) !important;
  --yt-spec-10-percent-layer: rgba(0, 0, 0, 0.2) !important;

  --ytmusic-search-background: var(--ts-playbar-color) !important;
  --ytmusic-search-border: rgba(0,0,0,0.4) !important;

  --ytmusic-divider: rgba(0,0,0,0.3) !important;
  --ytmusic-menu-item-hover-background-color: rgba(0,0,0,0.2) !important;

  --ytmusic-color-white1-alpha10: var(--ts-picked-vibrant-alpha20) !important;

  --yt-spec-text-primary-inverse: rgba(255,255,255,1) !important;

  --ytmusic-setting-item-toggle-active: rgb(26, 115, 232) !important;
  --paper-toggle-button-checked-bar-opacity: 0.4 !important;
}

ytmusic-player {
  color: var(--ytmusic-text-primary);
}

ytmusic-player tp-yt-paper-icon-button {
  color: #000 !important;
}

ytmusic-player[player-ui-state_=MINIPLAYER] .song-media-controls.ytmusic-player {
  background: linear-gradient(rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%);
  padding: 12px;
}

/* start PlayPage song img styling */
ytmusic-player {
  box-shadow: 0 0 200px var(--ts-picked-vibrant-light50) !important;
  border-radius: 6px;
  --ytmusic-player-overlay-gradient: linear-gradient( rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 0, 0, 0) 40% ) !important;
}
/* end PlayPage song img styling */

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
  color: var(--ts-primary-text-color) !important;
}

ytmusic-player-bar:not([repeat-mode_=NONE]) .repeat.ytmusic-player-bar {
  color: var(--ts-primary-text-color) !important;
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
  --paper-slider-active-color: var(--ts-primary-text-color) !important;
  --paper-slider-knob-color: var(--ts-primary-text-color)  !important;
  --paper-slider-disabled-knob-color: var(--ts-primary-text-color)  !important;
  --paper-slider-knob-start-color: var(--ts-primary-text-color)  !important;
  --paper-slider-knob-start-border-color: var(--ts-primary-text-color)  !important;
}

/* end icons */

/* start rulers */
tp-yt-paper-tabs.ytmusic-player-page {
  --paper-tabs-selection-bar-color: var(--ts-primary-text-color) !important;
  --paper-tabs-content_-_color: var(--ts-primary-text-color) !important;
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
  color: var(--ts-primary-text-color) !important;
  border-bottom: 2px solid var(--ts-primary-text-color) !important;
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
  color: var(--ts-primary-text-color) !important;
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

ytmusic-player-bar tp-yt-paper-icon-button:hover {
  background: rgba(0,0,0,0.2) !important;
  border-radius: 50%;
}

ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]):hover button.ytmusic-navigation-button-renderer, ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]) button.ytmusic-navigation-button-renderer:focus-within {
  background: rgba(0,0,0,0.4) !important;
}

ytmusic-dropdown-renderer[dropdown-style=default] {
  background-color: var(--ts-picked-vibrant-alpha20) !important;
  border: 1px solid rgba(0,0,0,0.1) !important;
}

#delete.ytmusic-search-suggestion {
  color: rgba(0,0,0,0.5) !important;
}
#delete.ytmusic-search-suggestion:hover {
  color: rgba(0,0,0,0.7) !important;
}

#top-level-buttons.ytmusic-menu-renderer>.outline-button.ytmusic-menu-renderer, .edit-playlist-button.ytmusic-menu-renderer, ytmusic-toggle-button-renderer.ytmusic-menu-renderer {
  border: 1px solid var(--ts-primary-text-color) !important;
  border-radius: 2px;
  --yt-button-color: var(--ts-primary-text-color) !important;
}

yt-button-renderer.watch-button.ytmusic-menu-renderer {
  color: white !important;
  background-color: var(--ts-primary-text-color) !important;
}

ytmusic-shelf-renderer yt-button-renderer #button.yt-button-renderer {
  color: var(--ts-primary-text-color) !important;
}

.play-button.ytmusic-immersive-header-renderer, .radio-button.ytmusic-immersive-header-renderer {
  color: var(--ts-primary-text-color) !important;
  --yt-button-background-color: var(--ts-primary-text-color) !important;
  --yt-button-color: white !important;
}

tp-yt-paper-button.ytmusic-subscribe-button-renderer {
  color: rgba(0,0,0,0.8) !important;
  border: 1px solid rgba(0,0,0,0.8) !important;
}

ytmusic-toggle-button-renderer #button.ytmusic-toggle-button-renderer {
  color: var(--ts-primary-text-color) !important;
}

ytmusic-chip-cloud-chip-renderer:not([chip-style=STYLE_PRIMARY]):not([chip-style=STYLE_SECONDARY]):not([is-selected]) a.ytmusic-chip-cloud-chip-renderer {
  border: 1px solid rgba(0,0,0,0.1) !important;
  background: var(--ts-primary-text-color) !important;
  color: white !important;
  --yt-endpoint-hover-color: white !important;
  background: rgba(0,0,0,0.1) !important;
  color: var(--ts-primary-text-color) !important;
}

.more-button.ytmusic-shelf-renderer tp-yt-paper-button.ytmusic-shelf-renderer {
  color: rgba(0,0,0,0.7);
}
/* end buttons */

/* start TEXTS */
.song-title, 
.title, 
.text {
  color: var(--ts-primary-text-color) !important;
  --yt-endpoint-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-hover-color: rgba(0,0,0,0.8) !important;
  --yt-endpoint-visited-color: var(--ts-primary-text-color) !important;
  --ytmusic-text-primary: #000 !important;
  --ytmusic-text-secondary: #737373 !important;
  --ytmusic-text-disabled: #9b9b9b !important;
}

ytmusic-pivot-bar-item-renderer {
  color: rgba(0,0,0,0.5) !important;
  --yt-endpoint-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-visited-color: var(--ts-primary-text-color) !important;
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
  color: #303030 !important;
  --yt-endpoint-color: var(--ts-secondary-text-color) !important;
  --yt-endpoint-hover-color: var(--ts-secondary-text-color) !important;
  --yt-endpoint-visited-color: var(--ts-secondary-text-color) !important;
}


ytmusic-pivot-bar-item-renderer:hover, ytmusic-pivot-bar-item-renderer.iron-selected {
  color: var(--ts-primary-text-color) !important;
}

.time-info.ytmusic-player-bar {
  color: var(--ts-primary-text-color) !important;
}

ytmusic-item-section-tab-renderer.iron-selected .tab.ytmusic-item-section-tab-renderer, .tab.selected.ytmusic-item-section-tab-renderer {
  color: var(--ts-primary-text-color) !important;
  border-bottom: 2px solid var(--ts-primary-text-color) !important;
}

.tab {
  color: var(--ts-primary-text-color) !important;
}

.description.ytmusic-description-shelf-renderer {
  color: var(--ts-primary-text-color) !important;
}

.footer.ytmusic-description-shelf-renderer {
  color: var(--ts-primary-text-color) !important;
}

.container.ytmusic-custom-index-column-renderer {
  color: rgba(0,0,0,0.6) !important;
}

#hover-time-info {
  color: var(--ts-primary-text-color) !important;
}

ytmusic-search-box[has-query] input.ytmusic-search-box, ytmusic-search-box[opened] input.ytmusic-search-box {
  color: var(--ts-primary-text-color) !important;
}

#placeholder.ytmusic-search-box {
  color: rgba(0,0,0,0.5) !important;
}

tp-yt-paper-tab.iron-selected.ytmusic-player-page {
  color: var(--ts-primary-text-color) !important;
}

tp-yt-paper-tab.ytmusic-player-page {
  --paper-tab-ink: var(--ts-primary-text-color) !important;
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
  color: var(--ts-primary-text-color) !important;
  --yt-endpoint-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-visited-color: var(--ts-primary-text-color) !important;
}

#title.ytmusic-playlist-add-to-option-renderer {
  color: var(--ts-primary-text-color) !important;
  --yt-endpoint-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-visited-color: var(--ts-primary-text-color) !important;
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
  color: var(--ts-primary-text-color) !important;
  max-width: var(--ytmusic-detail-header-renderer-description-width);
  margin: 16px 0 0;
}

.description {
  color: var(--ts-primary-text-color) !important;
}

iron-input.tp-yt-paper-input > input.tp-yt-paper-input {
  color: var(--ts-primary-text-color);
}
/* end TEXTS */

/* start MAIN */
/* This can be specific since we would like to individually adjust these portions. */
body {
  background-color: var(--ts-mainbg-color);
}

#nav-bar-background {
  background-color: var(--ts-topnav-color) !important;
  transition: opacity 0.2s, var(--ts-bgcolor-transition) !important;
}

ytmusic-player-page {
  background-color: var(--ts-playpagebg-color);
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--ts-bgcolor-transition) !important;
}

#player-bar-background {
  background-color: var(--ts-playbar-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
}
ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--ts-playbar-color);
  transition: var(--ts-bgcolor-transition) !important;
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

/* start scrollbars */
::-webkit-scrollbar {
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: var(--ts-playbar-color);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(250, 250, 250, 0.342);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4) !important;
}

::-webkit-scrollbar-corner {
  background-color: var(--ts-playbar-color);
}

body::-webkit-scrollbar {

}

body::-webkit-scrollbar-track {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0,0,0,0.07);
}
/* end scrollbars */

${songImgStyles}
${universalstyles}
`;