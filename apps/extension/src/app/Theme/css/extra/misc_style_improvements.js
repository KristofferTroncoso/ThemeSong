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
  ytmusic-player[player-ui-state_=FULLSCREEN] {
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
  ytmusic-player {
    margin: auto 0 auto 50px !important;
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
`;
