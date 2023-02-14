export const texts_and_icons = /*css*/ `
:root {
  --ts-primary-text-color: var(--ts-base-100-color);
  --ts-secondary-text-color: var(--ts-base-80-color);
  --ts-tertiary-text-color: var(--ts-base-70-color);

  --ts-primary-icon-color: var(--ts-base-100-color);
  --ts-secondary-icon-color: var(--ts-base-80-color);
  --ts-tertiary-icon-color: var(--ts-base-70-color);
}

:root {
  --ytmusic-text-primary: var(--ts-base-100-color) !important;
  --ytmusic-text-secondary: var(--ts-base-60-color) !important;
  --ytmusic-text-disabled: var(--ts-base-40-color) !important;

  --ytmusic-overlay-text-secondary: var(--ts-tertiary-text-color) !important;

  
  --ytmusic-10-percent-layer: var(--ts-base-100-alpha-02-color) !important;
  --yt-spec-10-percent-layer: var(--ts-base-100-alpha-02-color) !important;

  --ytmusic-search-background: var(--ts-playbarbg-color) !important;
  --ytmusic-search-border: var(--ts-base-100-alpha-04-color) !important;

  --ytmusic-divider: var(--ts-base-100-alpha-03-color) !important;
  --ytmusic-menu-item-hover-background-color: var(--ts-base-100-alpha-02-color) !important;

  /* the transparent bg filter on the now playing song on a list */
  --ytmusic-color-white1-alpha10: hsla(var(--ts-palette-dominant-hue), var(--ts-palette-dominant-saturation), var(--ts-palette-dominant-light), 0.2); !important;

  --yt-spec-text-primary-inverse: var(--ts-base-00-color) !important;

  --ytmusic-setting-item-toggle-active: rgb(26, 115, 232) !important;
  --paper-toggle-button-checked-bar-opacity: 0.4 !important;


  /* button border for some buttons like "More" */
  --yt-spec-outline: rgba(0,0,0,0.1) !important;
}

/* search box icons color */
ytmusic-search-suggestion {
  --iron-icon-fill-color: rgba(0,0,0,0.5);
}

ytmusic-settings-page .title{
  color: var(--ts-base-00-color) !important;
    --yt-endpoint-color: var(--ts-base-00-color) !important;
    --yt-endpoint-hover-color: var(--ts-base-00-alpha-08-color) !important;
    --yt-endpoint-visited-color: var(--ts-base-00-color) !important;
    --ytmusic-text-primary: var(--ts-base-00-color) !important;
    --ytmusic-text-secondary: var(--ts-base-60-color) !important;
    --ytmusic-text-disabled: var(--ts-base-40-color) !important;
}
/* start icons */
tp-yt-paper-icon-button  {
  color: var(--ts-base-100-color) !important;
}

/* play button; seen on home page album images */
ytmusic-play-button-renderer {
  --ytmusic-play-button-icon-color: var(--ts-base-100-color) !important;
  /* --ytmusic-play-button-background-color: var(--ts-base-00-alpha-03-color) !important; */
  /* --ytmusic-play-button-active-background-color: var(--ts-base-00-alpha-03-color) !important; */
}

ytmusic-two-row-item-renderer .content-wrapper.ytmusic-play-button-renderer {
  border-radius: 50%;
}

.content-wrapper.ytmusic-play-button-renderer {
  border-radius: 0;
}

/* playbarbg icons */

ytmusic-player-bar tp-yt-paper-icon-button  {
  color: var(--ts-base-70-color) !important;
}

.menu.ytmusic-player-bar {
  --iron-icon-fill-color: var(--ts-base-100-alpha-05-color) !important;
}

.left-controls.ytmusic-player-bar tp-yt-paper-icon-button.ytmusic-player-bar, .left-controls.ytmusic-player-bar .spinner-container.ytmusic-player-bar, .toggle-player-page-button.ytmusic-player-bar {
  --iron-icon-fill-color: var(--ts-base-100-alpha-08-color) !important;
}

ytmusic-player-bar {
  color: var(--ts-base-100-alpha-05-color) !important;
}

ytmusic-like-button-renderer[like-status=LIKE] .like.ytmusic-like-button-renderer, ytmusic-like-button-renderer[like-status=DISLIKE] .dislike.ytmusic-like-button-renderer {
  color: var(--ts-primary-text-color) !important;
}

ytmusic-player-bar:not([repeat-mode_=NONE]) .repeat.ytmusic-player-bar {
  color: var(--ts-primary-text-color) !important;
}

#bezel.ytmusic-player {
  background-color: var(--ts-base-00-alpha-08-color);
}
/* end playbarbg icons */

.cast-button.ytmusic-cast-button {
  --iron-icon-fill-color: var(--ts-base-100-alpha-06-color) !important;
}

/* "Explicit" icon */
yt-icon.ytmusic-inline-badge-renderer {
  color: var(--ts-base-100-alpha-06-color) !important;
}

ytd-multi-page-menu-renderer.ytmusic-popup-container {
  --yt-spec-call-to-action: rgba(24,2,200,0.8) !important;
  --yt-endpoint-hover-color: #3ea6ff;
  --yt-compact-link-icon-color: var(--ts-base-100-alpha-06-color) !important;
}

a.ytmusic-icon-link-renderer {
  color: var(--ts-base-100-alpha-08-color) !important;
}

yt-icon.ytmusic-navigation-button-renderer {
  color: var(--ts-base-100-alpha-06-color) !important;
}

.icon.ytmusic-menu-navigation-item-renderer {
  fill: var(--ts-base-100-alpha-06-color) !important;
}

.icon.ytmusic-menu-service-item-renderer {
  fill: var(--ts-base-100-alpha-06-color) !important;
}

.icon.ytmusic-toggle-menu-service-item-renderer {
  fill: var(--ts-base-100-alpha-06-color) !important;
}

.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
  --paper-slider-container-color: var(--ts-base-60-color) !important;
  --paper-slider-active-color: var(--ts-primary-text-color) !important;
  --paper-slider-knob-color: var(--ts-primary-text-color)  !important;
  --paper-slider-disabled-knob-color: var(--ts-primary-text-color)  !important;
  --paper-slider-knob-start-color: var(--ts-primary-text-color)  !important;
  --paper-slider-knob-start-border-color: var(--ts-primary-text-color)  !important;
}

tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer {
  border: solid 1px var(--ts-base-100-alpha-03-color);
}

tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer:hover {
  background-color: hsla(var(--ts-palette-dominant-hue), var(--ts-palette-dominant-saturation), var(--ts-palette-dominant-light), 0.2);;
}

/* end icons */

/* start rulers */
tp-yt-paper-tabs.ytmusic-player-page {
  --paper-tabs-selection-bar-color: var(--ts-primary-text-color) !important;
  --paper-tabs-content_-_color: var(--ts-primary-text-color) !important;
}

ytmusic-player-queue-item {
  border-bottom: 1px solid var(--ts-base-100-alpha-03-color);
}

tp-yt-paper-listbox.ytmusic-menu-popup-renderer {
  border: 1px solid var(--ts-base-100-alpha-02-color);
}

#end-items.ytmusic-item-section-tabbed-header-renderer {
  border-top: 1px solid var(--ts-base-100-alpha-02-color) !important;
}

#nav-bar-divider.ytmusic-app-layout {
  border-top: 1px solid var(--ts-base-100-alpha-02-color) !important;
}

ytmusic-playlist-add-to-option-renderer:hover {
  background-color: var(--ts-base-100-alpha-02-color) !important;
}

#suggestions.ytmusic-search-suggestions-section>.ytmusic-search-suggestions-section:hover, ytmusic-search-suggestions-section:not([is-entity-search-suggestions-enabled]) #suggestions.ytmusic-search-suggestions-section>.selected-suggestion.ytmusic-search-suggestions-section {
  background-color: var(--ts-base-100-alpha-02-color) !important;
}

tp-yt-paper-listbox > .ytmusic-menu-popup-renderer:hover {
  background-color: var(--ts-base-100-alpha-01-color) !important;
}

ytmusic-tabs.iron-selected .tab.ytmusic-tabs, .tab.selected.ytmusic-tabs {
  color: var(--ts-primary-text-color) !important;
  border-bottom: 2px solid var(--ts-primary-text-color) !important;
}

.tab-container.ytmusic-tabs {
  border-bottom: 1px solid var(--ts-base-100-alpha-01-color) !important;
}

ytmusic-add-to-playlist-renderer {
  border: 1px solid var(--ts-base-100-alpha-02-color) !important;
}

ytmusic-carousel-shelf-renderer.ytmusic-add-to-playlist-renderer:not(:empty) {
  border-bottom: 1px solid var(--ts-base-100-alpha-02-color) !important;
}

.top-bar.ytmusic-add-to-playlist-renderer {
  border-bottom: 1px solid var(--ts-base-100-alpha-02-color) !important;
}

#contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid var(--ts-base-100-alpha-02-color) !important;
}

#contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
  border-bottom: 1px solid var(--ts-base-100-alpha-02-color) !important;
}
/* end rulers */

/* start buttons */
button.ytmusic-navigation-button-renderer {
  color: var(--ts-primary-text-color) !important;
  background: var(--ts-base-100-alpha-01-color) !important;
}

ytmusic-player-bar tp-yt-paper-icon-button:hover {
  background: var(--ts-base-100-alpha-02-color) !important;
}

ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]):hover button.ytmusic-navigation-button-renderer, ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]) button.ytmusic-navigation-button-renderer:focus-within {
  background: var(--ts-base-100-alpha-04-color) !important;
}

ytmusic-dropdown-renderer[dropdown-style=default] {
  background-color: hsla(var(--ts-palette-dominant-hue), var(--ts-palette-dominant-saturation), var(--ts-palette-dominant-light), 0.2); !important;
  border: 1px solid var(--ts-base-100-alpha-01-color) !important;
}

#delete.ytmusic-search-suggestion {
  color: var(--ts-base-100-alpha-05-color) !important;
}
#delete.ytmusic-search-suggestion:hover {
  color: var(--ts-base-100-alpha-07-color) !important;
}

#top-level-buttons.ytmusic-menu-renderer>.outline-button.ytmusic-menu-renderer, .edit-playlist-button.ytmusic-menu-renderer, ytmusic-toggle-button-renderer.ytmusic-menu-renderer {
  border: 1px solid var(--ts-primary-text-color) !important;
  border-radius: 2px;
  --yt-button-color: var(--ts-primary-text-color) !important;
}

ytmusic-shelf-renderer yt-button-renderer #button.yt-button-renderer {
  color: var(--ts-primary-text-color) !important;
}

.play-button.ytmusic-immersive-header-renderer, .radio-button.ytmusic-immersive-header-renderer {
  color: var(--ts-primary-text-color) !important;
  --yt-button-background-color: var(--ts-primary-text-color) !important;
  --yt-button-color: var(--ts-base-00-color) !important;
}

tp-yt-paper-button.ytmusic-subscribe-button-renderer {
  color: var(--ts-base-100-alpha-08-color) !important;
  border: 1px solid var(--ts-base-100-alpha-08-color) !important;
}

ytmusic-toggle-button-renderer #button.ytmusic-toggle-button-renderer {
  color: var(--ts-primary-text-color) !important;
}

ytmusic-chip-cloud-chip-renderer:not([chip-style=STYLE_PRIMARY]):not([chip-style=STYLE_SECONDARY]):not([is-selected]) a.ytmusic-chip-cloud-chip-renderer {
  border: 1px solid var(--ts-base-100-alpha-01-color) !important;
  background: var(--ts-primary-text-color) !important;
  color: var(--ts-base-00-color) !important;
  --yt-endpoint-hover-color: var(--ts-base-00-color) !important;
  background: var(--ts-base-100-alpha-01-color) !important;
  color: var(--ts-primary-text-color) !important;
}

.more-button.ytmusic-shelf-renderer tp-yt-paper-button.ytmusic-shelf-renderer {
  color: var(--ts-base-100-alpha-07-color);
}
/* end buttons */

/* start TEXTS */
ytmusic-player {
  color: var(--ts-primary-text-color);
}

.song-title, 
.title, 
.text {
  color: var(--ts-primary-text-color) !important;
  --yt-endpoint-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--ts-base-100-alpha-08-color) !important;
  --yt-endpoint-visited-color: var(--ts-primary-text-color) !important;
  --ytmusic-text-primary: var(--ts-base-100-color) !important;
  --ytmusic-text-secondary: var(--ts-base-60-color) !important;
  --ytmusic-text-disabled: var(--ts-base-40-color) !important;
}

ytmusic-pivot-bar-item-renderer {
  color: var(--ts-base-100-alpha-05-color) !important;
  --yt-endpoint-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-hover-color: var(--ts-primary-text-color) !important;
  --yt-endpoint-visited-color: var(--ts-primary-text-color) !important;
}

ytmusic-unified-share-panel-renderer #title, #share-url {
  color: var(--ts-base-00-color) !important;
  --yt-endpoint-color: var(--ts-base-00-color) !important;
  --yt-endpoint-hover-color: var(--ts-base-00-alpha-08-color) !important;
  --yt-endpoint-visited-color: var(--ts-base-00-color) !important;
  --ytmusic-text-primary: var(--ts-base-00-color) !important;
  --ytmusic-text-secondary: var(--ts-base-60-color) !important;
  --ytmusic-text-disabled: var(--ts-base-40-color) !important;
}

.duration.ytmusic-player-queue-item, .byline.ytmusic-player-queue-item {
  color: var(--ts-secondary-text-color) !important;
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
  color: var(--ts-base-100-alpha-06-color) !important;
}

#hover-time-info {
  color: var(--ts-primary-text-color) !important;
}

ytmusic-search-box[has-query] input.ytmusic-search-box, ytmusic-search-box[opened] input.ytmusic-search-box {
  color: var(--ts-primary-text-color) !important;
}

#placeholder.ytmusic-search-box {
  color: var(--ts-base-100-alpha-05-color) !important;
}

tp-yt-paper-tab.iron-selected.ytmusic-player-page {
  color: var(--ts-primary-text-color) !important;
}

tp-yt-paper-tab.ytmusic-player-page {
  --paper-tab-ink: var(--ts-primary-text-color) !important;
  color: var(--ts-base-100-alpha-06-color) !important;
}

tp-yt-paper-tab.ytmusic-player-page[disabled] {
  color: var(--ts-base-100-alpha-03-color) !important;
}

ytmusic-search-box[opened] input.ytmusic-search-box::-webkit-input-placeholder {
  color: var(--ts-base-100-alpha-05-color) !important;
}

ytmusic-search-box[opened] input.ytmusic-search-box::placeholder {
  color: var(--ts-base-100-alpha-05-color) !important;
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
  color: var(--ts-base-100-alpha-07-color) !important;
}

.autoplay.ytmusic-tab-renderer .subtitle.ytmusic-tab-renderer {
  color: var(--ts-base-100-alpha-07-color) !important;
}

.description.ytmusic-detail-header-renderer {
  color: var(--ts-primary-text-color) !important;
}

.description {
  color: var(--ts-primary-text-color) !important;
}

iron-input.tp-yt-paper-input > input.tp-yt-paper-input {
  color: var(--ts-primary-text-color);
}
/* end TEXTS */
`;
