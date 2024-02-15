import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import PanelButton from "../../QuickAccessPanel/components/PanelButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

function NotificationPanelButton() {
  const notificationsEnabled = useStore((state) => state.utilities.prefs.notificationsEnabled);
  const toggleNotifications = useStore((state) => state.utilities.toggleNotifications);

  return (
    <PanelButton
      onClick={toggleNotifications}
      title={notificationsEnabled ? "Song Desktop Notifications (Enabled)" : "Song Desktop Notifications (Disabled)"}
      hoverColor="hotpink"
      bgColor={notificationsEnabled && "hotpink"}
    >
      <NotificationsIcon
        css={css`
          font-size: 24px;
        `}
      />
    </PanelButton>
  );
}

export default NotificationPanelButton;
