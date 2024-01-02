import { useEffect } from "react";
import { useStore } from "/src/app/store";

function MediaObserver() {
  const changeMedia = useStore((state) => state.media.changeMedia);

  useEffect(() => {
    let mediaObserver;
    if (navigator.mediaSession.metadata) {
      changeMedia();
    }

    let songTitleNode = document.querySelector("ytmusic-player-bar .title");

    mediaObserver = new MutationObserver(handleSongChange);

    mediaObserver.observe(songTitleNode, {
      attributeFilter: ["title"],
      attributeOldValue: true,
    });

    function handleSongChange() {
      if (navigator.mediaSession.metadata) {
        setTimeout(() => {
          changeMedia();
        }, 1);
        setTimeout(() => {
          changeMedia();
        }, 1000);
        setTimeout(() => {
          changeMedia();
        }, 2000);
      }
    }

    return function () {
      mediaObserver.disconnect();
    };
  }, []);

  return null;
}

export default MediaObserver;
