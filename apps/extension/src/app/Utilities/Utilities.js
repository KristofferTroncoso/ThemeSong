import SleepTimer from "./SleepTimer/SleepTimer";
import Notification from "./Notification/Notification";
import { useStore } from "/src/app/store";

function Utilities() {
  const notificationsEnabled = useStore((state) => state.utilities.prefs.notificationsEnabled);

  return (
    <div id="ThemeSong-Utilities">
      <SleepTimer />
      {notificationsEnabled && <Notification />}
    </div>
  );
}

export default Utilities;
