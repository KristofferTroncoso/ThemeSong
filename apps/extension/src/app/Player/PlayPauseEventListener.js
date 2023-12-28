import { useEffect } from "react";
import { useStore } from "/src/app/store";

function PlayPauseEventListener() {
  const changeIsSongPlaying = useStore((state) => state.player.changeIsSongPlaying);

  useEffect(() => {
    let videoElement = document.querySelector("video");

    let changePlayingToTrue = () => {
      changeIsSongPlaying(true);
    };

    let changePlayingToFalse = () => {
      changeIsSongPlaying(false);
    };

    if (videoElement) {
      videoElement.addEventListener("play", changePlayingToTrue);
      videoElement.addEventListener("pause", changePlayingToFalse);
    } else {
      setTimeout(() => {
        console.log("attached");
        document.querySelector("video").addEventListener("play", changePlayingToTrue);
        document.querySelector("video").addEventListener("pause", changePlayingToFalse);
      }, 2000);
    }

    return () => {
      document.querySelector("video").removeEventListener("play", changePlayingToTrue);
      document.querySelector("video").removeEventListener("pause", changePlayingToFalse);
    };
  }, [changeIsSongPlaying]);

  return null;
}

export default PlayPauseEventListener;
