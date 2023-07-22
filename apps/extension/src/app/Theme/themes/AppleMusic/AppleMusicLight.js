import { useEffect } from "react";
import { menubar } from "../../selectors";
import { useStore } from "/src/app/store";
import { dark_base_colors } from "../../css/colors/dark_base_colors";
import { light_base_colors } from "../../css/colors/light_base_colors";
import { texts } from "../../css/core/texts";
import { icons_buttons } from "../../css/core/icons_buttons";

function AppleMusicLight() {
  const playerUiState = useStore((state) => state.player.playerUiState);
  const lightVibrantHSL = useStore((state) => state.palette.palette.LightVibrant.hsl);
  const dominantOKLCH = useStore((state) => state.palette.dominant.oklch);

  useEffect(() => {
    if (playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") {
      /*menubar.content = `oklch(0.96 ${dominantOKLCH[1] / 7} ${dominantOKLCH[2]})`;*/
      menubar.content = `rgb(235 235 235)`;
    } else {
      menubar.content = `hsl(${lightVibrantHSL[0] * 360}, ${lightVibrantHSL[1] * 100 * 0.2}%, 35%)`;
    }
  }, [playerUiState, lightVibrantHSL, dominantOKLCH]);

  return (
    <style>
      {
        /*css*/ `
        :root {
          --ts-body-color: #333333;
          --ts-body-alpha-gradient-color: hsl(0 0% 100% / 0.5);
          --ts-overlay-color: rgba(0,0,0,0.6);
          --ts-texts-selection-color: dodgerblue;
          --ts-songimg-box-shadow: 0 10px 40px rgba(0,0,0,0.4);

          --applemusic-color: #d60017;
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


        ytmusic-play-button-renderer {
          --ytmusic-play-button-icon-color: #fff !important;
          /* --ytmusic-play-button-background-color: var(--ts-base-00-alpha-03-color) !important; */
          /* --ytmusic-play-button-active-background-color: var(--ts-base-00-alpha-03-color) !important; */
        }

        /* Recaps icon/img . It has a black bg so im inverting it on light themes */
        #img[src="https://www.gstatic.com/music/listening_review/HOME_RECAP_SHELF_AVATAR_BLACK_60x60.png"] {
          filter: invert(1);
          border: 20px;
        }

        #img[src="https://www.gstatic.com/music/listening_review/HOME_RECAP_SHELF_AVATAR_BLACK_120x120.png"] {
          filter: invert(1);
          border: 20px;
        }
     `
      }

      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE")
        ? `
        ${dark_base_colors}
        `
        : /*css*/ `
        ${texts}
        ${light_base_colors}
        ${icons_buttons}
        :root {
          --ts-navbar-color: rgba(240,240,240,0.8) !important;
          /* --ts-navbar-color: oklch(0.9 calc(var(--ts-palette-dominant-c) / 6) var(--ts-palette-dominant-h) / 0.3); */
          --ts-sidebar-color: linear-gradient(
            0deg,
            oklch(0.9 calc(var(--ts-palette-dominant-c) / 6) var(--ts-palette-dominant-h) / 0.8) 0%,
            rgb(240 240 240 / 0.5) 70%
          );
          --ts-body-color: #fff;
          --ts-playerbar-color: oklch(0.9 calc(var(--ts-palette-dominant-c) / 3) var(--ts-palette-dominant-h) / 0.3);
          --ts-playprogress-color: #5e5e5e;
          --ts-primary-icon-color: var(--ts-base-70-color);
          --ts-secondary-icon-color: var(--applemusic-color);
          --ts-colored-button-color: var(--applemusic-color);
          --ts-zebra-stripes-color: rgba(0,0,0,0.04);
        }

        ytmusic-tabs.stuck {
          border-top: 1px solid #d1d1d1;
          border-bottom: 1px solid #d1d1d1;
        }

        #button-shape-like button {
          color: var(--applemusic-color);
        }
      `}
    </style>
  );
}

export default AppleMusicLight;
