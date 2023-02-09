import { useState, useEffect } from "react";
import { apple_music_css } from "./apple-music-css";
import { apple_dark_css } from "./apple-dark-css";
import { menubar } from "../../selectors";
import { useStore } from "/src/app/store";

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
      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE")
        ? `
        :root {
          --themesong-theme-dynamic-saturation: ${20};
          --themesong-theme-dynamic-topbarbg-light: ${25}%;
          --themesong-theme-dynamic-bodybg-light: ${25}%;
          --themesong-theme-dynamic-playpagebg-light: ${25}%;
          --themesong-theme-dynamic-playbarbg-light: ${25}%;
          --themesong-theme-dynamic-playpageavtoggle-light: ${21 + (25 / 25) * 14}%;
        }
        ${apple_dark_css}
      `
        : `
        ${
          isDark
            ? `:root {
            --themesong-base-00-color: #000;
            --themesong-base-10-color: #1a1a1a;
            --themesong-base-20-color: #333333;
            --themesong-base-30-color: #4d4d4d;
            --themesong-base-40-color: #666666;
            --themesong-base-50-color: #808080;
            --themesong-base-60-color: #999999;
            --themesong-base-70-color: #b3b3b3;
            --themesong-base-80-color: #cccccc;
            --themesong-base-90-color: #e6e6e6;
            --themesong-base-100-color: #ffffff;

            --themesong-base-00-alpha-00-color: rgba(0,0,0,0.0);
            --themesong-base-00-alpha-01-color: rgba(0,0,0,0.1);
            --themesong-base-00-alpha-02-color: rgba(0,0,0,0.2);
            --themesong-base-00-alpha-03-color: rgba(0,0,0,0.3);
            --themesong-base-00-alpha-04-color: rgba(0,0,0,0.4);
            --themesong-base-00-alpha-05-color: rgba(0,0,0,0.5);
            --themesong-base-00-alpha-06-color: rgba(0,0,0,0.6);
            --themesong-base-00-alpha-07-color: rgba(0,0,0,0.7);
            --themesong-base-00-alpha-08-color: rgba(0,0,0,0.8);
            --themesong-base-00-alpha-09-color: rgba(0,0,0,0.9);
            --themesong-base-00-alpha-10-color: rgba(0,0,0,1);

            --themesong-base-100-alpha-00-color: rgba(255,255,255,0.0);
            --themesong-base-100-alpha-01-color: rgba(255,255,255,0.1);
            --themesong-base-100-alpha-02-color: rgba(255,255,255,0.2);
            --themesong-base-100-alpha-03-color: rgba(255,255,255,0.3);
            --themesong-base-100-alpha-04-color: rgba(255,255,255,0.4);
            --themesong-base-100-alpha-05-color: rgba(255,255,255,0.5);
            --themesong-base-100-alpha-06-color: rgba(255,255,255,0.6);
            --themesong-base-100-alpha-07-color: rgba(255,255,255,0.7);
            --themesong-base-100-alpha-08-color: rgba(255,255,255,0.8);
            --themesong-base-100-alpha-09-color: rgba(255,255,255,0.9);
            --themesong-base-100-alpha-10-color: rgba(255,255,255,1);

            --themesong-theme-static-hue: ${0};
            --themesong-theme-static-saturation: ${0}%;
            --themesong-theme-static-topbarbg-light: ${30}%;
            --themesong-theme-static-bodybg-light: ${20}%;
            --themesong-theme-static-playpagebg-light: ${10}%;
            --themesong-theme-static-playbarbg-light: ${10}%;
            --themesong-theme-static-playpageavtoggle-light: ${21 + (50 / 25) * 14}%;
            --themesong-topbarbg-color: rgba(30,30,30,0.4) !important;
            --themesong-bodybg-color: hsl(0,0%,9%);

            --themesong-playbarbg-color: hsla(var(--themesong-palette-dominant-hue), calc(var(--themesong-palette-dominant-saturation) * 0.5), 10%, 0.3);

          }`
            : `:root {
            --themesong-base-00-color: #ffffff;
            --themesong-base-10-color: #e6e6e6;
            --themesong-base-20-color: #cccccc;
            --themesong-base-30-color: #b3b3b3;
            --themesong-base-40-color: #999999;
            --themesong-base-50-color: #808080;
            --themesong-base-60-color: #666666;
            --themesong-base-70-color: #4d4d4d;
            --themesong-base-80-color: #333333;
            --themesong-base-90-color: #1a1a1a;
            --themesong-base-100-color: #000;

            --themesong-base-00-alpha-00-color: rgba(255,255,255,0.0);
            --themesong-base-00-alpha-01-color: rgba(255,255,255,0.1);
            --themesong-base-00-alpha-02-color: rgba(255,255,255,0.2);
            --themesong-base-00-alpha-03-color: rgba(255,255,255,0.3);
            --themesong-base-00-alpha-04-color: rgba(255,255,255,0.4);
            --themesong-base-00-alpha-05-color: rgba(255,255,255,0.5);
            --themesong-base-00-alpha-06-color: rgba(255,255,255,0.6);
            --themesong-base-00-alpha-07-color: rgba(255,255,255,0.7);
            --themesong-base-00-alpha-08-color: rgba(255,255,255,0.8);
            --themesong-base-00-alpha-09-color: rgba(255,255,255,0.9);
            --themesong-base-00-alpha-10-color: rgba(255,255,255,1);

            --themesong-base-100-alpha-00-color: rgba(0,0,0,0.0);
            --themesong-base-100-alpha-01-color: rgba(0,0,0,0.1);
            --themesong-base-100-alpha-02-color: rgba(0,0,0,0.2);
            --themesong-base-100-alpha-03-color: rgba(0,0,0,0.3);
            --themesong-base-100-alpha-04-color: rgba(0,0,0,0.4);
            --themesong-base-100-alpha-05-color: rgba(0,0,0,0.5);
            --themesong-base-100-alpha-06-color: rgba(0,0,0,0.6);
            --themesong-base-100-alpha-07-color: rgba(0,0,0,0.7);
            --themesong-base-100-alpha-08-color: rgba(0,0,0,0.8);
            --themesong-base-100-alpha-09-color: rgba(0,0,0,0.9);
            --themesong-base-100-alpha-10-color: rgba(0,0,0,1);

            --themesong-theme-static-hue: ${0};
            --themesong-theme-static-saturation: ${0}%;
            --themesong-theme-static-topbarbg-light: ${94}%;
            --themesong-theme-static-bodybg-light: ${100}%;
            --themesong-theme-static-playpagebg-light: ${96}%;
            --themesong-theme-static-playbarbg-light: ${94}%;
            --themesong-theme-static-playpageavtoggle-light: ${21 + (50 / 25) * 14}%;
            --themesong-topbarbg-color: rgba(235,235,235,0.4) !important;
            --themesong-bodybg-color: #fff;

            --themesong-playbarbg-color: hsla(var(--themesong-palette-dominant-hue), calc(var(--themesong-palette-dominant-saturation) * 0.7), 94%, 0.3);
          }`
        }
        ${apple_music_css}
      `}
    </style>
  );
}

export default AppleMusic;
