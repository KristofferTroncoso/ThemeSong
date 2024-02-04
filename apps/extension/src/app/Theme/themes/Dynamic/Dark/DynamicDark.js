import { useEffect, useCallback } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../../selectors";

import { scrollbars } from "../../../css/core/scrollbars";
import { playerbar_progressbar } from "../../../css/core/playerbar_progressbar";
import { backgrounds } from "../../../css/core/backgrounds";
import { song_image } from "../../../css/extra/song_image";
import { misc_style_improvements } from "../../../css/extra/misc_style_improvements";
import { dark_base_colors } from "../../../css/colors/dark_base_colors";

function DynamicDark() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const dynamicDarkPrefs = useStore((state) => state.theme.prefs["db8854e3-6753-4639-b244-c8091f3b9fcb"].dark);
  const lightness = dynamicDarkPrefs.lightness;
  const playerUiState = useStore((state) => state.player.playerUiState);

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = dominantColorHSL[2] < 0.1 ? 0 : (dominantColorHSL[1] * 100 * dynamicDarkPrefs.saturation).toFixed();

  const curveLight = useCallback(
    (brightness) => {
      let hueNum = parseInt(hue, 10);
      let brightnessNum = parseInt(brightness, 10);

      if (hueNum > 35 && hueNum < 200) {
        return brightnessNum * 0.6;
      } else {
        return brightnessNum;
      }
    },
    [hue]
  );

  useEffect(() => {
    if (playerUiState === "PLAYER_PAGE_OPEN") {
      menubar.content = `hsl(${hue}, ${saturation}%, ${curveLight(lightness[1])}%)`;
    } else {
      menubar.content = `hsl(${hue}, ${saturation}%, ${curveLight(lightness[0])}%)`;
    }
  }, [hue, saturation, lightness, curveLight, playerUiState]);

  return (
    <style>
      {dark_base_colors}
      {backgrounds}
      {scrollbars}
      {playerbar_progressbar}
      {song_image}
      {misc_style_improvements}
      {`
        :root {
          --ts-navbar-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[0])}%);
          --ts-playerpage-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[1])}%);
          --ts-playerpageavtoggle-color: hsl(
            var(--ts-palette-dominant-hue),
            ${saturation}%,
            ${21 + lightness[1] / 25}%
          );
          --ts-playerbar-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[2])}%);
          --ts-body-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[3])}%);
          --ts-body-alpha-gradient-color: hsl(
            var(--ts-palette-dominant-hue) ${saturation}% ${curveLight(lightness[3])}% / 70%
          );
          --ts-playprogress-color: hsl(var(--ts-palette-1-hue), 80%, 91%);

          --ts-playprogress-knob-color: var(--ts-playprogress-color);
        }
      `}

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

export default DynamicDark;
