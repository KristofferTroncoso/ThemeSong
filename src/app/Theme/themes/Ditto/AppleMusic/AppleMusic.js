import { useState, useEffect } from "react";
import { apple_music_css } from "./apple-music-css";
import { menubar } from "../../selectors";
import { useStore } from "/src/app/store";
import { dark_base_colors } from "../../universal/dark-base-colors";
import { light_base_colors } from "../../universal/light-base-colors";

import { scrollbars } from "../../universal/scrollbars";
import { playerbar_progressbar } from "../../universal/playerbar-progressbar";
import { main_BGs } from "../../universal/main-BGs";
import { songImgStyles } from "../../universal/songImgStyles";
import { misc_style_improvements } from "../../universal/misc-style-improvements";
import { texts_and_icons } from "../../universal/texts_and_icons";

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
        menubar.content = `#1f1f1f`;
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
        menubar.content = `#1f1f1f`;
      } else {
        menubar.content = `hsl(0, 0%, 95%)`;
      }
    } else {
      menubar.content = `hsl(${lightVibrantHSL[0] * 360}, ${lightVibrantHSL[1] * 100 * 0.2}%, 35%)`;
    }
  }, [playerUiState, lightVibrantHSL]);

  return (
    <style id="AppleMusic">
      {texts_and_icons}
      {main_BGs}
      {scrollbars}
      {playerbar_progressbar}
      {songImgStyles}
      {misc_style_improvements}
      {apple_music_css}
      {`
        :root {
          --ts-theme-ditto-apple-1-color: hsl(var(--ts-palette-dominant-hue), calc(var(--ts-palette-dominant-saturation) * 0.2), 35%);
          --ts-theme-ditto-apple-2-color: hsl(var(--ts-palette-vibrant-hue), calc(var(--ts-palette-vibrant-saturation) * 0.2), 32%);
          --ts-theme-ditto-apple-3-color: hsl(var(--ts-palette-muted-hue), calc(var(--ts-palette-muted-saturation) * 0.2), 26%);
          --ts-theme-ditto-apple-4-color: hsl(var(--ts-palette-lightvibrant-hue), calc(var(--ts-palette-lightvibrant-saturation) * 0.2), 35%);
          --ts-theme-ditto-apple-5-color: hsl(var(--ts-palette-darkvibrant-hue), calc(var(--ts-palette-darkvibrant-saturation) * 0.2), 28%);

          --ts-topbarbg-color: var(--ts-theme-ditto-apple-4-color);
          --ts-playpagebg-color: linear-gradient(180deg, var(--ts-theme-ditto-apple-4-color) 0%, var(--ts-theme-ditto-apple-2-color) 20%, var(--ts-theme-ditto-apple-5-color) 80%, var(--ts-theme-ditto-apple-3-color) 100%);
          --ts-playbarbg-color: var(--ts-theme-ditto-apple-3-color);
          --ts-playpageavtoggle-color: hsl(var(--ts-palette-lightvibrant-hue), calc(var(--ts-palette-dominant-saturation) * 0.4), 27%);
          --ts-bodybg-color: #333333;
        }
     `}

      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE")
        ? `

        /* i think ytm is putting a 'padding-top: 100%' on this. i have to set it to 0 for my gradient to be good */
        ytmusic-player[player-ui-state_=FULLSCREEN] #song-image.ytmusic-player {
          padding-top: 0;
        }
        ${dark_base_colors}
        `
        : `
        ${
          isDark
            ? `:root {

            --ts-topbarbg-color: rgba(30,30,30,0.4) !important;
            --ts-bodybg-color: hsl(0,0%,12%);

            --ts-playbarbg-color: hsla(var(--ts-palette-dominant-hue), calc(var(--ts-palette-dominant-saturation) * 0.5), 10%, 0.3);
          }

          #button-shape-like button {
            color: var(--ts-theme-ditto-applemusic-color);
          }

          .ytmusic-section-list-renderer #contents ytmusic-responsive-list-item-renderer:nth-child(odd) {
            background-color: hsl(0,0%, 16%);
            border-radius: 2px;
          }



          ${dark_base_colors}
          `
            : `:root {

            --ts-topbarbg-color: rgba(235,235,235,0.4) !important;
            --ts-bodybg-color: #fff;

            --ts-playbarbg-color: hsla(var(--ts-palette-dominant-hue), calc(var(--ts-palette-dominant-saturation) * 0.7), 94%, 0.3);
          }

          #button-shape-like button {
            color: var(--ts-theme-ditto-applemusic-color);
          }
          .ytmusic-section-list-renderer #contents ytmusic-responsive-list-item-renderer:nth-child(odd) {
            background-color: rgba(0,0,0,0.04);
            border-radius: 2px;
          }
          /*
          ytmusic-responsive-list-item-renderer {
            height: 40px;
          }
          */
          ${light_base_colors}
          `
        }

        /* remove border-bottom / ruler from lists */
        #contents.ytmusic-shelf-renderer>*.ytmusic-shelf-renderer:not(:last-child) {
          border-bottom: none !important;
        }
        
        #contents.ytmusic-playlist-shelf-renderer>*.ytmusic-playlist-shelf-renderer:not(:last-child) {
          border-bottom: none !important;
        }

      `}
    </style>
  );
}

export default AppleMusic;
