export const icons_buttons = /*css*/ `

  :root {
    --ts-primary-icon-color: var(--ts-base-100-color);
    --ts-secondary-icon-color: var(--ts-base-100-alpha-06-color);
    --ts-tertiary-icon-color: var(--ts-base-70-color);
    --ts-inverse-icon-color: var(--ts-base-00-color);

    --ts-colored-button-color: var(--ts-base-100-color);

    --ts-icon-accent-color: var(--ts-base-100-color);

    --ts-pill-color: var(--ts-base-100-alpha-01-color);
  }

  /* icons on playerpage song image */
  ytmusic-player {
    color: var(--ts-primary-icon-color);
  }
      
  .icon {
    fill: var(--ts-primary-icon-color, hotpink);
    color: var(--ts-primary-icon-color, hotpink);
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
  ytmusic-player-bar:not([repeat-mode_=NONE]) .repeat.ytmusic-player-bar {
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
    /* color: var(--yt-spec-text-primary-inverse); */
    background-color: var(--ts-colored-button-color);
  }

  /* like buttons on a list like "your likes" */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
    color: var(--ts-icon-accent-color);
  }



  /* some pills on the home page */
  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE] a.ytmusic-chip-cloud-chip-renderer {
    background: var(--ts-pill-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE] a.ytmusic-chip-cloud-chip-renderer:hover {
    background-color: var(--ts-pill-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_DEFAULT] a.ytmusic-chip-cloud-chip-renderer {
    background-color: var(--ts-pill-color);
  }

  tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer {
    background-color: var(--ts-pill-color);
  }

  tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer:hover {
    background-color: var(--ts-pill-color);
  }

  ytmusic-menu-renderer[show-hover] #button.ytmusic-menu-renderer:hover {
    background: var(--ts-pill-color);
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

  yt-icon, .yt-icon-container.yt-icon {
    fill: var(--ts-secondary-icon-color);
  }

  /* top bar icons */
  ytmusic-nav-bar yt-icon, tp-yt-app-drawer .yt-icon-container.yt-icon {
    fill: var(--ts-secondary-icon-color);
  }

  #menu-button.ytmusic-nav-bar {
    color: var(--ts-secondary-icon-color);
  }

  /* sign in button (sidebar) */
  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
    background-color: var(--ts-secondary-icon-color);
  }

  .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
    background-color: var(--ts-primary-icon-color);
  }

  /* filter pills */
  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_PRIMARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_SECONDARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN][is-selected] a.ytmusic-chip-cloud-chip-renderer {
    background-color: var(--ts-secondary-icon-color) !important;
  }
`;
