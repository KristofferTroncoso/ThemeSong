import { css } from "@emotion/react";

import SleepTimerPanelButton from "./SleepTimer/SleepTimerPanelButton";
import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import NotificationPanelButton from "./Notification/NotificationPanelButton";

function UtilitiesPanel() {
  return (
    <StyledPanelDiv>
      <h3
        css={css`
          padding: 2px 5px;
          color: var(--ts-secondary-text-color);
        `}
      >
        Utilities
      </h3>
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
        `}
      >
        <SleepTimerPanelButton />
        <NotificationPanelButton />
      </div>
    </StyledPanelDiv>
  );
}

export default UtilitiesPanel;
