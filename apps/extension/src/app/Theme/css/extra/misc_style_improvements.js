/* when pressing fullscreen on the player page album art, the img goes to COVER. */
export const coloredPlayerBg = /*css*/ `
  ytmusic-player {
    background-color: var(--ts-playerpage-color);
    transition: var(--ts-bgcolor-transition);
  }
`;

/* on user icon on top right corner, the grey bg is causing a strange grey outline that looks bad */
export const noGreyBgOnUserIcon = /*css*/ `
  tp-yt-paper-icon-button.ytmusic-settings-button {
    background-color: rgb(255 255 255 / 20%);
  }
`;

export const fixWeirdMarginWhenFullScreenPlayer = /*css*/ `
  ytmusic-player[player-ui-state=FULLSCREEN] {
    margin: auto 0 !important;
  }
`;

/* the color for the playbarbg icons and text is too dark when we're not using the default black theme */
/* also when fullscreen, the transparent bg on the playbarbg is hard to see */
export const playBarTextAndIconsColor = /*css*/ `
  ytmusic-player-bar {
    color: var(--ts-base-100-alpha-06-color);
  }

  .time-info.ytmusic-player-bar {
    color: var(--ts-base-100-alpha-06-color);
  }

  .menu.ytmusic-player-bar {
    --iron-icon-fill-color: var(--ts-base-100-alpha-06-color);
  }

  ytmusic-app-layout[player-fullscreened_] > [slot=player-bar] {
    background: var(--ts-playerbar-color);
    width: 100%;
  }
`;

/* June 2023. Album image on player page is directly touching the player bar. */
export const fixNoMarginBottomOnNowPlayingAlbumImage = /*css*/ `
  #player-page:not([video-mode]) {
    container-type: inline-size;
    container-name: player-page;
  }

  ytmusic-player-page:not([video-mode]):not([player-fullscreened]) #player.ytmusic-player-page {
    max-width: 900px;
  }

  .av.ytmusic-player-page {
    padding-bottom: 5px !important;
  }

  @container player-page (max-width: 839px) {
    .av.ytmusic-player-page {
      padding-bottom: 15px !important;
    }
  }

  @container player-page (min-width: 840px) and (max-width: 999px) {
    #main-panel {
      padding: 0 calc(39% - 45vh) !important;
    }

    ytmusic-player-page:not([video-mode]):not([player-fullscreened]) #player.ytmusic-player-page {
      max-width: 500px;
    }
  }

  @container player-page (min-width: 1000px) and (max-width: 1199px) {
    #main-panel {
      padding: 0 calc(38% - 42vh) !important;
    }
  }

  @container player-page (min-width: 1200px) and (max-width: 1399px) {
    #main-panel {
      padding: 0 calc(37% - 42vh) !important;
    }
  }

  @container player-page (min-width: 1400px) and (max-width: 1599px) {
    #main-panel {
      padding: 0 calc(36% - 42vh) !important;
    }
  }

  @container player-page (min-width: 1600px) and (max-width: 1799px) {
    #main-panel {
      padding: 0 calc(35% - 42vh) !important;
    }
  }

  @container player-page (min-width: 1800px) and (max-width: 1999px) {
    #main-panel {
      padding: 0 calc(34% - 42vh) !important;
    }
  }

  @container player-page (min-width: 2000px) and (max-width: 2199px) {
    #main-panel {
      padding: 0 calc(34% - 42vh) !important;
    }
  }

  @container player-page (min-width: 2200px) and (max-width: 2400px) {
    #main-panel {
      padding: 0 calc(34% - 42vh) !important;
    }
  }
`;

/* the box-shadow on the new sidebar-layout Search input doesn't look so good. it only looks good on dark or Off because you can't see it haha */
export const removeSearchBoxShadow = /*css*/ `
  ytmusic-search-box[has-query] .search-container.ytmusic-search-box, ytmusic-search-box[opened] .search-container.ytmusic-search-box {
    box-shadow: none;
  }
`;

/* 11.30.2023 some weird stuff when focusing sidebar buttons. just pure white bg and no border-radius. gonna fix it*/
export const sidebarFocus = /*css*/ `
tp-yt-paper-item:focus:before, .tp-yt-paper-item.tp-yt-paper-item:focus:before {
  background: none;
  border-radius: inherit;
}`;

/* opinion. bold sidebar headers. it looks nice imo */
export const boldSidebarHeaders = /*css*/ `
.title.ytmusic-guide-entry-renderer {
  font-weight: 500;
  font-family: 'YouTube Sans';
  font-size: 17px;
}

ytmusic-guide-entry-renderer[active] .title.ytmusic-guide-entry-renderer {
  font-weight: 700 !important;
  color: var(--ts-primary-text-color) !important;
}

ytmusic-guide-entry-renderer:not([is-primary]) .title.ytmusic-guide-entry-renderer {
  color: var(--ts-primary-text-color) !important;
}
`;

export const popupStyling = /*css*/ `
  tp-yt-paper-listbox.ytmusic-menu-popup-renderer {
    border-radius: 8px;
  }

  tp-yt-iron-dropdown {
    border-radius: 8px;
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  }

  /* popup dialog - Share and Save to Playlist */
  tp-yt-paper-dialog {
    border-radius: 8px;
  }
`;

/* on playerpage, when collapsing and un-collapsing sidebar, 
a scrollbar track shows up on the right. */
export const playerPageScrollbarShowsWhenSidebar = /*css*/ `
  html[os="windows"]:has(#layout[player-ui-state="PLAYER_PAGE_OPEN"]) {
    scrollbar-width: none;
    margin-right: 17px;
  }
`;

