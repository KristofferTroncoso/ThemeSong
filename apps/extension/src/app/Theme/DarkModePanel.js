import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CgDarkMode } from "react-icons/cg";

import PanelButton from "../QuickAccessPanel/components/PanelButton";

function DarkModePanel() {
  const themePrefs = useStore((state) => state.theme.themePrefs);
  const activeTheme = useStore((state) => state.theme.activeTheme);
  // const activeThemeInfo = useStore(state => state.theme.themes.find(theme => theme.id === activeTheme));
  const activeThemeUserPrefs = useStore((state) => state.theme.themePrefs.find((theme) => theme.id === activeTheme));
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);

  function handleDarkLightChange(value) {
    if (activeThemeUserPrefs.appearance !== value) {
      let newActiveThemeUserPrefs = {
        ...activeThemeUserPrefs,
        appearance: value,
      };
      let newThemePrefsArr = themePrefs.map((themePrefs) =>
        themePrefs.id === activeTheme ? newActiveThemeUserPrefs : themePrefs
      );
      changeThemePrefs(newThemePrefsArr);
      chrome.storage.local.set({ themePrefs: newThemePrefsArr }, () =>
        console.log("chrome.storage.local.set({themePrefs}")
      );
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
          Appearance
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
          Appearance
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
              margin: 0 2px;
              background: ${activeThemeUserPrefs.appearance === "dark" && "rgb(255 255 255 / 0.8)"};
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
              margin: 0 2px;
              background: ${activeThemeUserPrefs.appearance === "light" && "rgb(255 255 255 / 0.8)"};
              color: ${activeThemeUserPrefs.appearance === "light" && "#de9800"};
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
              margin: 0 2px;
              background: ${activeThemeUserPrefs.appearance === "system" && "rgb(255 255 255 / 0.8)"};
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
