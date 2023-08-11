import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import PanelButton from "../../QuickAccessPanel/components/PanelButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

function NotificationPanelButton() {
  const notificationEnabled = useStore((state) => state.utilities.notificationEnabled);
  const toggleNotifications = useStore((state) => state.utilities.toggleNotifications);

  return (
    <PanelButton
      onClick={toggleNotifications}
      title={notificationEnabled ? "Song Desktop Notifications (Enabled)" : "Song Desktop Notifications (Disabled)"}
      hoverColor="hotpink"
      bgColor={notificationEnabled && "hotpink"}
    >
      <NotificationsIcon
        css={css`
          font-size: 26px;
        `}
      />
    </PanelButton>
  );
}

export default NotificationPanelButton;
