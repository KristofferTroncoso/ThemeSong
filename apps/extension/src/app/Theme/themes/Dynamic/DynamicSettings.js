import { css } from "@emotion/react";
import DynamicDarkSettings from "./Dark/DynamicDarkSettings";
import DynamicLightSettings from "./Light/DynamicLightSettings";
import { useStore } from "/src/app/store";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CgDarkMode } from "react-icons/cg";
import PanelButton from "../../../QuickAccessPanel/components/PanelButton";
import useLocalization from "../../../Extension/Localization/useLocalization";

function DynamicSettings() {
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);
  const dynamicUserPrefs = useStore((state) => state.theme.prefs["db8854e3-6753-4639-b244-c8091f3b9fcb"]);
  const getMessage = useLocalization();

  function handleDarkLightChange(value) {
    let newDynamicUserPrefs = {
      ...dynamicUserPrefs,
      appearance: value,
    };
    setSingleThemePrefs("db8854e3-6753-4639-b244-c8091f3b9fcb", newDynamicUserPrefs);
  }

  function returnSettingSliders() {
    switch (dynamicUserPrefs.appearance) {
      case "light":
        return <DynamicLightSettings />;
      case "dark":
        return <DynamicDarkSettings />;
      case "system":
        return (
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-evenly;
            `}
          >
            <DynamicLightSettings />
            <DynamicDarkSettings />
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
            <DynamicLightSettings />
            <DynamicDarkSettings />
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
            background: rgb(255 255 255 / 0.15);
            background: ${dynamicUserPrefs.appearance === "dark" && "#fff"};
            color: ${dynamicUserPrefs.appearance === "dark" && "#9d00ff"};
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
            background: rgb(255 255 255 / 0.15);
            background: ${dynamicUserPrefs.appearance === "light" && "#fff"};
            color: ${dynamicUserPrefs.appearance === "light" && "#ff8400"};
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
            background: rgb(255 255 255 / 0.15);
            background: ${dynamicUserPrefs.appearance === "system" && "#fff"};
            color: ${dynamicUserPrefs.appearance === "system" && "#009961"};
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

export default DynamicSettings;
