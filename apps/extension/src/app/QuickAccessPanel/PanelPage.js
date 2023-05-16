import { css } from "@emotion/react";

import SongPanel from "./components/SongPanel";
import VisualizerPanel from "../Visualizer/VisualizerPanel";
import AppearancePanel from "../Theme/AppearancePanel";
import UtilitiesPanel from "../Utilities/UtilitiesPanel";
import UpdatePanel from "./components/UpdatePanel";
import DevToolsPanel from "./components/DevToolsPanel";

import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import TuneIcon from "@mui/icons-material/Tune";

import { useStore } from "/src/app/store";

function PanelPage() {
  const showUpdateNote = useStore((state) => state.extension.showUpdateNote);

  return (
    <div
      css={css`
        padding: 6px;
        margin: 2px;
        background: var(--ts-playerbar-color, #222);
        border: 1px solid var(--ts-base-100-alpha-02-color, rgba(255, 255, 255, 0.2));
        border-radius: 4px;
        backdrop-filter: blur(16px);
        transition: var(--ts-bgcolor-transition);
        color: var(--ts-secondary-text-color, #fff);
      `}
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
              Additional settings and options available through the ThemeSong popup icon on your toolbar.
            </p>
          }
        >
          <TuneIcon style={{ fontSize: "16px" }} />
        </Tooltip>
      </div>
    </div>
  );
}

export default PanelPage;
