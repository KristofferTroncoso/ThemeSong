import { universalstyles } from "../../universal/universalstyles";
import { songImgStyles } from "../../universal/songImgStyles";

export const apple_music_css = /*css*/ `
/* ThemeSong */
/* Apple Music Theme */

:root {
  --themesong-picked-vibrant-light50: var(--themesong-default-app-color);
  --themesong-palette-dominant-alpha10-color: var(--themesong-default-app-color);
  --themesong-picked-vibrant-alpha20: var(--themesong-default-app-color);

  --themesong-playpagebg-color: hsl(var(--themesong-theme-static-hue), var(--themesong-theme-static-saturation), var(--themesong-theme-static-playpagebg-light));
  
  --themesong-playpageavtoggle-color: hsl(var(--themesong-theme-static-hue), var(--themesong-theme-static-saturation), var(--themesong-theme-static-playpageavtoggle-light));

  --themesong-playprogress-color: var(--themesong-base-100-color);

  --themesong-primary-text-color: var(--themesong-base-100-color);
  --themesong-secondary-text-color: var(--themesong-base-90-color);
  --themesong-tertiary-text-color: var(--themesong-base-70-color);

  --themesong-bgcolor-transition: background-color 0.5s ease-out;

  --ytmusic-brand-background-solid: var(--themesong-playbarbg-color) !important;
  --ytmusic-general-background-a: var(--themesong-bodybg-color) !important;
  --ytmusic-general-background-c: var(--themesong-bodybg-color) !important;
  --ytmusic-text-primary: var(--themesong-base-100-color) !important;
  --ytmusic-text-secondary: var(--themesong-base-60-color) !important;
  --ytmusic-text-disabled: var(--themesong-base-40-color) !important;

  --ytmusic-overlay-text-secondary: var(--themesong-tertiary-text-color) !important;

  --ytmusic-10-percent-layer: var(--themesong-base-100-alpha-02-color) !important;
  --yt-spec-10-percent-layer: var(--themesong-base-100-alpha-02-color) !important;

  --ytmusic-search-background: var(--themesong-playbarbg-color) !important;
  --ytmusic-search-border: var(--themesong-base-100-alpha-04-color) !important;

  --ytmusic-divider: var(--themesong-base-100-alpha-03-color) !important;
  --ytmusic-menu-item-hover-background-color: var(--themesong-base-100-alpha-02-color) !important;

  --ytmusic-color-white1-alpha10: var(--themesong-palette-dominant-alpha20-color) !important;

  --yt-spec-text-primary-inverse: var(--themesong-base-00-color) !important;

  --ytmusic-setting-item-toggle-active: rgb(26, 115, 232) !important;
  --paper-toggle-button-checked-bar-opacity: 0.4 !important;
}


:root {
  --ytmusic-brand-background-solid: var(--themesong-playbarbg-color) !important;
  --ytmusic-general-background-a: var(--themesong-bodybg-color) !important;
  --ytmusic-general-background-c: var(--themesong-bodybg-color) !important;
  --ytmusic-text-primary: var(--themesong-base-100-color) !important;
  --ytmusic-text-secondary: var(--themesong-base-60-color) !important;
  --ytmusic-text-disabled: var(--themesong-base-40-color) !important;

  --ytmusic-overlay-text-secondary: var(--themesong-tertiary-text-color) !important;

  --ytmusic-10-percent-layer: var(--themesong-base-100-alpha-02-color) !important;
  --yt-spec-10-percent-layer: var(--themesong-base-100-alpha-02-color) !important;

  --ytmusic-search-background: var(--themesong-playbarbg-color) !important;
  --ytmusic-search-border: var(--themesong-base-100-alpha-04-color) !important;

  --ytmusic-divider: var(--themesong-base-100-alpha-03-color) !important;
  --ytmusic-menu-item-hover-background-color: var(--themesong-base-100-alpha-02-color) !important;

  --ytmusic-color-white1-alpha10: var(--themesong-palette-dominant-alpha20-color) !important;

  --yt-spec-text-primary-inverse: var(--themesong-base-00-color) !important;

  --ytmusic-setting-item-toggle-active: rgb(26, 115, 232) !important;
  --paper-toggle-button-checked-bar-opacity: 0.4 !important;
}

ytmusic-player {
  color: var(--ytmusic-text-primary);
}

ytmusic-player tp-yt-paper-icon-button {
  color: var(--themesong-base-100-color) !important;
}

ytmusic-player[player-ui-state_=MINIPLAYER] .song-media-controls.ytmusic-player {
  background: linear-gradient(var(--themesong-base-00-alpha-06-color) 0%,var(--themesong-base-00-alpha-06-color) 100%);
  padding: 12px;
}

/* start PlayPage song img styling */
ytmusic-player {
  /* below is like an accent gradient for the song img */
  /* box-shadow: 0 0 200px var(--themesong-palette-dominant-light50-color) !important; */
  --ytmusic-player-overlay-gradient: linear-gradient( var(--themesong-base-00-alpha-06-color) 0%, var(--themesong-base-100-alpha-00-color) 40% ) !important;
}
/* end PlayPage song img styling */

/* artist image var(--themesong-base-00-color) filter */
.image.ytmusic-immersive-header-renderer~.content-container-wrapper.ytmusic-immersive-header-renderer {
  background-color: var(--themesong-base-00-alpha-02-color) !important;
}

ytmusic-background-overlay-renderer {
  --ytmusic-background-overlay-background: linear-gradient(var(--themesong-base-00-alpha-06-color),var(--themesong-base-00-alpha-04-color),var(--themesong-base-00-alpha-01-color)) !important;
}


ytmusic-settings-page .title{
  color: var(--themesong-base-00-color) !important;
    --yt-endpoint-color: var(--themesong-base-00-color) !important;
    --yt-endpoint-hover-color: var(--themesong-base-00-alpha-08-color) !important;
    --yt-endpoint-visited-color: var(--themesong-base-00-color) !important;
    --ytmusic-text-primary: var(--themesong-base-00-color) !important;
    --ytmusic-text-secondary: var(--themesong-base-60-color) !important;
    --ytmusic-text-disabled: var(--themesong-base-40-color) !important;
}
/* start icons */
tp-yt-paper-icon-button  {
  /* color: var(--themesong-base-100-color) !important; */
  color: #d60017 !important;
}

ytmusic-two-row-item-renderer .content-wrapper.ytmusic-play-button-renderer {
  border-radius: 50%;
}

.content-wrapper.ytmusic-play-button-renderer {
  border-radius: 0;
}

/* playbarbg icons */

ytmusic-player-bar tp-yt-paper-icon-button  {
  /* color: var(--themesong-base-70-color) !important; */
  color: var(--themesong-base-70-color) !important;
}

.menu.ytmusic-player-bar {
  /* --iron-icon-fill-color: var(--themesong-base-100-alpha-05-color) !important; */
  --iron-icon-fill-color: var(--themesong-base-70-color) !important;
}

.left-controls.ytmusic-player-bar tp-yt-paper-icon-button.ytmusic-player-bar, .left-controls.ytmusic-player-bar .spinner-container.ytmusic-player-bar, .toggle-player-page-button.ytmusic-player-bar {
  /* --iron-icon-fill-color: var(--themesong-base-100-alpha-08-color) !important; */
  --iron-icon-fill-color: var(--themesong-base-90-color) !important;
}

ytmusic-player-bar {
  /* color: var(--themesong-base-100-alpha-05-color) !important; */
  color: var(--themesong-base-70-color) !important;
}

ytmusic-like-button-renderer[like-status=LIKE] .like.ytmusic-like-button-renderer, ytmusic-like-button-renderer[like-status=DISLIKE] .dislike.ytmusic-like-button-renderer {
  /* color: var(--themesong-primary-text-color) !important; */
  color: #d60017 !important;
}

ytmusic-player-bar:not([repeat-mode_=NONE]) .repeat.ytmusic-player-bar {
  color: var(--themesong-primary-text-color) !important;
}

ytmusic-play-button-renderer {
  --ytmusic-play-button-icon-color: var(--themesong-base-100-alpha-10-color) !important;
  --ytmusic-play-button-background-color: rgba(255,255,255,0.4) !important;
  --ytmusic-play-button-active-background-color: var(--themesong-base-00-color) !important;
}

#bezel.ytmusic-player {
  background-color: var(--themesong-base-00-alpha-08-color);
}
/* end playbarbg icons */

.cast-button.ytmusic-cast-button {
  --iron-icon-fill-color: var(--themesong-base-100-alpha-06-color) !important;
}

/* "Explicit" icon */
yt-icon.ytmusic-inline-badge-renderer {
  color: #d60017 !important;
}

ytd-multi-page-menu-renderer.ytmusic-popup-container {
  --yt-spec-call-to-action: rgba(24,2,200,0.8) !important;
  --yt-endpoint-hover-color: #3ea6ff;
  --yt-compact-link-icon-color: var(--themesong-base-100-alpha-06-color) !important;
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

.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
  --paper-slider-container-color: var(--themesong-base-70-color) !important;
  --paper-slider-active-color: var(--themesong-primary-text-color) !important;
  --paper-slider-knob-color: var(--themesong-primary-text-color)  !important;
  --paper-slider-disabled-knob-color: var(--themesong-primary-text-color)  !important;
  --paper-slider-knob-start-color: var(--themesong-primary-text-color)  !important;
  --paper-slider-knob-start-border-color: var(--themesong-primary-text-color)  !important;
}

tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer {
  border: solid 1px var(--themesong-base-100-alpha-03-color);
}

tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer:hover {
  background-color: var(--themesong-palette-dominant-alpha20-color);
}

/* end icons */

/* start rulers */
tp-yt-paper-tabs.ytmusic-player-page {
  --paper-tabs-selection-bar-color: var(--themesong-primary-text-color) !important;
  --paper-tabs-content_-_color: var(--themesong-primary-text-color) !important;
}

ytmusic-player-queue-item {
  border-bottom: 1px solid var(--themesong-base-100-alpha-03-color);
}

tp-yt-paper-listbox.ytmusic-menu-popup-renderer {
  border: 1px solid var(--themesong-base-100-alpha-02-color);
}

#end-items.ytmusic-item-section-tabbed-header-renderer {
  border-top: 1px solid var(--themesong-base-100-alpha-02-color) !important;
}

#nav-bar-divider.ytmusic-app-layout {
  border-top: 1px solid var(--themesong-base-100-alpha-02-color) !important;
}

ytmusic-playlist-add-to-option-renderer:hover {
  background-color: var(--themesong-base-100-alpha-02-color) !important;
}

#suggestions.ytmusic-search-suggestions-section>.ytmusic-search-suggestions-section:hover, ytmusic-search-suggestions-section:not([is-entity-search-suggestions-enabled]) #suggestions.ytmusic-search-suggestions-section>.selected-suggestion.ytmusic-search-suggestions-section {
  background-color: var(--themesong-base-100-alpha-02-color) !important;
}

tp-yt-paper-listbox > .ytmusic-menu-popup-renderer:hover {
  background-color: var(--themesong-base-100-alpha-02-color) !important;
}

ytmusic-tabs.iron-selected .tab.ytmusic-tabs, .tab.selected.ytmusic-tabs {
  color: var(--themesong-primary-text-color) !important;
  border-bottom: 2px solid var(--themesong-primary-text-color) !important;
}

.tab-container.ytmusic-tabs {
  border-bottom: 1px solid var(--themesong-base-100-alpha-01-color) !important;
}

ytmusic-add-to-playlist-renderer {
  border: 1px solid var(--themesong-base-100-alpha-02-color) !important;
}

ytmusic-carousel-shelf-renderer.ytmusic-add-to-playlist-renderer:not(:empty) {
  border-bottom: 1px solid var(--themesong-base-100-alpha-02-color) !important;
}

.top-bar.ytmusic-add-to-playlist-renderer {
  border-bottom: 1px solid var(--themesong-base-100-alpha-02-color) !important;
}

#contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid var(--themesong-base-100-alpha-02-color) !important;
}

#contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid var(--themesong-base-100-alpha-02-color) !important;
}
/* end rulers */

/* start buttons */
button.ytmusic-navigation-button-renderer {
  font-family: Roboto,Noto Naskh Arabic UI,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--themesong-primary-text-color) !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: start;
  padding: 0 12px;
  text-transform: none;
  border: none;
  background: var(--themesong-base-100-alpha-02-color) !important;
  transition: background-color 0.2s cubic-bezier(0.2,0,0.6,1);
  var(--themesong-base-00-color)-space: normal;
}

ytmusic-player-bar tp-yt-paper-icon-button:hover {
  background: var(--themesong-base-100-alpha-02-color) !important;
  border-radius: 50%;
}

ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]):hover button.ytmusic-navigation-button-renderer, ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]) button.ytmusic-navigation-button-renderer:focus-within {
  background: var(--themesong-base-100-alpha-04-color) !important;
}

ytmusic-dropdown-renderer[dropdown-style=default] {
  background-color: var(--themesong-palette-dominant-alpha20-color) !important;
  border: 1px solid var(--themesong-base-100-alpha-01-color) !important;
}

#delete.ytmusic-search-suggestion {
  color: var(--themesong-base-100-alpha-05-color) !important;
}
#delete.ytmusic-search-suggestion:hover {
  color: var(--themesong-base-100-alpha-07-color) !important;
}

#top-level-buttons.ytmusic-menu-renderer>.outline-button.ytmusic-menu-renderer, .edit-playlist-button.ytmusic-menu-renderer, ytmusic-toggle-button-renderer.ytmusic-menu-renderer {
  border: 1px solid var(--themesong-primary-text-color) !important;
  border-radius: 2px;
  --yt-button-color: var(--themesong-primary-text-color) !important;
}

yt-button-renderer.watch-button.ytmusic-menu-renderer {
  color: var(--themesong-base-00-color) !important;
  background-color: var(--themesong-primary-text-color) !important;
}

ytmusic-shelf-renderer yt-button-renderer #button.yt-button-renderer {
  color: var(--themesong-primary-text-color) !important;
}

.play-button.ytmusic-immersive-header-renderer, .radio-button.ytmusic-immersive-header-renderer {
  color: var(--themesong-primary-text-color) !important;
  --yt-button-background-color: var(--themesong-primary-text-color) !important;
  --yt-button-color: var(--themesong-base-00-color) !important;
}

tp-yt-paper-button.ytmusic-subscribe-button-renderer {
  color: var(--themesong-base-100-alpha-08-color) !important;
  border: 1px solid var(--themesong-base-100-alpha-08-color) !important;
}

ytmusic-toggle-button-renderer #button.ytmusic-toggle-button-renderer {
  color: var(--themesong-primary-text-color) !important;
}

ytmusic-chip-cloud-chip-renderer:not([chip-style=STYLE_PRIMARY]):not([chip-style=STYLE_SECONDARY]):not([is-selected]) a.ytmusic-chip-cloud-chip-renderer {
  border: 1px solid var(--themesong-base-100-alpha-01-color) !important;
  background: var(--themesong-primary-text-color) !important;
  color: var(--themesong-base-00-color) !important;
  --yt-endpoint-hover-color: var(--themesong-base-00-color) !important;
  background: var(--themesong-base-100-alpha-01-color) !important;
  color: var(--themesong-primary-text-color) !important;
}

.more-button.ytmusic-shelf-renderer tp-yt-paper-button.ytmusic-shelf-renderer {
  color: var(--themesong-base-100-alpha-07-color);
}
/* end buttons */

/* start TEXTS */
.song-title, 
.title, 
.text {
  color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--themesong-base-100-alpha-08-color) !important;
  --yt-endpoint-visited-color: var(--themesong-primary-text-color) !important;
  --ytmusic-text-primary: var(--themesong-base-100-color) !important;
  --ytmusic-text-secondary: var(--themesong-base-60-color) !important;
  --ytmusic-text-disabled: var(--themesong-base-40-color) !important;
}

ytmusic-pivot-bar-item-renderer {
  color: var(--themesong-base-100-alpha-05-color) !important;
  --yt-endpoint-color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-visited-color: var(--themesong-primary-text-color) !important;
}

ytmusic-unified-share-panel-renderer #title, #share-url {
  color: var(--themesong-base-00-color) !important;
  --yt-endpoint-color: var(--themesong-base-00-color) !important;
  --yt-endpoint-hover-color: var(--themesong-base-00-alpha-08-color) !important;
  --yt-endpoint-visited-color: var(--themesong-base-00-color) !important;
  --ytmusic-text-primary: var(--themesong-base-00-color) !important;
  --ytmusic-text-secondary: var(--themesong-base-60-color) !important;
  --ytmusic-text-disabled: var(--themesong-base-40-color) !important;
}

.duration.ytmusic-player-queue-item, .byline.ytmusic-player-queue-item {
  color: var(--themesong-secondary-text-color) !important;
  --yt-endpoint-color: var(--themesong-secondary-text-color) !important;
  --yt-endpoint-hover-color: var(--themesong-secondary-text-color) !important;
  --yt-endpoint-visited-color: var(--themesong-secondary-text-color) !important;
}


ytmusic-pivot-bar-item-renderer:hover, ytmusic-pivot-bar-item-renderer.iron-selected {
  color: var(--themesong-primary-text-color) !important;
}

.time-info.ytmusic-player-bar {
  color: var(--themesong-primary-text-color) !important;
}

ytmusic-item-section-tab-renderer.iron-selected .tab.ytmusic-item-section-tab-renderer, .tab.selected.ytmusic-item-section-tab-renderer {
  color: var(--themesong-primary-text-color) !important;
  border-bottom: 2px solid var(--themesong-primary-text-color) !important;
}

.tab {
  color: var(--themesong-primary-text-color) !important;
}

.description.ytmusic-description-shelf-renderer {
  color: var(--themesong-primary-text-color) !important;
}

.footer.ytmusic-description-shelf-renderer {
  color: var(--themesong-primary-text-color) !important;
}

.container.ytmusic-custom-index-column-renderer {
  color: var(--themesong-base-100-alpha-06-color) !important;
}

#hover-time-info {
  color: var(--themesong-primary-text-color) !important;
}

ytmusic-search-box[has-query] input.ytmusic-search-box, ytmusic-search-box[opened] input.ytmusic-search-box {
  color: var(--themesong-primary-text-color) !important;
}

#placeholder.ytmusic-search-box {
  color: var(--themesong-base-100-alpha-05-color) !important;
}

tp-yt-paper-tab.iron-selected.ytmusic-player-page {
  color: var(--themesong-primary-text-color) !important;
}

tp-yt-paper-tab.ytmusic-player-page {
  --paper-tab-ink: var(--themesong-primary-text-color) !important;
  color: var(--themesong-base-100-alpha-06-color) !important;
}

tp-yt-paper-tab.ytmusic-player-page[disabled] {
  color: var(--themesong-base-100-alpha-03-color) !important;
}

ytmusic-search-box[opened] input.ytmusic-search-box::-webkit-input-placeholder {
  color: var(--themesong-base-100-alpha-05-color) !important;
}

ytmusic-search-box[opened] input.ytmusic-search-box::placeholder {
  color: var(--themesong-base-100-alpha-05-color) !important;
}

.section-heading.ytmusic-add-to-playlist-renderer {
  color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-visited-color: var(--themesong-primary-text-color) !important;
}

#title.ytmusic-playlist-add-to-option-renderer {
  color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--themesong-primary-text-color) !important;
  --yt-endpoint-visited-color: var(--themesong-primary-text-color) !important;
}

ytmusic-two-row-item-renderer[item-size=COLLECTION_STYLE_ITEM_SIZE_SMALL_STATIC] .details.ytmusic-two-row-item-renderer .subtitle.ytmusic-two-row-item-renderer {
  color: var(--themesong-base-100-alpha-07-color) !important;
}

.autoplay.ytmusic-tab-renderer .subtitle.ytmusic-tab-renderer {
  color: var(--themesong-base-100-alpha-07-color) !important;
}

.description.ytmusic-detail-header-renderer {
  font-family: Roboto,Noto Naskh Arabic UI,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: var(--ytmusic-body-line-height);
  color: var(--themesong-primary-text-color) !important;
  max-width: var(--ytmusic-detail-header-renderer-description-width);
  margin: 16px 0 0;
}

.description {
  color: var(--themesong-primary-text-color) !important;
}

iron-input.tp-yt-paper-input > input.tp-yt-paper-input {
  color: var(--themesong-primary-text-color);
}
/* end TEXTS */

/* start MAIN */
/* This can be specific since we would like to individually adjust these portions. */
body {
  background: var(--themesong-bodybg-color) !important;
}

.background-gradient {
  background: var(--themesong-bodybg-color) !important;
}

#nav-bar-background {
  background: var(--themesong-topbarbg-color) !important;
  backdrop-filter: blur(12px);
  transition: opacity 0.2s, var(--themesong-bgcolor-transition) !important;
}

ytmusic-player-page {
  background: var(--themesong-playpagebg-color);
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--themesong-bgcolor-transition) !important;
}

#player-bar-background {
  background: var(--themesong-playbarbg-color) !important;
  backdrop-filter: blur(12px);
  transition: var(--themesong-bgcolor-transition) !important;
}
ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--themesong-playbarbg-color);
  transition: var(--themesong-bgcolor-transition) !important;
}

ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  background: var(--themesong-topbarbg-color);
  backdrop-filter: blur(12px);
}

ytmusic-tabs.stuck {
  background: var(--themesong-topbarbg-color);
  backdrop-filter: blur(12px);
}

ytmusic-av-toggle[playback-mode=ATV_PREFERRED] .song-button.ytmusic-av-toggle {
  background: var(--themesong-playpageavtoggle-color);
}

ytmusic-av-toggle[playback-mode=OMV_PREFERRED] .video-button.ytmusic-av-toggle {
  background: var(--themesong-playpageavtoggle-color);
}

tp-yt-iron-dropdown {
  backdrop-filter: blur(14px);
}

ytmusic-search-box {
  backdrop-filter: blur(14px);
}
/* end main */


/* --- now playing progress bar color ---- */
#progress-bar.ytmusic-player-bar {
  --paper-slider-active-color: var(--themesong-playprogress-color) !important;
  --paper-slider-secondary-color: var(--themesong-base-100-alpha-02-color) !important;
  --paper-slider-container-color: var(--themesong-base-100-alpha-01-color) !important;

}

#progress-bar.ytmusic-player-bar[focused], ytmusic-player-bar:hover #progress-bar.ytmusic-player-bar {
  --paper-slider-knob-color: var(--themesong-playprogress-color) !important;
  --paper-slider-knob-start-color: var(--themesong-playprogress-color) !important;
  --paper-slider-knob-start-border-color: var(--themesong-playprogress-color) !important;
}
/* --- end now playing progress bar color ---- */

/* start scrollbars */
::-webkit-scrollbar {
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: var(--themesong-playbarbg-color);
}

::-webkit-scrollbar-thumb {
  background-color: var(--themesong-base-100-alpha-02-color) !important;
  border: 1px solid var(--themesong-base-00-alpha-03-color);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--themesong-base-100-alpha-04-color) !important;
}

::-webkit-scrollbar-corner {
  background-color: var(--themesong-playbarbg-color);
}

body::-webkit-scrollbar {

}

body::-webkit-scrollbar-track {
  border-left: 1px solid var(--themesong-base-100-alpha-01-color);
  border-top: 1px solid var(--themesong-base-100-alpha-01-color);
  background-color: var(--themesong-base-100-alpha-01-color);
}
/* end scrollbars */

${songImgStyles}
${universalstyles}
`;
