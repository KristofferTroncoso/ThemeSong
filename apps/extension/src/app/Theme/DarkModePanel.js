import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CgDarkMode } from "react-icons/cg";

import PanelButton from "../QuickAccessPanel/components/PanelButton";
import useLocalization from "../Extension/Localization/useLocalization";

function DarkModePanel() {
  const activeTheme = useStore((state) => state.theme.prefs.activeTheme);
  const activeThemeUserPrefs = useStore((state) => state.theme.prefs[activeTheme]);
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);
  const getMessage = useLocalization();

  function handleDarkLightChange(value) {
    if (activeThemeUserPrefs.appearance !== value) {
      let newActiveThemeUserPrefs = {
        ...activeThemeUserPrefs,
        appearance: value,
      };
      setSingleThemePrefs(activeTheme, newActiveThemeUserPrefs);
    } else {
      // i cant just disable="true" the button in the element because the MUI Tooltip requires it to never be disabled
      // i used to have it with this which worked well: disabled={activeThemeUserPrefs.appearance ===  "dark"}
      console.log("Already active");
    }
  }

  if (
    !(
      activeTheme === "db8854e3-6753-4639-b244-c8091f3b9fcb" ||
      activeTheme === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8" ||
      activeTheme === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f"
    )
  ) {
    return (
      <div>
        <h3
          css={css`
            padding: 2px 5px;
            color: var(--ts-base-40-color, rgb(255 255 255 / 0.2));
          `}
        >
          {getMessage("appearance")}
        </h3>
        <div
          css={css`
            background-color: rgb(0 0 0 / 0.15);
            width: 190px;
            height: 34px;
            margin: 3px;
            border-radius: 7px;
          `}
        />
      </div>
    );
  } else {
    return (
      <div
        css={css`
          margin-bottom: 0;
        `}
      >
        <h3
          css={css`
            padding: 2px 5px;
          `}
        >
          {getMessage("appearance")}
        </h3>
        <div
          css={css`
            display: flex;
            justify-content: start;
            align-items: center;
          `}
        >
          <PanelButton
            title="Dark Mode"
            css={css`
              height: 38px;
              min-width: 45px;
              width: 60px;
              margin: 0 3px;
              background: ${activeThemeUserPrefs.appearance === "dark" && "var(--ts-base-100-color)"};
              color: ${activeThemeUserPrefs.appearance === "dark" && "#9d00ff"};
              border: 0;
              border-radius: 6px;
              :hover {
                color: #9d00ff;
              }
            `}
            onClick={(e) => handleDarkLightChange("dark")}
          >
            <DarkModeIcon fontSize="large" />
          </PanelButton>
          <PanelButton
            title="Light Mode"
            css={css`
              height: 38px;
              min-width: 45px;
              width: 60px;
              margin: 0 3px;
              background: ${activeThemeUserPrefs.appearance === "light" && "var(--ts-base-100-color)"};
              color: ${activeThemeUserPrefs.appearance === "light" && "#ff8400"};
              border: 0;
              border-radius: 6px;
              :hover {
                color: #fcad00;
              }
            `}
            onClick={(e) => handleDarkLightChange("light")}
          >
            <LightModeIcon
              css={css`
                font-size: 26px;
              `}
            />
          </PanelButton>
          <PanelButton
            title="Use Device Setting"
            css={css`
              height: 38px;
              min-width: 45px;
              width: 60px;
              margin: 0 3px;
              background: ${activeThemeUserPrefs.appearance === "system" && "var(--ts-base-100-color)"};
              color: ${activeThemeUserPrefs.appearance === "system" && "#009961"};
              border: 0;
              border-radius: 6px;
              :hover {
                color: #009961;
              }
            `}
            onClick={(e) => handleDarkLightChange("system")}
          >
            <CgDarkMode size={24} />
          </PanelButton>
        </div>
      </div>
    );
  }
}

export default DarkModePanel;
