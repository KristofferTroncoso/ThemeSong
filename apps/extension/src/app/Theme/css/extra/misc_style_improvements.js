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
    background-color: transparent;
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

/* June 2023. Album image on player page is directly touching the player bar.
Feedback sent to YTM but no fix. Other users confirmed issue. */
export const fixNoMarginBottomOnNowPlayingAlbumImage = /*css*/ `
  #player-page {
    container-type: inline-size;
    container-name: player-page;
  }

  @container player-page (min-width: 840px) and (max-width: 999px) {
    ytmusic-player[player-ui-state=PLAYER_PAGE_OPEN][playback-mode="ATV_PREFERRED"] {
      margin: auto 20px !important;
    }

    .av.ytmusic-player-page {
      padding-bottom: 5px !important;
    }
  }

  @container player-page (min-width: 1000px) and (max-width: 1199px) {
    ytmusic-player[player-ui-state=PLAYER_PAGE_OPEN][playback-mode="ATV_PREFERRED"] {
      margin: auto 40px !important;
    }

    .av.ytmusic-player-page {
      padding-bottom: 5px !important;
    }
  }

  @container player-page (min-width: 1200px) and (max-width: 2199px) {
    ytmusic-player[player-ui-state=PLAYER_PAGE_OPEN][playback-mode="ATV_PREFERRED"] {
      margin: auto 55px !important;
    }

    .av.ytmusic-player-page {
      padding-bottom: 5px !important;
    }
  }

  @container player-page (min-width: 2200px) and (max-width: 2400px) {
    ytmusic-player[player-ui-state=PLAYER_PAGE_OPEN][playback-mode="ATV_PREFERRED"] {
      margin: auto 80px !important;
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
  font-weight: 700;
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

.title.ytmusic-guide-entry-renderer {
  color: var(--ts-base-100-alpha-08-color) !important;
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
`;
