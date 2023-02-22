export const gradients_overlays = /*css*/ `
  :root {
    --ts-gradient-primary-color: var(--ts-base-100-alpha-02-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE] a.ytmusic-chip-cloud-chip-renderer {
    background: var(--ts-gradient-primary-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE] a.ytmusic-chip-cloud-chip-renderer:hover {
    background-color: var(--ts-gradient-primary-color);
  }

  ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_DEFAULT] a.ytmusic-chip-cloud-chip-renderer {
    background-color: var(--ts-gradient-primary-color);
  }

  tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer {
    background-color: var(--ts-gradient-primary-color);
  }

  tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer:hover {
    background-color: var(--ts-gradient-primary-color);
  }

  ytmusic-menu-renderer[show-hover] #button.ytmusic-menu-renderer:hover {
    background: var(--ts-gradient-primary-color);
  }

  :root {
    --ytmusic-color-white1-alpha10: var(--ts-gradient-primary-color);

    /* right click menu hover */
    --ytmusic-menu-item-hover-background-color: var(--ts-gradient-primary-color);
  }

  /* search menu search item hover */
  #suggestions.ytmusic-search-suggestions-section>.ytmusic-search-suggestions-section:hover, ytmusic-search-suggestions-section:not([is-entity-search-suggestions-enabled]) #suggestions.ytmusic-search-suggestions-section>.selected-suggestion.ytmusic-search-suggestions-section {
    background-color: var(--ts-gradient-primary-color);
  }

  /* 'recent activity' dropdown buttons */
  button.ytmusic-sort-filter-button-renderer {
    background: var(--ts-gradient-primary-color);
  }

  /* some buttons on explore */
  button.ytmusic-navigation-button-renderer {
    background: var(--ts-gradient-primary-color);
  }
`;
