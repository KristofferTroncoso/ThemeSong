import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import useLocalization from "../../Extension/Localization/useLocalization";
import PanelButton from "../../QuickAccessPanel/components/PanelButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

function NotificationPanelButton() {
  const notificationsEnabled = useStore((state) => state.utilities.prefs.notificationsEnabled);
  const toggleNotifications = useStore((state) => state.utilities.toggleNotifications);
  const getMessage = useLocalization();

  return (
    <PanelButton
      onClick={toggleNotifications}
      title={getMessage("songDesktopNotifications")}
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
