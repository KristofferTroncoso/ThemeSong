export const static_light_css = /*css*/`
/* ThemeSong */
/* Static Light Theme */

html {
  --ts-default-app-color: #ebebeb;

  --ts-color-two: black;
  --ts-color-three: rgba(0, 0, 0, 0.8);
  --ts-color-four: rgba(0, 0, 0, 0.25);
  --ts-color-five: rgba(0, 0, 0, 0.6);
  --ts-color-six: rgba(0, 0, 0, 0.1);
  --ts-color-seven: #333333;

  --ts-topnav-color: var(--ts-default-app-color);
  --ts-mainbg-color: var(--ts-default-app-color);
  --ts-playpagebg-color: var(--ts-default-app-color);
  --ts-playbar-color: var(--ts-default-app-color);
  --ts-playpageavtoggle-color: var(--ts-default-app-color);

  --ts-playprogress-color: var(--ts-color-two) !important;

  --ytmusic-general-background-c: var(--ts-mainbg-color) !important;
  --ytmusic-search-background: var(--ts-playbar-color) !important;
  --ytmusic-brand-background-solid: var(--ts-playbar-color) !important;
  --yt-spec-10-percent-layer: rgba(0, 0, 0, 0.2) !important;

  --ytmusic-text-primary: var(--ts-color-two) !important;
  --yt-endpoint-color: var(--ts-color-two) !important;
  --yt-endpoint-hover-color: var(--ts-color-two) !important;
  --yt-endpoint-visited-color: var(--ts-color-two) !important;
  --ytmusic-overlay-text-secondary: var(--ts-color-three) !important;
}

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

/* main */
body {
  background-color: var(--ts-mainbg-color) !important;
  color: var(--ts-color-two) !important;
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
  background-color: var(--ts-playbar-color) !important;
  border: 1px solid rgba(0, 0, 0, 0.3) !important;
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

/* start text */
.text {
  color: black !important;
}
/* end text */

/* start title */
.title {
  color: black !important;
}
/* end title */

button.ytmusic-sort-filter-button-renderer {
  color: black;
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(0,0,0,0.1);
}

ytmusic-app {
  color: var(--ts-color-two) !important;
}

ytmusic-player {
  --ytmusic-player-overlay-gradient: linear-gradient( rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.3) 35%, rgba(255, 255, 255, 0) 100% );
}

ytmusic-background-overlay-renderer {
  --ytmusic-background-overlay-background: linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.3)) !important;
}

.tab-container.ytmusic-tabs {
  border-bottom: 1px solid rgba(0,0,0,0.2);
}

ytmusic-two-row-item-renderer[item-size=COLLECTION_STYLE_ITEM_SIZE_SMALL_STATIC] .details.ytmusic-two-row-item-renderer .subtitle.ytmusic-two-row-item-renderer {
  color: rgba(0,0,0,0.7);
}

ytmusic-playlist-add-to-option-renderer:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
}

.top-bar.ytmusic-add-to-playlist-renderer {
  border-bottom: 1px solid rgba(0,0,0,0.2);
}

ytmusic-carousel-shelf-renderer.ytmusic-add-to-playlist-renderer:not(:empty) {
  border-bottom: 1px solid rgba(0,0,0,0.2);
}

ytmusic-search-box yt-formatted-string {
  color: rgba(0, 0, 0, 0.8) !important;
}

tp-yt-paper-icon-button.ytmusic-search-box, input.ytmusic-search-box, input.ytmusic-search-box::placeholder {
  color: rgba(0, 0, 0, 0.6) !important;
}

ytmusic-search-box[opened], ytmusic-search-box[has-query] {
  border: 1px solid rgba(0, 0, 0, 0.3);
}

ytmusic-search-suggestions-section.ytmusic-search-box {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}

#delete.ytmusic-search-suggestion {
  color: rgba(0, 0, 0, 0.9);
}


#suggestions.ytmusic-search-suggestions-section>.ytmusic-search-suggestions-section:hover, ytmusic-search-suggestions-section:not([is-entity-search-suggestions-enabled]) #suggestions.ytmusic-search-suggestions-section>.selected-suggestion.ytmusic-search-suggestions-section {
  background-color: rgba(0, 0, 0, 0.2);
}

tp-yt-paper-listbox > .ytmusic-menu-popup-renderer:hover {
  background-color: rgba(0, 0, 0, 0.15) !important;
}

ytmusic-add-to-playlist-renderer {
  background-color: var(--ts-playbar-color);
  border: 1px solid rgba(0, 0, 0, 0.3);
}

#title.ytmusic-playlist-add-to-option-renderer {
  color: black;
  --yt-endpoint-color: black;
  --yt-endpoint-hover-color: black;
  --yt-endpoint-visited-color: black;
}

.section-heading.ytmusic-add-to-playlist-renderer {
  color: black;
  --yt-endpoint-color: black;
  --yt-endpoint-hover-color: black;
  --yt-endpoint-visited-color: black;
}




ytmusic-responsive-list-item-renderer[play-button-state=loading], ytmusic-responsive-list-item-renderer[play-button-state=playing], ytmusic-responsive-list-item-renderer[play-button-state=paused] {
  background-color: rgba(0, 0, 0, 0.1);
}

#contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

ytmusic-pivot-bar-item-renderer {
  color: var(--ts-color-five) !important;

}

ytmusic-pivot-bar-item-renderer:hover {
  color: var(--ts-color-two) !important;

}


ytmusic-pivot-bar-item-renderer.iron-selected {
  color: var(--ts-color-two) !important;

}

yt-button-renderer {
  color: white !important;
  background: black !important;
}

#end-items.ytmusic-item-section-tabbed-header-renderer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

ytmusic-dropdown-renderer[dropdown-style=default] {
  background-color: rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.1);
}

.strapline.ytmusic-carousel-shelf-basic-header-renderer {
  color: var(--ts-color-seven) !important;
}

yt-icon {
  fill: var(--ts-color-seven) !important;
}

.left-controls.ytmusic-player-bar tp-yt-paper-icon-button.ytmusic-player-bar, .left-controls.ytmusic-player-bar .spinner-container.ytmusic-player-bar, .toggle-player-page-button.ytmusic-player-bar {
  --iron-icon-fill-color: var(--ts-color-two) !important;
}

ytmusic-player-bar {
  color: var(--ts-color-seven) !important;
}

tp-yt-paper-icon-button.ytmusic-like-button-renderer {
  color: var(--ts-color-seven) !important;
}

tp-yt-paper-tab.iron-selected.ytmusic-player-page {
  color: var(--ts-color-two) !important;
}

ytmusic-player-queue-item {
  border-bottom: 1px solid var(--ts-color-four) !important;
}


#nav-bar-divider.ytmusic-app-layout {
  border-top: 1px solid var(--ts-color-four) !important;
  box-shadow: 0 0 5px black !important;
}

#selectionBar.tp-yt-paper-tabs {
  border-top: 1px solid var(--ts-color-five) !important;
  border-bottom: 2px solid var(--ts-color-five) !important;
}

tp-yt-paper-tab.ytmusic-player-page {
  color: rgba(0, 0, 0, 0.7) !important;
}

tp-yt-paper-tab.iron-selected.ytmusic-player-page {
  color: black !important;
}

tp-yt-paper-tab.ytmusic-player-page[disabled] {
  color: rgba(0, 0, 0, 0.3) !important;
}

tp-yt-iron-icon {
  fill: var(--ts-color-seven, currentcolor) !important;
}


.time-info.ytmusic-player-bar {
  color: var(--ts-color-seven, currentcolor) !important;
}






.container.ytmusic-custom-index-column-renderer {
  color: var(--ts-color-two) !important;
}

.description.ytmusic-detail-header-renderer {
  color: var(--ts-color-two) !important;
}

ytmusic-toggle-button-renderer #button.ytmusic-toggle-button-renderer {
  color: var(--ts-color-two) !important;
}





.song-title.ytmusic-player-queue-item {
  color: var(--ts-color-two) !important;
}

.duration.ytmusic-player-queue-item, .byline.ytmusic-player-queue-item {
  color: var(--ts-color-three) !important;
}


button.ytmusic-navigation-button-renderer {
  color: var(--ts-color-three) !important;
  background: var(--ts-color-four) !important;
}




#contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid var(--ts-color-six) !important;
}


yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
  color: var(--ts-color-two) !important;
}


.description.ytmusic-description-shelf-renderer {
  color: var(--ts-color-two) !important;
}


tp-yt-paper-tabs.ytmusic-player-page {
  border-bottom: 1px solid var(--ts-color-four) !important;
}


ytmusic-search-box {
  color: rgba(0, 0, 0, 0.5) !important;
}


ytmusic-item-section-tab-renderer.iron-selected .tab.ytmusic-item-section-tab-renderer, .tab.selected.ytmusic-item-section-tab-renderer {
  color: var(--ts-color-two) !important;
  border-bottom: 2px solid var(--ts-color-two) !important;
}


.tab.ytmusic-item-section-tab-renderer {
  color: rgba(0, 0, 0, 0.7) !important;

}

ytmusic-player-queue-item[play-button-state=loading], ytmusic-player-queue-item[play-button-state=playing], ytmusic-player-queue-item[play-button-state=paused] {
  background-color: var(--ts-color-six) !important;
}


.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
  width: 100px;
  --paper-slider-container-color: #525252 !important;
  --paper-slider-active-color: var(--ts-color-two) !important;
  --paper-slider-knob-color: var(--ts-color-two) !important;
  --paper-slider-disabled-knob-color: var(--ts-color-two) !important;
  --paper-slider-knob-start-color: var(--ts-color-two) !important;
  --paper-slider-knob-start-border-color: var(--ts-color-two) !important;
}


.more-button.ytmusic-shelf-renderer tp-yt-paper-button.ytmusic-shelf-renderer {
  color: var(--ts-color-three) !important;
}


.autoplay.ytmusic-tab-renderer .subtitle.ytmusic-tab-renderer {
  color: var(--ts-color-seven) !important;
}



ytmusic-chip-cloud-chip-renderer:not([chip-style=STYLE_PRIMARY]):not([chip-style=STYLE_SECONDARY]):not([is-selected]) a.ytmusic-chip-cloud-chip-renderer {
  border: 1px solid var(--ts-color-six) !important;
  background: black !important;
  color: #030303 !important;
  --yt-endpoint-hover-color: #030303;
  background: var(--ts-color-six) !important;
  color: black !important;
}

ytmusic-tabs.iron-selected .tab.ytmusic-tabs, .tab.selected.ytmusic-tabs {
  color: black !important;
  border-bottom: 2px solid black !important;
}

ytmusic-toggle-menu-service-item-renderer {
  --iron-icon-fill-color: black !important;
}



.tab.ytmusic-tabs {
  color: rgba(0, 0, 0, 0.5) !important;
}



/* --- now playing progress bar color ---- */
#progress-bar.ytmusic-player-bar {
  --paper-slider-active-color: var(--ts-playprogress-color) !important;
  --paper-slider-secondary-color: var(--ts-color-six) !important;
  --paper-slider-container-color: var(--ts-color-six) !important;
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
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(250, 250, 250, 0.342);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4) !important;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}


`;