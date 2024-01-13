import { useEffect } from "react";
import { useStore } from "/src/app/store";

function Notification() {
  const metadata = useStore((state) => state.media.metadata);
  const title = useStore((state) => state.media.metadata.title);

  useEffect(() => {
    try {
      if (metadata) {
        chrome.runtime.sendMessage({
          notify: {
            songName: title,
            songSubtitle: metadata.artist,
            songArtist: metadata.artist,
            songImg: metadata.artwork[0].src,
          },
        });
      }
    } catch {
      console.log("Notification: context invalidated");
    }
  }, [title]);

  return null;
}

export default Notification;
