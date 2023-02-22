import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";

import { scrollbars } from "../../universal/core/scrollbars";
import { playerbar_progressbar } from "../../universal/core/playerbar_progressbar";
import { backgrounds } from "../../universal/core/backgrounds";
import { song_image } from "../../universal/extra/song_image";
import { light_base_colors } from "../../universal/colors/light_base_colors";
import { misc_style_improvements } from "../../universal/extra/misc_style_improvements";
import { texts } from "../../universal/core/texts";
import { icons } from "../../universal/core/icons";
import { gradients_overlays } from "../../universal/core/gradients_overlays";
import { rulers_borders } from "../../universal/core/rulers_borders";

function DynamicLight() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const dynamicLightPrefs = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb").light
  );
  const lightness = dynamicLightPrefs.lightness;

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = (dominantColorHSL[1] * 100 * dynamicLightPrefs.saturation).toFixed();

  function calcCurvedBrightness(brightness) {
    let hueNum = parseInt(hue, 10);
    let brightnessNum = parseInt(brightness, 10);

    if ((hueNum >= 0 && hueNum < 35) || hueNum > 200) {
      return (100 - brightnessNum) * 0.3 + brightnessNum;
    } else {
      return brightnessNum;
    }
  }

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightness[0])}%)`;
  }, [hue, saturation, lightness]);

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
        ${icons}
        ${gradients_overlays}
        ${rulers_borders}
        ${misc_style_improvements}
        :root {
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
              ${21 + (lightness[1] / 25) * 14}%
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

            --ts-playprogress-color: hsl(
              var(--ts-palette-sorted-1-hue),
              var(--ts-palette-sorted-1-saturation),
              25%
            );
            --ts-playprogress-secondary-color: hsla(
              var(--ts-palette-sorted-2-hue),
              var(--ts-palette-sorted-2-saturation),
              70%,
              0.5
            );
            --ts-playprogress-container-color: hsla(
              var(--ts-palette-sorted-3-hue),
              var(--ts-palette-sorted-3-saturation),
              20%,
              0.2
            );
  
            --ts-playprogress-knob-color: var(--ts-playprogress-color);
        }
      `
      }
    </style>
  );
}

export default DynamicLight;
