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
              ${Math.min(80, calcCurvedBrightness(lightness[1]) - 15)}%
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
              var(--ts-palette-dominant-hue) ${saturation}% ${calcCurvedBrightness(lightness[3])}% / 90%
            );

            --ts-playprogress-color: hsl(
              var(--ts-palette-0-hue),
              var(--ts-palette-0-saturation),
              ${calDark(18)}%
            );

            --ts-playprogress-knob-color: var(--ts-playprogress-color);

            --ts-icon-accent-color: var(--ts-dynamiclight-accent-color);
            --ts-colored-button-color: var(--ts-dynamiclight-accent-color);

            --ts-overlay-color: rgb(0 0 0 / 0.6);

            --ts-secondary-text-color: var(--ts-base-80-color);
        }
      `
      }

      {(playerUiState === "PLAYER_PAGE_OPEN" || playerUiState === "FULLSCREEN") &&
        /* css */ ` 
        :root  {
          --ts-navbar-color: var(--ts-playerpage-color);
          --ts-sidebar-color: var(--ts-playerpage-color);
          --ts-playerbar-color: var(--ts-playerpage-color);
        }
      `}
    </style>
  );
}

export default DynamicLight;
