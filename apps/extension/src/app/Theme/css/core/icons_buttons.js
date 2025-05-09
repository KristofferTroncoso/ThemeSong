export const icons_buttons = /*css*/ `
  :root {
    --ts-primary-icon-color: var(--ts-base-100-color);
    --ts-secondary-icon-color: var(--ts-base-100-alpha-08-color);
    --ts-tertiary-icon-color: var(--ts-base-70-color);
    --ts-inverse-icon-color: var(--ts-base-00-color);

    --ts-colored-button-color: var(--ts-base-100-color);

    --ts-icon-accent-color: var(--ts-base-100-color);

    --ts-pill-color: var(--ts-base-100-alpha-005-color);
    --ts-pill-hover-color: var(--ts-base-100-alpha-02-color);
  }

  :root {
    /* hovering a button like on the artist or album page */
    --yt-spec-mono-filled-hover: var(--ts-primary-icon-color) !important;
  }

  /* sidebar icons; and when collapsed */
  #mini-guide yt-icon {
    fill: var(--ts-secondary-icon-color);
  }

  .left-controls-buttons tp-yt-iron-icon {
    fill: var(--ts-primary-icon-color, green);
  }

  .middle-controls-buttons tp-yt-iron-icon {
    fill: var(--ts-primary-icon-color, teal);
  }

  .menu.ytmusic-player-bar {
    --iron-icon-fill-color: var(--ts-secondary-icon-color, blue);
  }

  .middle-controls-buttons {
    --iron-icon-fill-color: var(--ts-secondary-icon-color, purple);
  }

  .search-icon #icon {
    fill: var(--ts-secondary-icon-color, crimson);
  }

  ytmusic-search-suggestion {
    --iron-icon-fill-color: var(--ts-secondary-icon-color, crimson);
  }

  .cast-button.ytmusic-cast-button {
    --iron-icon-fill-color: var(--ts-secondary-icon-color, blue);
  }


  tp-yt-paper-listbox .icon {
    fill: var(--ts-secondary-icon-color, rebeccapurple) !important;
  }

  ytd-multi-page-menu-renderer.ytmusic-popup-container {
    --yt-compact-link-icon-color: var(--ts-secondary-icon-color, rgb(200, 100, 100));
  } 

  ytmusic-player-bar:not([repeat-mode=NONE]) .repeat.ytmusic-player-bar {
    color: var(--ts-base-100-color);
  }

  /* volume slider */
  .volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
    width: 100px;
    --paper-slider-active-color: var(--ts-primary-icon-color);
    --paper-slider-knob-color: var(--ts-primary-icon-color);
    --paper-slider-disabled-knob-color: var(--ts-primary-icon-color);
    --paper-slider-knob-start-color: var(--ts-primary-icon-color);
    --paper-slider-knob-start-border-color: var(--ts-primary-icon-color);
  }


  /* playerbar caret */
  .toggle-player-page-button #icon {
    fill: var(--ts-secondary-icon-color, currentcolor);
  }

  /* buttons / like buttons with colored backgrounds and inverse text */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
    color: var(--yt-spec-text-primary-inverse);
    background-color: var(--ts-colored-button-color);
  }

  /* like buttons on a list like "your likes" */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
    color: var(--ts-icon-accent-color);
  }

  /* some pills on the home page */
  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE] a.ytmusic-chip-cloud-chip-renderer {
    background: var(--ts-pill-color);
    border: 1px solid var(--ts-base-100-alpha-005-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE] a.ytmusic-chip-cloud-chip-renderer:hover {
    background-color: var(--ts-pill-hover-color);
  } 

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_DEFAULT] a.ytmusic-chip-cloud-chip-renderer {
    background-color: var(--ts-pill-color);
    border: 1px solid var(--ts-base-100-alpha-005-color);
  }

  tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer {
    background-color: var(--ts-pill-color);
    border: 1px solid var(--ts-base-100-alpha-005-color);
  }

  tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer:hover {
    background-color: var(--ts-pill-color);
  }

  ytmusic-menu-renderer[show-hover] #button.ytmusic-menu-renderer:hover {
    background: var(--ts-pill-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN] a.ytmusic-chip-cloud-chip-renderer:hover, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_DEFAULT] a.ytmusic-chip-cloud-chip-renderer:hover {
    background-color: var(--ts-pill-hover-color) !important;
  }

  /* selected pill */
  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE][is-selected]:not(.iron-selected) a.ytmusic-chip-cloud-chip-renderer {
    background-color: var(--ts-primary-icon-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE][is-selected]:not(.iron-selected) a.ytmusic-chip-cloud-chip-renderer .text {
    color: var(--ts-inverse-icon-color) !important;
  }


  /* 'recent activity' dropdown buttons */
  button.ytmusic-sort-filter-button-renderer {
    background: var(--ts-pill-color);
  }

  /* some buttons on explore */
  button.ytmusic-navigation-button-renderer {
    background: var(--ts-pill-color);
  }

  /* icons on top 3 buttons on Explore page */
  yt-icon.ytmusic-navigation-button-renderer {
    color: var(--ts-secondary-icon-color);
  }

  /* sidebar icons */
  tp-yt-app-drawer yt-icon, tp-yt-app-drawer .yt-icon-container.yt-icon {
    fill: var(--ts-secondary-icon-color);
  }

  /* sidebar circle play button */
  tp-yt-app-drawer ytmusic-play-button-renderer[icon="yt-sys-icons:play_arrow"] .icon.ytmusic-play-button-renderer {
    fill: var(--ts-inverse-icon-color);
  }

  ytmusic-guide-entry-renderer:not([is-primary]) #play-button.ytmusic-guide-entry-renderer {
    background-color: var(--ts-primary-icon-color);
  }

  /* top bar icons */
  ytmusic-nav-bar yt-icon, tp-yt-app-drawer .yt-icon-container.yt-icon {
    fill: var(--ts-secondary-icon-color);
  }

  #menu-button.ytmusic-nav-bar {
    color: var(--ts-secondary-icon-color);
  }

  /* sidebar buttons ("sign in", "New Playlist") */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
    background-color: var(--ts-base-100-alpha-005-color);
  }

  .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
    background-color: var(--ts-primary-icon-color);
  }

  /* filter pills */
  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_PRIMARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_SECONDARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN][is-selected] a.ytmusic-chip-cloud-chip-renderer {
    background-color: var(--ts-secondary-icon-color) !important;
  }

  /* selected item */
  .menu-bar-icon.ytmusic-multi-select-menu-bar {
    color: var(--ts-secondary-icon-color);
  }

  /* artist page subscribed button */
  ytmusic-subscribe-button-renderer[is-subscribed] {
    --ytmusic-subscribe-button-color: var(--ts-secondary-icon-color);
    --ytmusic-subscribe-button-outline-color: var(--ts-secondary-icon-color);
  }

  /* little pin on add-to-playlist menu */
  yt-icon.ytmusic-playlist-add-to-option-renderer {
    fill: var(--ts-primary-icon-color);
  }

  /* icons on settings popup */
  yt-icon.ytd-compact-link-renderer {
    fill: var(--ts-secondary-icon-color);
  }

  /* share menu next circle */
  :root {
    --yt-spec-brand-background-primary: var(--ts-inverse-icon-color) !important;
  }

  /* x close butto on share menu */
  .close-icon.ytmusic-unified-share-panel-renderer {
    color: var(--ts-primary-icon-color);
  }
  
  /* sidebar Sign In hover */
  :root {
    --yt-spec-mono-tonal-hover: var(--ts-base-100-alpha-03-color) !important;
  }

  /* sidebar menu items hover */
  tp-yt-paper-item.ytmusic-guide-entry-renderer:hover {
    --ytmusic-guide-entry-background-color: var(--ts-base-100-alpha-01-color) !important;
  }

  /* explicit icon on explore page */
  yt-icon.ytmusic-inline-badge-renderer {
    color: var(--ts-primary-icon-color);
  }

  /* dropdown icon in New playlist */
  ytmusic-dropdown-renderer[dropdown-style=underline] .icon.ytmusic-dropdown-renderer {
    color: var(--ts-tertiary-icon-color);
  }

  /* some icon buttons like the "x" in "saved to playlist" toast */
  button.yt-icon-button {
    color: var(--ts-primary-icon-color);
  }

  /* Save button on up next player page */
  ytmusic-chip-cloud-chip-renderer[chip-style=STYLE_TRANSPARENT] a.ytmusic-chip-cloud-chip-renderer {
    color: var(--ts-inverse-icon-color);
    background: var(--ts-secondary-icon-color);
  }

  ytmusic-chip-cloud-chip-renderer[chip-style=STYLE_TRANSPARENT] a.ytmusic-chip-cloud-chip-renderer .text {
    color: var(--ts-inverse-icon-color) !important;
  }

  /* bottom right fullscreen button (when in fullscreen) */
  ytmusic-player-bar[player-fullscreened] .exit-fullscreen-button.ytmusic-player-bar {
    color: var(--ts-primary-icon-color);
  }

  /* 3 dot icon when hovering thumbnail album cover */
  .thumbnail-overlay .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
    color: #fff;
  }

  /* icons on dialog popup when selecting checkbox from library */
  #multiSelectMenu.ytmusic-multi-select-menu-bar {
    --iron-icon-fill-color: var(--ts-primary-icon-color);
  }

  /* player page: up next, lyrics, related. paper ripple focus */
  tp-yt-paper-tab.ytmusic-player-page {
    --paper-tab-ink: var(--ts-base-100-color);
  }

  /* playerbar icons hover. like button. 3 dots */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
    background-color: var(--ts-pill-hover-color);
  }

  /* home page. "more" button hover */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
    background-color: var(--ts-pill-hover-color);
  }

  /* playlist. shuffle button hover */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
    background-color: var(--ts-base-70-color);
  }

  /* sidebar New Playlist button hover color */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
    background-color: var(--ts-base-100-alpha-03-color);
  }

  /* blue toggle buttons */
  /* active */
  html {
    --paper-toggle-button-checked-bar-color: var(--ytmusic-setting-item-toggle-active) !important;
    --ytmusic-setting-item-toggle-active: #3131ff;
  }
  
  /* disabled */
  html {
    --yt-spec-icon-disabled: var(--ts-base-50-color) !important;
  }

  /* volume bar container bg */
  .volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
    width: 100px;
    --paper-slider-container-color: var(--ts-base-100-alpha-04-color);
  }

  /* mobile layout */
  ytmusic-player-page[is-mweb-modernization-enabled] .collapse-button.ytmusic-player-page {
    color: var(--ts-primary-icon-color);
  }

  .controls.ytmusic-player-controls {
    color: var(--ts-primary-icon-color);
  }

  .play-pause-button-wrapper.ytmusic-player-controls tp-yt-paper-icon-button.ytmusic-player-controls {
    --iron-icon-fill-color: var(--ts-inverse-icon-color);
  }

  .play-pause-button-wrapper.ytmusic-player-controls {
    background: var(--ts-primary-icon-color);
  }

  .current-time.ytmusic-player-controls, .total-time.ytmusic-player-controls {
    color: var(--ts-base-100-alpha-07-color);
  }

  ytmusic-player-bar[is-mweb-player-bar-modernization-enabled] .right-controls.ytmusic-player-bar tp-yt-paper-icon-button.ytmusic-player-bar {
    --iron-icon-fill-color: var(--ts-primary-icon-color);
  }

  ytmusic-responsive-header-renderer[num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer .ytmusic-responsive-header-renderer:nth-child(2), ytmusic-responsive-header-renderer[num-header-buttons="5"][is-bauhaus-detail-pages-redesign-download-buttons-enabled] .action-buttons.ytmusic-responsive-header-renderer .ytmusic-responsive-header-renderer:nth-child(3) {
    --yt-button-color: var(--ts-inverse-icon-color);
    background-color: var(--ts-base-100-color);
  }

  ytmusic-responsive-header-renderer[is-bauhaus-web-playlist-detail-page-redesign-enabled][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(2)), ytmusic-responsive-header-renderer[is-bauhaus-web-playlist-detail-page-redesign-enabled][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer yt-button-renderer.ytmusic-responsive-header-renderer:nth-child(2), ytmusic-responsive-header-renderer[is-bauhaus-web-playlist-detail-page-redesign-enabled][num-header-buttons="4"] .action-buttons.ytmusic-responsive-header-renderer>*.ytmusic-responsive-header-renderer, ytmusic-responsive-header-renderer[is-bauhaus-web-playlist-detail-page-redesign-enabled][num-header-buttons="5"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(3)), ytmusic-responsive-header-renderer[is-bauhaus-web-album-detail-page-redesign-enabled][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(2)), ytmusic-responsive-header-renderer[is-bauhaus-web-album-detail-page-redesign-enabled][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer yt-button-renderer.ytmusic-responsive-header-renderer:nth-child(2), ytmusic-responsive-header-renderer[is-bauhaus-web-album-detail-page-redesign-enabled][num-header-buttons="4"] .action-buttons.ytmusic-responsive-header-renderer>*.ytmusic-responsive-header-renderer, ytmusic-responsive-header-renderer[is-bauhaus-web-album-detail-page-redesign-enabled][num-header-buttons="5"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(3)) {
    background-color: var(--ts-base-100-alpha-01-color);
  }
  
  .left-items ytmusic-play-button-renderer {
    --ytmusic-play-button-icon-color: oklch(0.75 var(--ts-palette-0-c) var(--ts-palette-0-h)) !important;
  }

  .top-bar.ytmusic-dismissable-dialog-renderer {
    color: #000;
    --yt-endpoint-color: var(--ts-primary-icon-color);
    --yt-endpoint-hover-color: var(--ts-primary-icon-color);
    --yt-endpoint-visited-color: var(--ts-primary-icon-color);
  }

  yt-icon.ytmusic-menu-service-item-download-renderer {
    fill: var(--ts-secondary-icon-color);
  }

  .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
    background-color: var(--ts-base-strong-blue);
  }

  yt-icon[icon="yt-icons:close"] {
    color: var(--ts-primary-icon-color);
  }

  ytmusic-responsive-header-renderer[is-playlist-detail-page][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(2)), ytmusic-responsive-header-renderer[is-playlist-detail-page][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer yt-button-renderer.ytmusic-responsive-header-renderer:nth-child(2), ytmusic-responsive-header-renderer[is-playlist-detail-page][num-header-buttons="4"] .action-buttons.ytmusic-responsive-header-renderer>*.ytmusic-responsive-header-renderer, ytmusic-responsive-header-renderer[is-playlist-detail-page][num-header-buttons="5"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(3)), ytmusic-responsive-header-renderer[is-album-detail-page][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(2)), ytmusic-responsive-header-renderer[is-album-detail-page][num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer yt-button-renderer.ytmusic-responsive-header-renderer:nth-child(2), ytmusic-responsive-header-renderer[is-album-detail-page][num-header-buttons="4"] .action-buttons.ytmusic-responsive-header-renderer>*.ytmusic-responsive-header-renderer, ytmusic-responsive-header-renderer[is-album-detail-page][num-header-buttons="5"] .action-buttons.ytmusic-responsive-header-renderer *.ytmusic-responsive-header-renderer:not(:nth-child(3)) {
    background-color: var(--ts-pill-color);
  }

  ytmusic-responsive-header-renderer[num-header-buttons="3"] .action-buttons.ytmusic-responsive-header-renderer .ytmusic-responsive-header-renderer:nth-child(2), ytmusic-responsive-header-renderer[num-header-buttons="5"] .action-buttons.ytmusic-responsive-header-renderer .ytmusic-responsive-header-renderer:nth-child(3) {
    background-color: var(--ts-primary-icon-color);
  }

  ytmusic-play-button-renderer[icon="yt-sys-icons:play_arrow"] .icon.ytmusic-play-button-renderer {
    fill: var(--ts-inverse-icon-color);
  }

  ytmusic-responsive-list-item-renderer .icon , ytmusic-responsive-list-item-renderer ytmusic-play-button-renderer[icon="yt-sys-icons:play_arrow"] .icon.ytmusic-play-button-renderer {
    fill: #b3b3b3;
  }

  yt-icon.ytmusic-inline-badge-renderer {
    fill: var(--ts-primary-icon-color);
  }

  yt-icon-button.ytmusic-carousel-shelf-renderer {
    border: 1px solid var(--ts-base-100-alpha-03-color);
  }

  yt-icon-button.ytmusic-carousel-shelf-renderer:hover {
    background-color: var(--ts-base-100-alpha-01-color);
  }

  ytmusic-play-button-renderer:not([icon=PLAY_ARROW]) .icon.ytmusic-play-button-renderer {
    color: #b3b3b3;
  }

  #song-media-window yt-icon {
    fill: #fff;
  }
`;
