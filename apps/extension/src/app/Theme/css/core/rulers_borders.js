export const rulers_borders = /*css*/ `
  :root {
    --ts-ruler-primary-color: var(--ts-base-100-color);
    --ts-ruler-secondary-color: var(--ts-base-100-alpha-01-color);
  }


  :root {
    /* player page sidebar */
    --ytmusic-divider: var(--ts-ruler-secondary-color, green);

    /* random borders and overlays. related to a11y. */
    /* i can just switch the attribute on the root from "dark=true" to "light=true" but its alot to just change 1 or 2 css properties */
    --yt-spec-10-percent-layer: var(--ts-ruler-secondary-color, purple) !important;
  }

  tp-yt-paper-tabs.ytmusic-player-page {
    --paper-tabs-selection-bar-color: var(--ts-ruler-primary-color, blue);
  }

  ytmusic-player-queue-item {
    border-bottom: 1px solid var(--ts-ruler-secondary-color, hotpink);
  }

  /* navbar border bottom */
  #nav-bar-divider.ytmusic-app-layout {
    border-top: 1px solid var(--ts-ruler-secondary-color, rgb(0 0 0 / 0.2));
  }

  ytmusic-app-layout[is-bauhaus-sidenav-enabled] #nav-bar-divider.ytmusic-app-layout {
    border-top: 1px solid var(--ts-ruler-secondary-color, rgb(0 0 0 / 0.2));
  }

  ytmusic-app-layout[is-bauhaus-sidenav-enabled] #nav-bar-background.ytmusic-app-layout {
    border-bottom: 1px solid var(--ts-ruler-secondary-color, rgb(0 0 0 / 0.2));
  }

  tp-yt-paper-listbox.ytmusic-menu-popup-renderer {
    border: 1px solid var(--ts-ruler-secondary-color, rgb(0 0 0 / 0.2));
  }

  /* search box border */
  :root {
    --ytmusic-search-border: var(--ts-ruler-secondary-color, red) !important;
  }

  /* search box */
  ytmusic-search-box[is-bauhaus-sidenav-enabled] {
    --ytmusic-search-border: var(--ts-ruler-secondary-color, red) !important;;
  }

  tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer {
    border: solid 1px var(--ts-ruler-secondary-color, tomato);
  }

  /* 'recent activity' dropdown buttons */
  button.ytmusic-sort-filter-button-renderer {
    border: 1px solid var(--ts-ruler-secondary-color, green);
  }

  /* 'recent activity' dropdowns */
  #container.ytmusic-multi-select-menu-renderer {
    border: 1px solid var(--ts-ruler-secondary-color, steelblue);
  }

  #title.ytmusic-multi-select-menu-renderer {
    border-bottom: 1px solid var(--ts-ruler-secondary-color, steelblue);
  }

  /* search page that comes up */
  ytmusic-tabs.iron-selected .tab.ytmusic-tabs, .tab.selected.ytmusic-tabs {
    border-bottom: 2px solid var(--ts-ruler-primary-color);
  }

  .tab-container.ytmusic-tabs {
    border-bottom: 1px solid var(--ts-ruler-secondary-color);
  }

  /* sidebar */
  #divider.ytmusic-guide-section-renderer {
    border-top: 1px solid var(--ts-ruler-secondary-color);
  }

  ytmusic-guide-signin-promo-renderer[is-collapsed] {
    border-top: 1px solid var(--ts-ruler-secondary-color);
  }

  ytmusic-app-layout[is-bauhaus-sidenav-enabled] #mini-guide-background.ytmusic-app-layout {
    border-right: 1px solid var(--ts-ruler-secondary-color);
  }

  ytmusic-app[is-bauhaus-sidenav-enabled] #guide-wrapper.ytmusic-app {
    border-right: none;
}

  /* add to playlist menu */
  ytmusic-add-to-playlist-renderer {
    border: 1px solid var(--ts-ruler-secondary-color);
  }
  
  .top-bar.ytmusic-add-to-playlist-renderer {
    border-bottom: 1px solid var(--ts-ruler-secondary-color);
  }

  ytmusic-carousel-shelf-renderer.ytmusic-add-to-playlist-renderer:not(:empty) {
    border-bottom: 1px solid var(--ts-ruler-secondary-color);
  }

  ytmusic-playlist-form[tabbed-ui-enabled] iron-pages.ytmusic-playlist-form .content.ytmusic-playlist-form {
    border-top: 1px solid var(--ts-base-40-color);
    border-bottom: 1px solid var(--ts-ruler-secondary-color);
  }

  .top-bar.ytmusic-dismissable-dialog-renderer {
    border-bottom: 1px solid var(--ts-ruler-secondary-color);
  }

  ytmusic-responsive-list-item-renderer[is-album-detail-page], ytmusic-playlist-shelf-renderer[is-playlist-detail-page] #contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
    padding-top: 4px;
    padding-bottom: 4px;
    margin-bottom: 0;
  }

  ytmusic-shelf-renderer:not([is-playlist-detail-page]):not([is-album-detail-page]) #contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
    border-bottom: 1px solid var(--ts-ruler-secondary-color);
  }
`;
