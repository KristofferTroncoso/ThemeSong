import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import PanelButton from "../../QuickAccessPanel/components/PanelButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect } from "react";

function NotificationPanelButton() {
  const notificationsEnabled = useStore((state) => state.utilities.notificationsEnabled);
  const toggleNotifications = useStore((state) => state.utilities.toggleNotifications);

  useEffect(() => {
    chrome.storage.local.set({ notificationsEnabled: notificationsEnabled });
  }, [notificationsEnabled]);

  return (
    <PanelButton
      onClick={toggleNotifications}
      title={notificationsEnabled ? "Song Desktop Notifications (Enabled)" : "Song Desktop Notifications (Disabled)"}
      hoverColor="hotpink"
      bgColor={notificationsEnabled && "hotpink"}
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
