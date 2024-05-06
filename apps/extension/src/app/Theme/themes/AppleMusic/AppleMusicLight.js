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
      menubar.content = `rgb(245 245 245)`;
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
          --ts-body-alpha-gradient-color: hsl(0 0% 100% / 0.75);
          --ts-overlay-color: rgb(0 0 0 / 0.6);
          --ts-texts-selection-color: dodgerblue;
          --ts-songimg-box-shadow: 0 5px 40px rgb(0 0 0 / 0.5);

          --applemusic-color: #d60017;

          --ts-nowplaying-background-color: var(--applemusic-color);
        }

        /* white icon all the time for player song image */
        ytmusic-player {
          --ts-primary-icon-color: #ffffff;
        }

        /* overwriting the icon color for the img hovers */
        .thumbnail-overlay .icon {
          fill: #0080ff;
        }

        .icon.ytmusic-play-button-renderer {
          fill: #0080ff;
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

        ytmusic-dialog {
          background-color: #fff;
        }


        /* settings page override. color*/
        .dialog-title.ytmusic-settings-page {
          color: #000;
        }

        .close-icon.ytmusic-settings-page {
          color: rgb(0 0 0 / 50%);
        }
     `
      }

      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE")
        ? `
        ${dark_base_colors}
        :root {
          --ytmusic-general-background-c: var(--ts-theme-apple-5-color) !important;
        }
        `
        : /*css*/ `
        ${texts}
        ${light_base_colors}
        ${icons_buttons}
        :root {
          --ts-navbar-color: linear-gradient(
            180deg,
            rgb(245 245 245) 0%,
            rgb(245 245 245 / 0.9) 60%
          ) !important;
          --ts-sidebar-color: rgb(245 245 245 / 0.45);
          --ts-body-color: #fff;
          --ts-playerbar-color: rgb(244 244 244 / 0.6);
          --ts-playprogress-color: #6b6b6b;
          --ts-playprogress-secondary-color: rgb(0 0 0 / 0.15);
          --ts-playprogress-container-color: rgb(0 0 0 / 0.1);
          --ts-primary-icon-color: var(--ts-base-80-color);
          --ts-secondary-icon-color: var(--applemusic-color);
          --ts-colored-button-color: var(--applemusic-color);
          --ts-zebra-stripes-color: rgb(0 0 0 / 0.027);

          --ts-primary-text-color: var(--ts-base-100-alpha-09-color);
          --ts-secondary-text-color: var(--ts-base-60-color);

          --ts-overlay-highlighted-color: var(--ts-base-100-alpha-005-color);
          --ts-pill-color: var(--ts-base-100-alpha-005-color);
        }

        ytmusic-search-box[is-bauhaus-sidenav-enabled]:not([opened]):not([has-query]) .search-box.ytmusic-search-box {
          background: rgb(247 247 247 / 60%);
        }

        ytmusic-tabs.stuck {
          border-top: 1px solid #d1d1d1;
          border-bottom: 1px solid #d1d1d1;
        }

        #button-shape-like button {
          color: var(--applemusic-color);
        }

        yt-icon.ytmusic-inline-badge-renderer {
          fill: #7e36aa;
        }

        /* img box-shadows */
        a:has(> ytmusic-thumbnail-renderer[thumbnail-crop="MUSIC_THUMBNAIL_CROP_UNSPECIFIED"]) {
          box-shadow: 0 2px 5px rgb(0 0 0 / 0.2);
        }

        #items.ytmusic-grid-renderer>*.ytmusic-grid-renderer {
          padding: 4px;
        }

        #items.ytmusic-carousel {
          padding: 4px 4px 0 4px;
        }

        /* album/playlist page box-shadow */
        #thumbnail.ytmusic-detail-header-renderer, .thumbnail.ytmusic-detail-header-renderer {
          box-shadow: 0 2px 6px rgb(0 0 0 / 0.2);
          margin-bottom: 8px;
        }

        img.yt-img-shadow {
          box-shadow: 0 2px 6px rgb(0 0 0 / 0.2);
        }

        /* mini-player box-shadow */
        ytmusic-player[player-ui-state=MINIPLAYER] {
          box-shadow: 0 2px 6px rgb(0 0 0 / 0.4);
        }

        /* player-bar img border */
        .image.ytmusic-player-bar {
          border: 1px solid rgb(0 0 0 / 0.1);
        }
      `}
    </style>
  );
}

export default AppleMusicLight;
