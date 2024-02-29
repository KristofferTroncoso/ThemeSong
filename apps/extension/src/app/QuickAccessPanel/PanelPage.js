import { css } from "@emotion/react";

import WelcomePanel from "./components/WelcomePanel";
import SongPanel from "../Song/SongPanel/SongPanel";
import VisualizerPanel from "../Visualizer/VisualizerPanel";
import AppearancePanel from "../Theme/AppearancePanel";
import UtilitiesPanel from "../Utilities/UtilitiesPanel";
import UpdatePanel from "./components/UpdatePanel";
import DevToolsPanel from "./components/DevToolsPanel";
import useLocalization from "../Extension/Localization/useLocalization";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import TuneIcon from "@mui/icons-material/Tune";

import { useStore } from "/src/app/store";

function PanelPage() {
  const showNewUserNote = useStore((state) => state.extension.prefs.showNewUserNote);
  const showUpdateNote = useStore((state) => state.extension.prefs.showUpdateNote);
  const getMessage = useLocalization();

  return (
    <div
      css={css`
        padding: 6px;
        background: var(--ts-playerbar-color, #222);
        border: 1px solid var(--ts-base-100-alpha-02-color, rgb(255 255 255 / 0.2));
        border-radius: 8px;
        backdrop-filter: blur(16px);
        transition: var(--ts-bgcolor-transition);
        color: var(--ts-secondary-text-color, #fff);
        box-shadow: 0 0 20px rgb(0 0 0 / 15%);
      `}
      id="PanelPage"
    >
      <div
        css={css`
          text-align: right;
        `}
      >
        <Tooltip
          title={
            <p
              css={css`
                font-size: 12px;
              `}
            >
              ThemeSong Quick Access Panel
            </p>
          }
        >
          <HelpIcon style={{ fontSize: "14px" }} />
        </Tooltip>
      </div>
      <div>
        {showNewUserNote && <WelcomePanel />}
        <SongPanel />
        <AppearancePanel />
        <VisualizerPanel />
        <UtilitiesPanel />
        {process.env.NODE_ENV === "development" && <DevToolsPanel />}
        {showUpdateNote && <UpdatePanel />}
      </div>
      <div
        css={css`
          text-align: right;
        `}
      >
        <Tooltip
          title={
            <p
              css={css`
                font-size: 12px;
              `}
            >
              {getMessage("additionalSettings")}
            </p>
          }
        >
          <TuneIcon style={{ fontSize: "13px" }} />
        </Tooltip>
      </div>
    </div>
  );
}

export default PanelPage;
