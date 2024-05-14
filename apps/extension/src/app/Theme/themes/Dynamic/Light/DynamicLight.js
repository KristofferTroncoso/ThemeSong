import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../../selectors";

import useLightAppearance from "../../../components/useLightAppearance";
import { scrollbars } from "../../../css/core/scrollbars";
import { playerbar_progressbar } from "../../../css/core/playerbar_progressbar";
import { backgrounds } from "../../../css/core/backgrounds";
import { song_image } from "../../../css/extra/song_image";
import { light_base_colors } from "../../../css/colors/light_base_colors";
import { misc_style_improvements } from "../../../css/extra/misc_style_improvements";
import { texts } from "../../../css/core/texts";
import { icons_buttons } from "../../../css/core/icons_buttons";
import { gradients_overlays } from "../../../css/core/gradients_overlays";
import { rulers_borders } from "../../../css/core/rulers_borders";

function DynamicLight() {
  useLightAppearance();

  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const dynamicLightPrefs = useStore((state) => state.theme.prefs["db8854e3-6753-4639-b244-c8091f3b9fcb"].light);
  const lightness = dynamicLightPrefs.lightness;
  const playerUiState = useStore((state) => state.player.playerUiState);

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = dominantColorHSL[2] < 0.1 ? 0 : (dominantColorHSL[1] * 100 * dynamicLightPrefs.saturation).toFixed();

  function calcCurvedBrightness(brightness) {
    let hueNum = parseInt(hue, 10);
    let brightnessNum = parseInt(brightness, 10);

    if ((hueNum >= 0 && hueNum < 35) || hueNum > 200) {
      return (100 - brightnessNum) * 0.3 + brightnessNum;
    } else {
      return brightnessNum;
    }
  }

  function calDark(brightness) {
    let hueNum = parseInt(hue, 10);
    let brightnessNum = parseInt(brightness, 10);

    if (hueNum > 35 && hueNum < 200) {
      return brightnessNum * 0.6;
    } else {
      return brightnessNum;
    }
  }

  useEffect(() => {
    if (playerUiState === "PLAYER_PAGE_OPEN") {
      menubar.content = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightness[1])}%)`;
    } else {
      menubar.content = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightness[0])}%)`;
    }
  }, [hue, saturation, lightness, playerUiState]);

  return (
    <style id="DynamicLight">
      {
        /*css*/ `
        ${light_base_colors}
        ${backgrounds}
        ${scrollbars}
        ${playerbar_progressbar}
        ${song_image}
        ${texts}
        ${icons_buttons}
        ${gradients_overlays}
        ${rulers_borders}
        ${misc_style_improvements}
        :root {
            --ts-dynamiclight-accent-color: hsl(
              var(--ts-palette-0-hue)
              var(--ts-palette-0-saturation)
              ${calDark(20)}%
            );

            --ts-navbar-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[0])}%
            );
            --ts-playerpage-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[1])}%
            );
            --ts-playerpageavtoggle-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${Math.min(80, calcCurvedBrightness(lightness[1]) - 10)}%
            );
            --ts-playerbar-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[2])}%
            );
            --ts-body-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[3])}%
            );

            --ts-body-alpha-gradient-color: hsl(
              var(--ts-palette-dominant-hue) ${saturation}% ${calcCurvedBrightness(lightness[3])}% / 80%
            );

            --ts-playprogress-color: hsl(
              var(--ts-palette-0-hue),
              var(--ts-palette-0-saturation),
              ${calDark(18)}%
            );

            --ts-playprogress-knob-color: var(--ts-playprogress-color);

            --ts-icon-accent-color: var(--ts-dynamiclight-accent-color);
            --ts-colored-button-color: var(--ts-dynamiclight-accent-color);
            --ts-secondary-icon-color: var(--ts-dynamiclight-accent-color);

            --ts-overlay-color: rgb(0 0 0 / 0.6);

            --ts-temp-color: hsl(var(--ts-palette-dominant-hue) ${saturation}% 40% / 10%);
            --ts-overlay-nowplaying-color: var(--ts-temp-color);
            --ts-overlay-highlighted-color: var(--ts-temp-color);
            --ts-pill-color: var(--ts-temp-color);
            --ts-scrollbar-color: hsl(var(--ts-palette-dominant-hue) ${saturation}% 40% / 18%);

            --ts-secondary-text-color: var(--ts-base-80-color);
        }

        .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
          background-color: var(--ts-temp-color);
        }

        /* img box-shadows */
        a:has(> ytmusic-thumbnail-renderer[thumbnail-crop="MUSIC_THUMBNAIL_CROP_UNSPECIFIED"]) {
          box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
        }

        #items.ytmusic-grid-renderer>*.ytmusic-grid-renderer {
          padding: 2px;
        }

        #items.ytmusic-carousel {
          padding: 2px 2px 0 2px;
        }

        /* album/playlist page box-shadow */
        #thumbnail.ytmusic-detail-header-renderer, .thumbnail.ytmusic-detail-header-renderer {
          box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
          margin-bottom: 4px;
        }

        img.yt-img-shadow {
          box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
        }

        /* mini-player box-shadow */
        ytmusic-player[player-ui-state=MINIPLAYER] {
          box-shadow: 0 2px 4px rgb(0 0 0 / 0.2);
        }

        /* player-bar img border */
        .image.ytmusic-player-bar {
          border: 1px solid rgb(0 0 0 / 0.1);
        }
      `
      }

      {(playerUiState === "PLAYER_PAGE_OPEN" || playerUiState === "FULLSCREEN") &&
        /* css */ ` 
        :root  {
          --ts-navbar-color: var(--ts-playerpage-color);
          --ts-sidebar-color: var(--ts-playerpage-color);
          --ts-playerbar-color: var(--ts-playerpage-color);

          --ts-listbox-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(lightness[1]) - 6}%
          ) !important;

          --yt-spec-menu-background: var(--ts-listbox-color) !important;

          --ytmusic-general-background-c: var(--ts-playerpage-color) !important;
        }

        #PanelPage {
          background: var(--ts-listbox-color);
        }

        tp-yt-paper-listbox {
          background: var(--ts-listbox-color);
        }
      `}
    </style>
  );
}

export default DynamicLight;
