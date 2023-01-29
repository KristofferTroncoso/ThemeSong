import { useEffect } from "react";
import { useStore } from "../../../../store";
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
      state.theme.themePrefs.find((theme) => theme.themeId === "themeId:7")
        .darkPrefs
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