/* sidebar a little too narrow at 240px.
  apple music web's sidebar is 260px. 
  spotify's is adjustable but min at 280px.
*/
export const sidebarALittleTooNarrow = /*css*/ `
  ytmusic-guide-renderer {
    width: 260px;
  }

  ytmusic-app[is-bauhaus-sidenav-enabled]:not([guide-collapsed]) {
    --ytmusic-guide-width: 260px;
  }
`;

export const adjustPlayerPagePadding = /*css*/ `
@media(max-width: 615px) {
  ytmusic-player-page {
      --ytmusic-player-page-vertical-padding:24px;
      --ytmusic-player-page-horizontal-padding: 0px;
      --ytmusic-player-page-content-gap: 32px;
      --ytmusic-player-page-side-panel-width: 100%
  }

  ytmusic-player-page[has-info-panel] {
      --ytmusic-player-page-vertical-padding: 24px;
      --ytmusic-player-page-horizontal-padding: 0px;
      --ytmusic-player-page-content-gap: 104px;
      --ytmusic-player-page-side-panel-width: 100%
  }

  ytmusic-player-page[has-info-panel][video-mode] {
      --ytmusic-player-page-vertical-padding: 16px
  }
}

@media(min-width: 616px) and (max-width:935px) {
  ytmusic-player-page {
      --ytmusic-player-page-vertical-padding:16px;
      --ytmusic-player-page-horizontal-padding: 32px;
      --ytmusic-player-page-content-gap: 64px;
      --ytmusic-player-page-side-panel-width: 100%
  }
}

@media(min-width: 936px) and (max-width:1149px) {
  ytmusic-player-page {
      --ytmusic-player-page-vertical-padding:24px;
      --ytmusic-player-page-horizontal-padding: 48px;
      --ytmusic-player-page-content-gap: 48px;
      --ytmusic-player-page-side-panel-width: 40%
  }
}

@media(min-width: 1150px) and (max-width:1363px) {
  ytmusic-player-page {
      --ytmusic-player-page-vertical-padding:32px;
      --ytmusic-player-page-horizontal-padding: 46px;
      --ytmusic-player-page-content-gap: 46px;
      --ytmusic-player-page-side-panel-width: 36%
  }
}

@media(min-width: 1364px) and (max-width:1577px) {
  ytmusic-player-page {
      --ytmusic-player-page-vertical-padding:40px;
      --ytmusic-player-page-horizontal-padding: 46px;
      --ytmusic-player-page-content-gap: 46px;
      --ytmusic-player-page-side-panel-width: 36%
  }
}

@media(min-width: 1578px) {
  ytmusic-player-page {
      --ytmusic-player-page-vertical-padding:44px;
      --ytmusic-player-page-horizontal-padding: 54px;
      --ytmusic-player-page-content-gap: 54px;
      --ytmusic-player-page-side-panel-width: 36%
  }
}

@media(min-width: 1800px) {
  ytmusic-player-page {
      --ytmusic-player-page-vertical-padding: 44px;
      --ytmusic-player-page-horizontal-padding: 76px;
      --ytmusic-player-page-content-gap: 76px;
      --ytmusic-player-page-side-panel-width: 36%
  }
}
`;

/* the popup listbox when right-clicking a song (or 3 dots menu), is a little too loose and padding too big */
export const compactListBox = /*css*/ `
  tp-yt-paper-listbox.ytmusic-menu-popup-renderer {
    padding: 8px 0;
  }

  .yt-simple-endpoint.ytmusic-menu-navigation-item-renderer {
    height: 38px;
  }

  ytmusic-menu-service-item-renderer {
    height: 38px;
  }

  ytmusic-toggle-menu-service-item-renderer {
    height: 38px;
  }

  tp-yt-paper-listbox yt-icon, tp-yt-paper-listbox .yt-icon-container.yt-icon {
    width: var(--iron-icon-width, 19px);
    height: var(--iron-icon-height, 19px);
  }

  tp-yt-paper-item.ytmusic-menu-service-item-download-renderer {
    --paper-item-min-height: 38px;
    padding: 0 14px;
  }

  yt-icon.ytmusic-menu-service-item-download-renderer {
    margin-right: 13px;
  }
`;

export const largerPlayerbarImg = /*css*/ `
.thumbnail-image-wrapper.ytmusic-player-bar {
  height: 46px;
}

.image.ytmusic-player-bar {
  height: 46px;
  border-radius: 4px;
}
`;

/* the dark gradient for the top song controls stays active on fullscreen. im just setting it to no background */
export const noGradientOnFullScreen = /*css*/ `
ytmusic-player[player-ui-state=FULLSCREEN] .song-media-controls.ytmusic-player {
  background: 0;
}
`;

export const misc_style_improvements = /*css*/ `
  /* ThemeSong */
  /* universal styles */

  ${coloredPlayerBg}
  ${noGreyBgOnUserIcon}
  ${fixWeirdMarginWhenFullScreenPlayer}
  ${playBarTextAndIconsColor}
  ${fixNoMarginBottomOnNowPlayingAlbumImage}
  ${removeSearchBoxShadow}
  ${sidebarFocus}
  ${boldSidebarHeaders}
  ${popupStyling}
  ${playerPageScrollbarShowsWhenSidebar}
  ${sidebarALittleTooNarrow}
  ${adjustPlayerPagePadding}
  ${compactListBox}
  ${largerPlayerbarImg}
  ${noGradientOnFullScreen}
`;
