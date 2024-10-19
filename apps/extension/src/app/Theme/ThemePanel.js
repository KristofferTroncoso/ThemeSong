import { css } from "@emotion/react";

import { IoColorPalette } from "react-icons/io5";
import { GiAtom } from "react-icons/gi";
import ColorizeIcon from "@mui/icons-material/Colorize";
import AppleIcon from "@mui/icons-material/Apple";
import { SiYoutubemusic } from "react-icons/si";

import PanelButton from "../QuickAccessPanel/components/PanelButton";
import { useStore } from "/src/app/store";
import useLocalization from "../Extension/Localization/useLocalization";

function ThemePanel() {
  const activeTheme = useStore((state) => state.theme.prefs.activeTheme);
  const setActiveTheme = useStore((state) => state.theme.setActiveTheme);
  const getMessage = useLocalization();

  const handleClick = (value) => {
    if (activeTheme !== value) {
      setActiveTheme(value);
    } else {
      setActiveTheme("416034f2-bfb8-46e8-9929-5805dd59a688");
    }
  };

  return (
    <div
      css={css`
        margin-bottom: 2px;
      `}
    >
      <h3
        css={css`
          padding: 2px 5px;
          display: flex;
          align-items: center;
          margin-bottom: 2px;
        `}
      >
        <IoColorPalette style={{ fontSize: "15px", marginRight: "5px" }} />
        <span>{getMessage("themes")}</span>
      </h3>
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
        `}
      >
        <PanelButton
          title={getMessage("Dynamic")}
          bgColor={activeTheme === "db8854e3-6753-4639-b244-c8091f3b9fcb" && "var(--ts-base-100-color)"}
          color={activeTheme === "db8854e3-6753-4639-b244-c8091f3b9fcb" && "#008DFF"}
          hoverColor="#008DFF"
          css={css`
            height: 38px;
            min-width: 45px;
            width: 70px;
            margin: 0 4px;
            border: 0;
            border-radius: 6px;
          `}
          onClick={(e) => handleClick("db8854e3-6753-4639-b244-c8091f3b9fcb")}
        >
          <GiAtom
            size={26}
            css={css`
              font-weight: 700;
            `}
          />
        </PanelButton>
        <PanelButton
          title={getMessage("Static")}
          bgColor={activeTheme === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8" && "var(--ts-base-100-color)"}
          color={activeTheme === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8" && "#ff3700"}
          hoverColor="#ff3700"
          css={css`
            height: 38px;
            min-width: 45px;
            width: 70px;
            margin: 0 4px;
            border: 0;
            border-radius: 6px;
          `}
          onClick={(e) => handleClick("b458eaae-0cbd-4a44-8847-c7a6a6ea1be8")}
        >
          <ColorizeIcon
            css={css`
              font-size: 23px;
            `}
          />
        </PanelButton>
        <PanelButton
          title="Apple Music"
          bgColor={activeTheme === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f" && "var(--ts-base-100-color)"}
          color={activeTheme === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f" && "#ff0055"}
          hoverColor="#ff0055"
          css={css`
            height: 38px;
            min-width: 45px;
            width: 70px;
            margin: 0 4px;
            border: 0;
            border-radius: 6px;
            padding: 0;
          `}
          onClick={(e) => handleClick("76dd54c5-78a2-4ca3-9c16-3d0d1aab367f")}
        >
          <AppleIcon
            css={css`
              font-size: 23px;
            `}
          />
        </PanelButton>
        <PanelButton
          title="YouTube Music Mobile"
          hoverColor="#f03"
          bgColor={activeTheme === "55f83bbd-d794-49a8-8912-2b53af3f1d3f" && "var(--ts-base-100-color)"}
          color={activeTheme === "55f83bbd-d794-49a8-8912-2b53af3f1d3f" && "#f03"}
          css={css`
            height: 38px;
            min-width: 45px;
            width: 70px;
            margin: 0 4px;
            border: 0;
            border-radius: 6px;
            padding: 3px;
          `}
          onClick={(e) => handleClick("55f83bbd-d794-49a8-8912-2b53af3f1d3f")}
        >
          <SiYoutubemusic
            css={css`
              font-size: 18px;
            `}
          />
        </PanelButton>
      </div>
    </div>
  );
}

export default ThemePanel;
