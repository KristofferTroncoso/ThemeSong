import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";

function PlayPauseChangeObserver() {
  const changeIsSongPlaying = useStore((state) => state.player.changeIsSongPlaying);
  const playPauseChangeObserver = useRef();

  useEffect(() => {
    let moviePlayerNode = document.getElementById("movie_player");

    //initial
    if (!document.getElementById("movie_player").classList.contains("playing-mode")) {
      console.log("INITIAL song PAUSED");
      changeIsSongPlaying(false);
    } else {
      console.log("INITIAL song PLAYING");
      changeIsSongPlaying(true);
    }

    playPauseChangeObserver.current = new MutationObserver(handlePlayPauseChange);

    playPauseChangeObserver.current.observe(moviePlayerNode, {
      attributeFilter: ["class"],
    });

    function handlePlayPauseChange(mutationRecord) {
      console.log("handlePlayPauseChangeObserver");
      let domtokenlist = mutationRecord[0].target.classList;
      if (!domtokenlist.contains("playing-mode")) {
        console.log("song PAUSED");
        changeIsSongPlaying(false);
      } else {
        console.log("song PLAYING");
        changeIsSongPlaying(true);
      }
    }

    return function () {
      console.log("removing playPauseChangeObserver");
      playPauseChangeObserver.current.disconnect();
    };
  }, []);

  return <div id="PlayPauseChangeObserver"></div>;
}

export default PlayPauseChangeObserver;
