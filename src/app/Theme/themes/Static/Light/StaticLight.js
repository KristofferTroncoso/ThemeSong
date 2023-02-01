import { useEffect } from "react";
import { static_light_css } from "./static-light-css";
import { useStore } from "../../../../store";
import { menubar } from "../../selectors";

function StaticLight() {
  const {
    hue,
    saturationSetting,
    lightnessSettingNavBar,
    lightnessSettingPlayPage,
    lightnessSettingBody,
    lightnessSettingPlayerBar,
  } = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
      ).lightPrefs
  );

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingNavBar}%)`;
  }, [hue, saturationSetting, lightnessSettingNavBar]);

  return (
    <style id="StaticLight">
      {`:root {
        --themesong-theme-static-hue: ${hue};
        --themesong-theme-static-saturation: ${saturationSetting}%;
        --themesong-theme-static-topbarbg-light: ${lightnessSettingNavBar}%;
        --themesong-theme-static-bodybg-light: ${lightnessSettingBody}%;
        --themesong-theme-static-playpagebg-light: ${lightnessSettingPlayPage}%;
        --themesong-theme-static-playbarbg-light: ${lightnessSettingPlayerBar}%;
        --themesong-theme-static-playpageavtoggle-light: ${
          21 + (lightnessSettingPlayPage / 25) * 14
        }%;
      }`}
      {static_light_css}
    </style>
  );
}

export default StaticLight;
