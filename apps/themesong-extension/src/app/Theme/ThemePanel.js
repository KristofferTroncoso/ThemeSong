import { css } from "@emotion/react";

import InvertColorsOffIcon from "@mui/icons-material/InvertColorsOff";
import { GiAtom } from "react-icons/gi";
import ColorizeIcon from "@mui/icons-material/Colorize";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

import PanelButton from "../QuickAccessPanel/components/PanelButton";
import { useStore } from "/src/app/store";

function ThemePanel() {
  const activeTheme = useStore((state) => state.theme.activeTheme);
  const changeActiveTheme = useStore((state) => state.theme.changeActiveTheme);

  const handleClick = (value) => {
    if (activeTheme !== value) {
      changeActiveTheme(value);
      chrome.storage.local.set({ activeTheme: value }, () => console.log("chrome.storage.local.set({activeTheme}"));
    } else {
      console.log("Already active");
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
        `}
      >
        Theme
      </h3>
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
        `}
      >
        <PanelButton
          title="Off / YTM Default"
          bgColor={activeTheme === "416034f2-bfb8-46e8-9929-5805dd59a688" && "rgba(255,255,255,0.8)"}
          color={activeTheme === "416034f2-bfb8-46e8-9929-5805dd59a688" && "#000"}
          hoverColor="#000"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 6px;
          `}
          onClick={(e) => handleClick("416034f2-bfb8-46e8-9929-5805dd59a688")}
        >
          <InvertColorsOffIcon
            css={css`
              font-size: 20px;
            `}
          />
        </PanelButton>
        <PanelButton
          title="Dynamic"
          bgColor={activeTheme === "db8854e3-6753-4639-b244-c8091f3b9fcb" && "rgba(255,255,255,0.8)"}
          color={activeTheme === "db8854e3-6753-4639-b244-c8091f3b9fcb" && "#1565e6"}
          hoverColor="#1565e6"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 6px;
          `}
          onClick={(e) => handleClick("db8854e3-6753-4639-b244-c8091f3b9fcb")}
        >
          <GiAtom
            size={28}
            css={css`
              font-weight: 700;
            `}
          />
        </PanelButton>
        <PanelButton
          title="Static"
          bgColor={activeTheme === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8" && "rgba(255,255,255,0.8)"}
          color={activeTheme === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8" && "#ff3700"}
          hoverColor="#ff3700"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 6px;
          `}
          onClick={(e) => handleClick("b458eaae-0cbd-4a44-8847-c7a6a6ea1be8")}
        >
          <ColorizeIcon
            css={css`
              font-size: 24px;
            `}
          />
        </PanelButton>
        <PanelButton
          title="Ditto"
          bgColor={activeTheme === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f" && "rgba(255,255,255,0.8)"}
          color={activeTheme === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f" && "#9c5cad"}
          hoverColor="#9c5cad"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 6px;
            padding: 0;
          `}
          onClick={(e) => handleClick("76dd54c5-78a2-4ca3-9c16-3d0d1aab367f")}
        >
          <TheaterComedyIcon
            css={css`
              font-size: 28px;
            `}
          />
        </PanelButton>
      </div>
    </div>
  );
}

export default ThemePanel;
