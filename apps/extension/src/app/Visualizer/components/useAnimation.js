import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";

function useAnimation(func, fps) {
  const playerUiState = useStore((state) => state.player.playerUiState);
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const intervalId = useRef();

  useEffect(() => {
    console.log("Setup animate");

    if (!isSongPlaying || playerUiState === "PLAYER_BAR_ONLY") {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(func), 1000 / (fps || 60));
    }

    return function cleanUp() {
      console.log("Animation: Cleaning up");
      clearInterval(intervalId.current);
    };
  }, [func, fps, isSongPlaying, playerUiState]);
}

export default useAnimation;
