import { css } from "@emotion/react";

import SleepTimerPanelButton from "./SleepTimer/SleepTimerPanelButton";
import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import NotificationPanelButton from "./Notification/NotificationPanelButton";
import SidePlayerButton from "./SidePlayerButton/SidePlayerButton";
import useLocalization from "../Extension/Localization/useLocalization";
import { TbTools } from "react-icons/tb";
import { useStore } from "/src/app/store";

function UtilitiesPanel() {
  const getMessage = useLocalization();
  const browser = useStore((state) => state.extension.prefs.browser);

  return (
    <StyledPanelDiv>
      <h3
        css={css`
          padding: 2px 5px;
          color: var(--ts-secondary-text-color);
          display: flex;
          align-items: center;
        `}
      >
        <TbTools style={{ fontSize: "15px", marginRight: "5px" }} />
        <span>{getMessage("utilities")}</span>
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
        {browser === "chrome" && <SidePlayerButton />}
      </div>
    </StyledPanelDiv>
  );
}

export default UtilitiesPanel;
