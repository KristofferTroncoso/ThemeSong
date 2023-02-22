import { useEffect, useCallback } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";

import { scrollbars } from "../../universal/core/scrollbars";
import { playerbar_progressbar } from "../../universal/core/playerbar_progressbar";
import { backgrounds } from "../../universal/core/backgrounds";
import { song_image } from "../../universal/extra/song_image";
import { misc_style_improvements } from "../../universal/extra/misc_style_improvements";
import { dark_base_colors } from "../../universal/colors/dark_base_colors";
import { Global, css } from "@emotion/react";

function DynamicDark() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const dynamicDarkPrefs = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb").dark
  );
  const lightness = dynamicDarkPrefs.lightness;

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = (dominantColorHSL[1] * 100 * dynamicDarkPrefs.saturation).toFixed();

  const curveLight = useCallback(
    (brightness) => {
      let hueNum = parseInt(hue, 10);
      let brightnessNum = parseInt(brightness, 10);

      if (hueNum > 35 && hueNum < 200) {
        return brightnessNum * 0.7;
      } else {
        return brightnessNum;
      }
    },
    [hue]
  );

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturation}%, ${curveLight(lightness[0])}%)`;
  }, [hue, saturation, lightness, curveLight]);

  return (
    <Global
      styles={css`
        ${dark_base_colors}
        ${backgrounds}
        ${scrollbars}
        ${playerbar_progressbar}
        ${song_image}
        ${misc_style_improvements}
        :root {
          --ts-navbar-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[0])}%);
          --ts-playerpage-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[1])}%);
          --ts-playerpageavtoggle-color: hsl(
            var(--ts-palette-dominant-hue),
            ${saturation}%,
            ${21 + (lightness[1] / 25) * 14}%
          );
          --ts-playerbar-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[2])}%);
          --ts-body-color: hsl(var(--ts-palette-dominant-hue), ${saturation}%, ${curveLight(lightness[3])}%);

          --ts-playprogress-color: hsl(var(--ts-palette-sorted-1-hue), 80%, 91%);
          --ts-playprogress-secondary-color: hsla(
            var(--ts-palette-sorted-2-hue),
            var(--ts-palette-sorted-2-saturation),
            35%,
            0.7
          );
          --ts-playprogress-container-color: hsla(
            var(--ts-palette-sorted-3-hue),
            var(--ts-palette-sorted-3-saturation),
            50%,
            0.3
          );

          --ts-playprogress-knob-color: var(--ts-playprogress-color);
        }
      `}
    />
  );
}

export default DynamicDark;
