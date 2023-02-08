import { useEffect } from "react";

import { useStore } from "/src/app/store";
import { dynamicdark_css } from "./dynamicdarkCSS";
import { menubar } from "../../selectors";

function DynamicDark() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const dynamicDarkPrefs = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb"
      ).dark
  );
  const lightness = dynamicDarkPrefs.lightness;

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = `${(
    dominantColorHSL[1] *
    100 *
    dynamicDarkPrefs.saturation
  ).toFixed()}%`;

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
    menubar.content = `hsl(${hue}, ${saturation}, ${calcCurvedBrightness(
      lightness[0]
    )}%)`;
  }, [hue, saturation, lightness]);

  return (
    <style id="DynamicDark">
      {`:root {
        --themesong-theme-dynamic-saturation: ${saturation};
        --themesong-theme-dynamic-topbarbg-light: ${calcCurvedBrightness(
          lightness[0]
        )}%;
        --themesong-theme-dynamic-playpagebg-light: ${calcCurvedBrightness(
          lightness[1]
        )}%;
        --themesong-theme-dynamic-playpageavtoggle-light: ${
          21 + (lightness[1] / 25) * 14
        }%;
        --themesong-theme-dynamic-playbarbg-light: ${calcCurvedBrightness(
          lightness[2]
        )}%;
        --themesong-theme-dynamic-bodybg-light: ${calcCurvedBrightness(
          lightness[3]
        )}%;
      }`}
      {dynamicdark_css}
    </style>
  );
}

export default DynamicDark;
