import { useEffect } from "react";
import { useStore } from "/src/app/store";

function Notification() {
  const metadata = useStore((state) => state.media.metadata);

  useEffect(() => {
    try {
      if (metadata) {
        chrome.runtime.sendMessage({
          notify: {
            songName: metadata.title,
            songSubtitle: metadata.artist,
            songArtist: metadata.artist,
            songImg: metadata.artwork[0].src,
          },
        });
      }
    } catch {
      console.log("Notification: context invalidated");
    }
  }, [metadata]);

  return null;
}

export default Notification;
