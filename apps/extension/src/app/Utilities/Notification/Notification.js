import { useEffect } from "react";
import { useStore } from "/src/app/store";

function Notification() {
  const song = useStore((state) => state.song);

  useEffect(() => {
    try {
      if (song.songName !== "") {
        chrome.runtime.sendMessage({ notify: song });
      }
    } catch {
      console.log("Notification: context invalidated");
    }
  }, [song]);

  return null;
}

export default Notification;
