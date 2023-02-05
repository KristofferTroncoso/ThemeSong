import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";
import { static_dark_css } from "./static-dark-css";

function StaticDark() {
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
      ).darkPrefs
  );

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingNavBar}%)`;
  }, [hue, saturationSetting, lightnessSettingNavBar]);

  return (
    <style id="StaticDark">
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
      {static_dark_css}
    </style>
  );
}

export default StaticDark;
