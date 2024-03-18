import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CgDarkMode } from "react-icons/cg";
import PanelButton from "../../../QuickAccessPanel/components/PanelButton";
import useLocalization from "../../../Extension/Localization/useLocalization";

function AppleMusicSettings() {
  const appleMusicPrefs = useStore((state) => state.theme.prefs["76dd54c5-78a2-4ca3-9c16-3d0d1aab367f"]);
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);
  const getMessage = useLocalization();

  function handleDarkLightChange(value) {
    if (appleMusicPrefs.appearance !== value) {
      setSingleThemePrefs("76dd54c5-78a2-4ca3-9c16-3d0d1aab367f", { appearance: value });
    }
  }

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <PanelButton
          title={getMessage("darkMode")}
          css={css`
            height: 38px;
            min-width: 45px;
            width: 60px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.1);
            background: ${appleMusicPrefs.appearance === "dark" && "#fff"};
            color: ${appleMusicPrefs.appearance === "dark" && "#9d00ff"};
            border: 0;
            border-radius: 6px;
            :hover {
              color: #9d00ff;
            }
          `}
          value="dark"
          onClick={(e) => handleDarkLightChange("dark")}
        >
          <DarkModeIcon fontSize="medium" />
        </PanelButton>
        <PanelButton
          title={getMessage("lightMode")}
          css={css`
            height: 38px;
            min-width: 45px;
            width: 60px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.1);
            background: ${appleMusicPrefs.appearance === "light" && "#fff"};
            color: ${appleMusicPrefs.appearance === "light" && "#ff8400"};
            border: 0;
            border-radius: 6px;
            :hover {
              color: #fcad00;
            }
          `}
          value="light"
          onClick={(e) => handleDarkLightChange("light")}
        >
          <LightModeIcon
            css={css`
              font-size: 26px;
            `}
          />
        </PanelButton>
        <PanelButton
          title={getMessage("useDeviceSetting")}
          css={css`
            height: 38px;
            min-width: 45px;
            width: 60px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.1);
            background: ${appleMusicPrefs.appearance === "system" && "#fff"};
            color: ${appleMusicPrefs.appearance === "system" && "#009961"};
            border: 0;
            border-radius: 6px;
            :hover {
              color: #009961;
            }
          `}
          value="system"
          onClick={(e) => handleDarkLightChange("system")}
        >
          <CgDarkMode size={24} />
        </PanelButton>
      </div>
    </div>
  );
}

export default AppleMusicSettings;
