import { useEffect } from "react";
import { menubar } from "../../selectors";
import { useStore } from "/src/app/store";
import { dark_base_colors } from "../../css/colors/dark_base_colors";
import { icons_buttons } from "../../css/core/icons_buttons";

function AppleMusicDark() {
  const playerUiState = useStore((state) => state.player.playerUiState);
  const lightVibrantOKLCH = useStore((state) => state.palette.palette.LightVibrant.oklch);

  useEffect(() => {
    if (playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") {
      menubar.content = `hsl(0 0% 12%)`;
    } else {
      menubar.content = menubar.content = `oklch(45% ${lightVibrantOKLCH[1] * 0.5} ${lightVibrantOKLCH[2]})`;
    }
  }, [playerUiState, lightVibrantOKLCH]);

  return (
    <style>
      {dark_base_colors}
      {
        /*css*/ `
        :root {
          --ts-body-color: hsl(0 0% 12%);
          --ts-body-alpha-gradient-color: hsl(0 0% 12% / 0.7);
          --ts-overlay-color: rgb(0 0 0 / 0.6);
          --ts-nowplaying-background-color: #c91734;
          --ts-texts-selection-color: #1665b5;
          --ts-songimg-box-shadow: 0 10px 40px rgb(0 0 0 / 0.4);
          
          --applemusic-color: #ff3e53;

          --ts-ruler-secondary-color: var(--ts-base-100-alpha-01-color);
        }
     `
      }
      {(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") &&
        /*css*/ `
        ${icons_buttons}
        :root {
          --ts-navbar-color: linear-gradient(
            180deg,
            hsl(0 0% 12%) 0%,
            hsl(0 0% 14% / 0.8) 60%
          ) !important;
          --ts-playerbar-color: linear-gradient(
            90deg,
            hsl(0 0% 14% / 0.8) 15%,
            oklch(0.3 calc(var(--ts-palette-dominant-c) / 5) var(--ts-palette-dominant-h) / 0.7) 25%,
            oklch(0.3 calc(var(--ts-palette-dominant-c) / 5) var(--ts-palette-dominant-h) / 0.7) 75%,
            hsl(0 0% 14% / 0.8) 85%
          );
          --ts-zebra-stripes-color: rgb(255 255 255 / 0.03);
          --ts-secondary-icon-color: var(--applemusic-color);
          --ts-colored-button-color: var(--applemusic-color);
          --ts-sidebar-color: linear-gradient(
            180deg,
            hsl(0 0% 12%) 0%,
            hsl(0 0% 15% / 0.8) 5%,
            hsl(0 0% 15% / 0.8) 80%
          );
        }

        ytmusic-tabs.stuck {
          border-top: 1px solid #454545;
          border-bottom: 1px solid #454545;
        }

        #button-shape-like button {
          color: var(--applemusic-color);
        }

        body::-webkit-scrollbar-track {
          background-color: rgb(255 255 255 / 0.03);
        }
      `}
    </style>
  );
}

export default AppleMusicDark;
