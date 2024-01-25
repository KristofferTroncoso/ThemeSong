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
      menubar.content = `hsl(0 0% 10%)`;
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
          --ts-body-color: hsl(0 0% 10%);
          --ts-body-alpha-gradient-color: hsl(0 0% 10% / 0.7);
          --ts-overlay-color: rgb(0 0 0 / 0.6);
          --ts-nowplaying-background-color: #a60012;
          --ts-texts-selection-color: #1665b5;
          --ts-songimg-box-shadow: 0 10px 40px rgb(0 0 0 / 0.4);
          
          --applemusic-color: #ff3e53;

          --ts-ruler-secondary-color: var(--ts-base-100-alpha-01-color);
        }

        /* overwriting the icon color for the img hovers */
        .thumbnail-overlay .icon {
          fill: #0080ff;
        }

        .icon.ytmusic-play-button-renderer {
          fill: #0080ff;
        }
     `
      }
      {(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") &&
        /*css*/ `
        ${icons_buttons}
        :root {
          --ts-navbar-color: linear-gradient(
            180deg,
            hsl(0 0% 10%) 0%,
            hsl(0 0% 12% / 0.9) 60%
          ) !important;
          --ts-playerbar-color: hsl(0 0% 15% / 0.8);
          --ts-zebra-stripes-color: rgb(255 255 255 / 0.015);
          --ts-secondary-icon-color: var(--applemusic-color);
          --ts-colored-button-color: var(--applemusic-color);
          --ts-sidebar-color: linear-gradient(
            180deg,
            hsl(0 0% 10%) 0%,
            hsl(0 0% 13% / 0.8) 5%,
            hsl(0 0% 13% / 0.8) 100%
          );

          --ts-primary-icon-color: rgb(220 220 220);
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

        ytmusic-search-box[is-bauhaus-sidenav-enabled]:not([opened]):not([has-query]) .search-box.ytmusic-search-box {
          background: rgb(20 20 20 / 60%);
        }
      `}
    </style>
  );
}

export default AppleMusicDark;
