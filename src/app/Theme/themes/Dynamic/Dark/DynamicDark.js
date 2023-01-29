import { useEffect } from "react";

import { useStore } from "../../../../store";
import { dynamicdark_css } from "./dynamicdarkCSS";
import { menubar } from "../../selectors";

function DynamicDark() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const {
    saturationSetting,
    lightnessSettingNavBar,
    lightnessSettingPlayPage,
    lightnessSettingBody,
    lightnessSettingPlayerBar,
  } = useStore(
    (state) =>
      state.theme.themePrefs.find((theme) => theme.themeId === "themeId:6")
        .darkPrefs
  );

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = `${(
    dominantColorHSL[1] *
    100 *
    saturationSetting
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
      lightnessSettingNavBar
    )}%)`;
  }, [hue, saturation, lightnessSettingNavBar]);

  return (
    <style id="DynamicDark">
      {`:root {
        --themesong-theme-dynamic-saturation: ${saturation};
        --themesong-theme-dynamic-topbarbg-light: ${calcCurvedBrightness(
          lightnessSettingNavBar
        )}%;
        --themesong-theme-dynamic-bodybg-light: ${calcCurvedBrightness(
          lightnessSettingBody
        )}%;
        --themesong-theme-dynamic-playpagebg-light: ${calcCurvedBrightness(
          lightnessSettingPlayPage
        )}%;
        --themesong-theme-dynamic-playbarbg-light: ${calcCurvedBrightness(
          lightnessSettingPlayerBar
        )}%;
        --themesong-theme-dynamic-playpageavtoggle-light: ${
          21 + (lightnessSettingPlayPage / 25) * 14
        }%;
      }`}
      {dynamicdark_css}
    </style>
  );
}

export default DynamicDark;
