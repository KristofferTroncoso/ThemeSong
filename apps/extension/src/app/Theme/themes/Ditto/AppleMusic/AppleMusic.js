import { useState, useEffect } from "react";
import { menubar } from "../../../selectors";
import { useStore } from "/src/app/store";
import { dark_base_colors } from "../../../css/colors/dark_base_colors";
import { light_base_colors } from "../../../css/colors/light_base_colors";
import { texts } from "../../../css/core/texts";
import { icons_buttons } from "../../../css/core/icons_buttons";
import { gradients_overlays } from "../../../css/core/gradients_overlays";
import { rulers_borders } from "../../../css/core/rulers_borders";
import { scrollbars } from "../../../css/core/scrollbars";
import { playerbar_progressbar } from "../../../css/core/playerbar_progressbar";
import { backgrounds } from "../../../css/core/backgrounds";
import { song_image } from "../../../css/extra/song_image";
import { misc_style_improvements } from "../../../css/extra/misc_style_improvements";
import { zebra_stripes } from "../../../css/extra/zebra_stripes";

function AppleMusic() {
  const playerUiState = useStore((state) => state.player.playerUiState);
  const lightVibrantHSL = useStore((state) => state.palette.palette.LightVibrant.hsl);
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  function returnDarkOrLightTheme(event) {
    console.log("DynamicSystem: returnDarkOrLightTheme");
    window.matchMedia("(prefers-color-scheme: dark)").matches ? setIsDark(true) : setIsDark(false);
  }

  useEffect(() => {
    returnDarkOrLightTheme();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", returnDarkOrLightTheme);

    return function () {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", returnDarkOrLightTheme);
    };
  }, []);

  useEffect(() => {
    if (playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") {
      if (isDark) {
        menubar.content = `#262626`;
      } else {
        menubar.content = `hsl(0, 0%, 95%)`;
      }
    } else {
      menubar.content = `hsl(${lightVibrantHSL[0] * 360}, ${lightVibrantHSL[1] * 100 * 0.2}%, 35%)`;
    }
  }, [isDark]);

  useEffect(() => {
    console.log("PLAYERUISTATE2", playerUiState);
    if (playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") {
      if (isDark) {
        menubar.content = `#262626`;
      } else {
        menubar.content = `hsl(0, 0%, 95%)`;
      }
    } else {
      menubar.content = `hsl(${lightVibrantHSL[0] * 360}, ${lightVibrantHSL[1] * 100 * 0.2}%, 35%)`;
    }
  }, [playerUiState, lightVibrantHSL]);

  return (
    <style id="AppleMusic">
      {icons_buttons}
      {gradients_overlays}
      {rulers_borders}
      {backgrounds}
      {scrollbars}
      {playerbar_progressbar}
      {song_image}
      {misc_style_improvements}
      {zebra_stripes}
      {
        /*css*/ `
        :root {
          --ts-theme-ditto-apple-1-color: hsl(var(--ts-palette-dominant-hue), calc(var(--ts-palette-dominant-saturation) * 0.2), 35%);
          --ts-theme-ditto-apple-2-color: hsl(var(--ts-palette-vibrant-hue), calc(var(--ts-palette-vibrant-saturation) * 0.2), 32%);
          --ts-theme-ditto-apple-3-color: hsl(var(--ts-palette-muted-hue), calc(var(--ts-palette-muted-saturation) * 0.2), 26%);
          --ts-theme-ditto-apple-4-color: hsl(var(--ts-palette-lightvibrant-hue), calc(var(--ts-palette-lightvibrant-saturation) * 0.2), 35%);
          --ts-theme-ditto-apple-5-color: hsl(var(--ts-palette-darkvibrant-hue), calc(var(--ts-palette-darkvibrant-saturation) * 0.2), 28%);

          --ts-navbar-color: var(--ts-theme-ditto-apple-4-color);
          --ts-playerpage-color: linear-gradient(180deg, var(--ts-theme-ditto-apple-4-color) 0%, var(--ts-theme-ditto-apple-2-color) 20%, var(--ts-theme-ditto-apple-5-color) 80%, var(--ts-theme-ditto-apple-3-color) 100%);
          --ts-playerbar-color: var(--ts-theme-ditto-apple-3-color);
          --ts-playerpageavtoggle-color: hsl(var(--ts-palette-lightvibrant-hue), calc(var(--ts-palette-dominant-saturation) * 0.4), 27%);
          --ts-body-color: #333333;

          --ts-theme-ditto-applemusic-color: #d60017;

          --ts-overlay-color: rgba(0,0,0,0.6);
          --ts-overlay-highlighted-color: rgba(0,0,0,0);
        }

        /* i think ytm is putting a 'padding-top: 100%' on this. i have to set it to 0 for my gradient to be good */
        ytmusic-player[player-ui-state_=FULLSCREEN] #song-image.ytmusic-player {
          padding-top: 0;
        }

        ytmusic-player[player-ui-state_=MINIPLAYER] #song-image.ytmusic-player {
          padding-top: 0;
        }

        /* white icon all the time for player song image */
        ytmusic-player {
          --ts-primary-icon-color: #ffffff;
        }

        /* overwriting the icon color for the img hovers */
        .thumbnail-overlay .icon {
          fill: #fff;
        }

        .thumbnail-overlay .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
          color: #fff;
        }

        /* add blur to navbar, playerbar, and other menus */
        #nav-bar-background {
          backdrop-filter: blur(12px);
        }
        
        #player-bar-background {
          backdrop-filter: blur(12px);
        }
        
        
        ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
          backdrop-filter: blur(12px);
        }
        
        ytmusic-tabs.stuck {
          backdrop-filter: blur(12px);
          box-shadow: none !important;
        }
        
        tp-yt-iron-dropdown {
          backdrop-filter: blur(14px);
        }
        
        ytmusic-search-box {
          backdrop-filter: blur(14px);
        }
        /* end blur */

        ytmusic-play-button-renderer {
          --ytmusic-play-button-icon-color: #fff !important;
          /* --ytmusic-play-button-background-color: var(--ts-base-00-alpha-03-color) !important; */
          /* --ytmusic-play-button-active-background-color: var(--ts-base-00-alpha-03-color) !important; */
        }

        /* Recaps icon/img . It has a black bg so im inverting it on light themes */
        #img[src="https://www.gstatic.com/music/listening_review/HOME_RECAP_SHELF_AVATAR_BLACK_60x60.png"] {
          filter: invert(1);
        }
     `
      }

      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE")
        ? `

        #song-image {
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          border-radius: 4px;
        }
        
        #song-video {
          box-shadow: 0 10px 50px rgba(0,0,0,0.4);
          border-radius: 4px;
        }

        ytmusic-player[player-ui-state_=FULLSCREEN] #song-image #img {
          box-shadow: 0 10px 50px rgba(0,0,0,0.5);
        }
        ${dark_base_colors}
        `
        : `
        ${texts}
        ${
          isDark
            ? `
            ${dark_base_colors}
            :root {
              --ts-navbar-color: #292929db !important;
              --ts-body-color: hsl(0,0%,12%);
              --ts-playerbar-color: hsla(var(--ts-palette-dominant-hue), calc(var(--ts-palette-dominant-saturation) * 0.2), 16%, 0.5);
              --ts-zebra-stripes-color: rgba(255,255,255,0.03);;
              --ts-secondary-icon-color: #fa586a;
              --ts-colored-button-color: #fa586a;
            }

            #button-shape-like button {
              color: #fa586a;
            }

            body::-webkit-scrollbar-track {
              background-color: rgba(255,255,255,0.03);
            }
          `
            : `
            ${light_base_colors}
            :root {
              --ts-navbar-color: rgba(240,240,240,0.8) !important;
              --ts-body-color: #fff;
              --ts-playerbar-color: hsla(var(--ts-palette-dominant-hue), calc(var(--ts-palette-dominant-saturation) * 0.7), 94%, 0.5);
              --ts-playprogress-color: #5e5e5e;
              --ts-primary-icon-color: var(--ts-base-70-color);
              --ts-secondary-icon-color: #d60017;
              --ts-colored-button-color: #d60017;
              --ts-zebra-stripes-color: rgba(0,0,0,0.04);
            }

            ytmusic-tabs.stuck {
              border-top: 1px solid #d1d1d1;
              border-bottom: 1px solid #d1d1d1;
            }

            ytmusic-thumbnail-renderer:not([thumbnail-crop="MUSIC_THUMBNAIL_CROP_CIRCLE"]) {
              height: initial !important;
              width: initial !important;
              border: 1px solid #d4d4d4;
            }

            /* album page light border */
            #thumbnail {
              border: 1px solid #cdcdcd;
            }
            #song-image > #thumbnail {
              border: none;
            }

            #button-shape-like button {
              color: #d60017;
            }
          `
        }

      `}
    </style>
  );
}

export default AppleMusic;
