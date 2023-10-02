import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";

function PlayPauseChangeObserver() {
  const changeIsSongPlaying = useStore((state) => state.player.changeIsSongPlaying);
  const playPauseChangeObserver = useRef();

  useEffect(() => {
    setTimeout(() => {
      let moviePlayerNode = document.getElementById("movie_player");

      playPauseChangeObserver.current = new MutationObserver(handlePlayPauseChange);

      playPauseChangeObserver.current.observe(moviePlayerNode, {
        attributeFilter: ["class"],
      });

      //initial
      if (!document.getElementById("movie_player").classList.contains("playing-mode")) {
        console.log("INITIAL song PAUSED");
        changeIsSongPlaying(false);
      } else {
        console.log("INITIAL song PLAYING");
        changeIsSongPlaying(true);
      }

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
    }, 500);

    return function () {
      console.log("removing playPauseChangeObserver");
      playPauseChangeObserver.current.disconnect();
    };
  }, []);

  return null;
}

export default PlayPauseChangeObserver;
