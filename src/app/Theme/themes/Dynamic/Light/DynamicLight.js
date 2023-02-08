import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { dynamiclight_css } from "./dynamiclightCSS";
import { menubar } from "../../selectors";

function DynamicLight() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const dynamicLightPrefs = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb"
      ).light
  );
  const lightness = dynamicLightPrefs.lightness;

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = `${(
    dominantColorHSL[1] *
    100 *
    dynamicLightPrefs.saturation
  ).toFixed()}%`;

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
    menubar.content = `hsl(${hue}, ${saturation}, ${calcCurvedBrightness(
      lightness[0]
    )}%)`;
  }, [hue, saturation, lightness]);

  return (
    <style id="DynamicLight">
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
      {dynamiclight_css}
    </style>
  );
}

export default DynamicLight;
