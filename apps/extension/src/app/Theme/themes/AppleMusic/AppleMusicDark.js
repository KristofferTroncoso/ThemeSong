import { useEffect } from "react";
import { menubar } from "../../selectors";
import { useStore } from "/src/app/store";
import { dark_base_colors } from "../../css/colors/dark_base_colors";
import { icons_buttons } from "../../css/core/icons_buttons";

function AppleMusicDark() {
  const playerUiState = useStore((state) => state.player.playerUiState);
  const lightVibrantHSL = useStore((state) => state.palette.palette.LightVibrant.hsl);

  useEffect(() => {
    if (playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") {
      menubar.content = `#262626`;
    } else {
      menubar.content = `hsl(${lightVibrantHSL[0] * 360}, ${lightVibrantHSL[1] * 100 * 0.2}%, 35%)`;
    }
  }, [playerUiState, lightVibrantHSL]);

  return (
    <style>
      {dark_base_colors}
      {
        /*css*/ `
        :root {
          --ts-body-color: hsl(0,0%,12%);
          --ts-body-alpha-gradient-color: hsl(0 0% 12% / 0.6);
          --ts-overlay-color: rgba(0,0,0,0.6);
          --ts-nowplaying-background-color: #db2a47;
          --ts-texts-selection-color: #1665b5;
          --ts-songimg-box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          
          --applemusic-color: #fa586a;
        }
     `
      }
      {(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") &&
        /*css*/ `
        ${icons_buttons}
        :root {
          --ts-navbar-color: #292929db !important;
          --ts-playerbar-color: oklch(0.3 calc(var(--ts-palette-dominant-c) / 4) var(--ts-palette-dominant-h) / 0.2);
          --ts-zebra-stripes-color: rgba(255,255,255,0.03);;
          --ts-secondary-icon-color: var(--applemusic-color);
          --ts-colored-button-color: var(--applemusic-color);
          --ts-sidebar-color: linear-gradient(
            0deg,
            oklch(0.3 calc(var(--ts-palette-dominant-c) / 6) var(--ts-palette-dominant-h) / 0.8) 0%,
            rgb(45 45 45 / 0.5) 70%
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
          background-color: rgba(255,255,255,0.03);
        }
      `}
    </style>
  );
}

export default AppleMusicDark;
