import { useEffect } from "react";
import { useStore } from "../../../../store";
import { dynamiclight_css } from "./dynamiclightCSS";
import { menubar } from "../../selectors";

function DynamicLight() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const {
    saturationSetting,
    lightnessSettingNavBar,
    lightnessSettingPlayPage,
    lightnessSettingBody,
    lightnessSettingPlayerBar,
  } = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb"
      ).lightPrefs
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

    if ((hueNum >= 0 && hueNum < 35) || hueNum > 200) {
      return (100 - brightnessNum) * 0.3 + brightnessNum;
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
    <style id="DynamicLight">
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
      {dynamiclight_css}
    </style>
  );
}

export default DynamicLight;
