import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";

import { scrollbars } from "../../universal/scrollbars";
import { playerbar_progressbar } from "../../universal/playerbar-progressbar";
import { main_BGs } from "../../universal/main-BGs";
import { songImgStyles } from "../../universal/songImgStyles";
import { misc_style_improvements } from "../../universal/misc-style-improvements";
import { dark_base_colors } from "../../universal/dark-base-colors";

function DynamicDark() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const dynamicDarkPrefs = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb").dark
  );
  const lightness = dynamicDarkPrefs.lightness;

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = (dominantColorHSL[1] * 100 * dynamicDarkPrefs.saturation).toFixed();

  function calcCurvedBrightness(brightness) {
    let hueNum = parseInt(hue, 10);
    let brightnessNum = parseInt(brightness, 10);

    if (hueNum > 35 && hueNum < 200) {
      return brightnessNum * 0.7;
    } else {
      return brightnessNum;
    }
  }

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightness[0])}%)`;
  }, [hue, saturation, lightness]);

  return (
    <style id="DynamicDark">
      {`
        :root {
          --themesong-topbarbg-color: hsl(
            var(--themesong-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(lightness[0])}%
          );
          --themesong-playpagebg-color: hsl(
            var(--themesong-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(lightness[1])}%
          );
          --themesong-playpageavtoggle-color: hsl(
            var(--themesong-palette-dominant-hue), 
            ${saturation}%, 
            ${21 + (lightness[1] / 25) * 14}%
          );
          --themesong-playbarbg-color: hsl(
            var(--themesong-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(lightness[2])}%
          );
          --themesong-bodybg-color: hsl(
            var(--themesong-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(lightness[3])}%
          );
        }

        ${dark_base_colors}
        ${main_BGs}
        ${scrollbars}
        ${playerbar_progressbar}
        ${songImgStyles}
        ${misc_style_improvements}
      `}
    </style>
  );
}

export default DynamicDark;
