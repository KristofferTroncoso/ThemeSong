import { css } from "@emotion/react";

import { useStore } from "/src/app/store";

import StyledPanelDiv from "./StyledPanelDiv";
import PanelButton from "./PanelButton";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

function DevToolsPanel() {
  const store = useStore();

  return (
    <StyledPanelDiv>
      <h3
        css={css`
          padding: 2px 5px;
          color: var(--ts-secondary-text-color);
        `}
      >
        DevTools
      </h3>
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
        `}
      >
        <PanelButton
          onClick={(e) => console.log(store)}
          title="Log Zustand Local Store"
          hoverColor="tomato"
          css={css`
            height: 32px;
            width: 32px;
            font-size: 20px;
            border-radius: 0;
          `}
        >
          <DataObjectIcon
            css={css`
              font-size: 20px;
            `}
          />
        </PanelButton>
        <PanelButton
          onClick={(e) => chrome.storage.local.get(null, (res) => console.log(res))}
          title="Log Chrome Local Storage"
          hoverColor="dodgerblue"
          css={css`
            height: 32px;
            width: 32px;
            font-size: 20px;
            border-radius: 0;
          `}
        >
          <CloudQueueIcon
            css={css`
              font-size: 20px;
            `}
          />
        </PanelButton>
      </div>
    </StyledPanelDiv>
  );
}

export default DevToolsPanel;
