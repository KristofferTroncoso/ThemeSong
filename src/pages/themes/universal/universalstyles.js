// grayscale/monochrome topbar user icon
const grayscaleIcon = /*css*/`
  :root {
    --ThemeSong-TopBar-Icon-Filter: grayscale(1);
  }

  ytmusic-nav-bar ytmusic-settings-button tp-yt-iron-icon img {
    filter: var(--ThemeSong-TopBar-Icon-Filter);
  }
`;


/* when pressing fullscreen on the player page album art, the img goes to COVER. 
If it is set to CONTAIN, the bg is defaulted to grey. This makes it look better.
*/
const coloredPlayerBg = /*css*/`
  ytmusic-player {
    background-color: var(--ts-playpagebg-color)
  }
`;

/* on user icon on top right corner, the grey bg is causing a strange grey outline that looks bad */
const noGreyBgOnUserIcon = /*css*/`
  tp-yt-paper-icon-button.ytmusic-settings-button {
    background-color: transparent;
  }
`;

const fixWeirdMarginWhenFullScreenPlayer = /*css*/`
  ytmusic-player[player-ui-state_=FULLSCREEN] {
    margin: auto 0 !important;
  }
`;


/* the color for the playbar icons and text is too dark when we're not using the default black theme */
/* also when fullscreen, the transparent bg on the playbar is hard to see */
const playBarTextAndIconsColor = /*css*/`
  ytmusic-player-bar {
    color: #bababa;
  }

  .time-info.ytmusic-player-bar {
    color: #c7c7c7;
  }

  tp-yt-paper-icon-button.ytmusic-like-button-renderer {
    color: #c7c7c7;
  }

  .menu.ytmusic-player-bar {
    --iron-icon-fill-color: #c7c7c7;
  }

  ytmusic-app-layout[player-fullscreened_] > [slot=player-bar] {
    background: var(--ts-playbar-color);
    width: 100%;
  }
`;


export const universalstyles = /*css*/`
  /* ThemeSong */
  /* universal styles */

  ${grayscaleIcon}
  ${coloredPlayerBg}
  ${noGreyBgOnUserIcon}
  ${fixWeirdMarginWhenFullScreenPlayer}
  ${playBarTextAndIconsColor}

`;