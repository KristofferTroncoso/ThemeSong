import { useEffect } from "react";
import { menubar } from "../../selectors";
import { useStore } from "/src/app/store";
import { dark_base_colors } from "../../css/colors/dark_base_colors";
import { light_base_colors } from "../../css/colors/light_base_colors";
import { texts } from "../../css/core/texts";
import { icons_buttons } from "../../css/core/icons_buttons";
import useLightAppearance from "../../components/useLightAppearance";

function AppleMusicLight() {
  const playerUiState = useStore((state) => state.player.playerUiState);
  const lightVibrantOKLCH = useStore((state) => state.palette.palette.LightVibrant.oklch);
  const dominantOKLCH = useStore((state) => state.palette.dominant.oklch);

  useLightAppearance();

  useEffect(() => {
    if (playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") {
      menubar.content = `rgb(255 255 255)`;
      document.querySelector("html").removeAttribute("dark");
      document.querySelector("html").setAttribute("light", "true");
    } else {
      menubar.content = `oklch(45% ${lightVibrantOKLCH[1] * 0.5} ${lightVibrantOKLCH[2]})`;
      document.querySelector("html").setAttribute("dark", "true");
      document.querySelector("html").removeAttribute("light");
    }
  }, [playerUiState, lightVibrantOKLCH, dominantOKLCH]);

  return (
    <style>
      {
        /*css*/ `
        :root {
          --ts-body-color: #333333;
          --ts-body-alpha-gradient-color: hsl(0 0% 100% / 0.9);
          --ts-overlay-color: rgb(0 0 0 / 0.6);
          --ts-texts-selection-color: dodgerblue;
          --ts-songimg-box-shadow: 0 10px 40px rgb(0 0 0 / 0.4);

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

        ytmusic-play-button-renderer {
          --ytmusic-play-button-icon-color: #fff !important;
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
          --ts-navbar-color: linear-gradient(
            180deg,
            rgb(255 255 255) 0%,
            rgb(245 245 245 / 0.6) 60%
          ) !important;
          --ts-sidebar-color: linear-gradient(
            180deg,
            rgb(255 255 255) 0%,
            rgb(230 230 230 / 0.3) 5%,
            hsl(var(--ts-palette-dominant-hue) calc(var(--ts-palette-dominant-saturation) / 2) 90% / 0.3) 50%,
            hsl(var(--ts-palette-dominant-hue) calc(var(--ts-palette-dominant-saturation) / 2) 90% / 0.5) 70%,
            rgb(240 240 240 / 0.8) 80%
          );
          --ts-body-color: #fff;
          --ts-playerbar-color: linear-gradient(
            90deg,
            rgb(240 240 240 / 0.8) 15%,
            hsl(var(--ts-palette-dominant-hue) calc(var(--ts-palette-dominant-saturation) / 2) 90% / 0.7) 25%,
            hsl(var(--ts-palette-dominant-hue) calc(var(--ts-palette-dominant-saturation) / 2) 90% / 0.7) 75%,
            rgb(240 240 240 / 0.8) 85%
          );
          --ts-playprogress-color: #5e5e5e;
          --ts-primary-icon-color: var(--ts-base-70-color);
          --ts-secondary-icon-color: var(--applemusic-color);
          --ts-colored-button-color: var(--applemusic-color);
          --ts-zebra-stripes-color: rgb(0 0 0 / 0.04);
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
