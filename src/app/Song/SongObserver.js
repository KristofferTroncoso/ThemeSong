import { useEffect } from "react";
import { useStore } from "../store";

function SongObserver() {
  const changeSong = useStore((state) => state.song.changeSong);
  useEffect(() => {
    let songObserver;

    changeSong();

    let songTitleNode = document.querySelector("ytmusic-player-bar .title");

    songObserver = new MutationObserver(handleSongChange);

    songObserver.observe(songTitleNode, {
      attributeFilter: ["title"],
      attributeOldValue: true,
    });

    function handleSongChange(mutationRecord) {
      changeSong();
    }

    return function () {
      songObserver.disconnect();
    };
  }, []);

  return <div id="SongObserver"></div>;
}

export default SongObserver;
