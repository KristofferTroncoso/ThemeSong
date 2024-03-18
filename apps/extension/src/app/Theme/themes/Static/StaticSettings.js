import { css } from "@emotion/react";
import StaticDarkSettings from "./Dark/StaticDarkSettings";
import StaticLightSettings from "./Light/StaticLightSettings";
import { useStore } from "/src/app/store";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CgDarkMode } from "react-icons/cg";
import PanelButton from "../../../QuickAccessPanel/components/PanelButton";
import useLocalization from "../../../Extension/Localization/useLocalization";

export function StaticSettings() {
  const staticUserPrefs = useStore((state) => state.theme.prefs["b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"]);
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);
  const getMessage = useLocalization();

  function handleDarkLightChange(value) {
    let newStaticUserPrefs = {
      ...staticUserPrefs,
      appearance: value,
    };
    setSingleThemePrefs("b458eaae-0cbd-4a44-8847-c7a6a6ea1be8", newStaticUserPrefs);
  }

  function returnSettingSliders() {
    switch (staticUserPrefs.appearance) {
      case "dark":
        return <StaticDarkSettings />;
      case "light":
        return <StaticLightSettings />;
      case "system":
        return (
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-evenly;
            `}
          >
            <StaticLightSettings />
            <StaticDarkSettings />
          </div>
        );
      default:
        return (
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-evenly;
            `}
          >
            <StaticLightSettings />
            <StaticDarkSettings />
          </div>
        );
    }
  }

  return (
    <div>
      <form
        name="appearance"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
        `}
        onSubmit={(e) => e.preventDefault()}
      >
        <PanelButton
          title={getMessage("darkMode")}
          name="appearance"
          css={css`
            height: 25px;
            width: 35px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.1);
            background: ${staticUserPrefs.appearance === "dark" && "#fff"};
            color: ${staticUserPrefs.appearance === "dark" && "#9d00ff"};
            border: 0;
            border-radius: 3px;
            :hover {
              color: #9d00ff;
            }
          `}
          value="dark"
          onClick={(e) => handleDarkLightChange("dark")}
        >
          <DarkModeIcon style={{ fontSize: 17 }} />
        </PanelButton>
        <PanelButton
          title={getMessage("lightMode")}
          name="appearance"
          css={css`
            height: 25px;
            width: 35px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.1);
            background: ${staticUserPrefs.appearance === "light" && "#fff"};
            color: ${staticUserPrefs.appearance === "light" && "#ff8400"};
            border: 0;
            border-radius: 3px;
            :hover {
              color: #fcad00;
            }
          `}
          value="light"
          onClick={(e) => handleDarkLightChange("light")}
        >
          <LightModeIcon
            css={css`
              font-size: 17px;
            `}
          />
        </PanelButton>
        <PanelButton
          title={getMessage("useDeviceSetting")}
          name="appearance"
          css={css`
            height: 25px;
            width: 35px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.1);
            background: ${staticUserPrefs.appearance === "system" && "#fff"};
            color: ${staticUserPrefs.appearance === "system" && "#009961"};
            border: 0;
            border-radius: 3px;
            :hover {
              color: #009961;
            }
          `}
          value="system"
          onClick={(e) => handleDarkLightChange("system")}
        >
          <CgDarkMode size={18} />
        </PanelButton>
      </form>
      <div
        css={css`
          display: flex;
          justify-content: center;
          width: 100%;
        `}
      >
        {returnSettingSliders()}
      </div>
    </div>
  );
}

export default StaticSettings;
