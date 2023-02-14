import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";

import { scrollbars } from "../../universal/scrollbars";
import { playerbar_progressbar } from "../../universal/playerbar-progressbar";
import { main_BGs } from "../../universal/main-BGs";
import { songImgStyles } from "../../universal/songImgStyles";
import { misc_style_improvements } from "../../universal/misc-style-improvements";
import { light_base_colors } from "../../universal/light-base-colors";
import { texts_and_icons } from "../../universal/texts_and_icons";

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
    // document.querySelector("html").removeAttribute("dark");
    // document.querySelector("html").setAttribute("light", "true");
  }, [hue, saturation, lightness]);

  return (
    <style id="DynamicLight">
      {
        /*css*/ `
        :root {
            --ts-topbarbg-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[0])}%
            );
            --ts-playpagebg-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[1])}%
            );
            --ts-playpageavtoggle-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${21 + (lightness[1] / 25) * 14}%
            );
            --ts-playbarbg-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[2])}%
            );
            --ts-bodybg-color: hsl(
              var(--ts-palette-dominant-hue), 
              ${saturation}%, 
              ${calcCurvedBrightness(lightness[3])}%
            );
        }
      
        ${light_base_colors}
        ${main_BGs}
        ${scrollbars}
        ${playerbar_progressbar}
        ${songImgStyles}
        
        ${texts_and_icons}
        `
      }
    </style>
  );
}

export default DynamicLight;
