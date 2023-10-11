import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import PanelButton from "../../QuickAccessPanel/components/PanelButton";
import { MdAccessAlarm } from "react-icons/md";

function SleepTimerPanelButton() {
  const isActive = useStore((state) => state.utilities.sleepTimer.isActive);
  const setTimerIsDialogOpen = useStore((state) => state.utilities.setTimerIsDialogOpen);

  return (
    <PanelButton
      onClick={(e) => setTimerIsDialogOpen(true)}
      title="Sleep Timer"
      hoverColor="#ac13cf"
      bgColor={isActive && "#ac13cf"}
    >
      <MdAccessAlarm
        css={css`
          font-size: 26px;
        `}
      />
    </PanelButton>
  );
}

export default SleepTimerPanelButton;
