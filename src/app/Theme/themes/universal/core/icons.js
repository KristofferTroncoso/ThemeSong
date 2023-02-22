export const icons = /*css*/ `

  :root {
    --ts-primary-icon-color: var(--ts-base-100-color);
    --ts-secondary-icon-color: var(--ts-base-100-alpha-06-color);
    --ts-tertiary-icon-color: var(--ts-base-70-color);
    --ts-inverse-icon-color: var(--ts-base-00-color);

    --ts-colored-button-color: var(--ts-base-100-color);
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
`;
