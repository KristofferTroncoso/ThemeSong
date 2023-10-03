import { css } from "@emotion/react";
import StaticDarkSettings from "./Dark/StaticDarkSettings";
import StaticLightSettings from "./Light/StaticLightSettings";
import { useStore } from "/src/app/store";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CgDarkMode } from "react-icons/cg";
import PanelButton from "../../../QuickAccessPanel/components/PanelButton";

export function StaticSettings() {
  const staticUserPrefs = useStore((state) => state.theme.prefs["b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"]);
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);

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
      <p
        css={css`
          margin: 5px 0 10px;
        `}
      >
        Pick a color, any color. 🖍️
      </p>
      <form
        name="appearance"
        css={css`
          display: flex;
          justify-content: right;
          align-items: center;
        `}
        onSubmit={(e) => e.preventDefault()}
      >
        <PanelButton
          title="Dark Mode"
          name="appearance"
          css={css`
            height: 25px;
            width: 35px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.2);
            background: ${staticUserPrefs.appearance === "dark" && "rgb(255 255 255 / 0.8)"};
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
          title="Light Mode"
          name="appearance"
          css={css`
            height: 25px;
            width: 35px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.2);
            background: ${staticUserPrefs.appearance === "light" && "rgb(255 255 255 / 0.8)"};
            color: ${staticUserPrefs.appearance === "light" && "#de9800"};
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
          title="Use Device Setting"
          name="appearance"
          css={css`
            height: 25px;
            width: 35px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.2);
            background: ${staticUserPrefs.appearance === "system" && "rgb(255 255 255 / 0.8)"};
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
