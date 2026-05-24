import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";

function useAnimation(func) {
  const playerUiState = useStore((state) => state.player.playerUiState);
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const animationFrameId = useRef();
  const savedFunc = useRef(func);

  useEffect(() => {
    savedFunc.current = func;
  }, [func]);

  useEffect(() => {
    const shouldAnimate = isSongPlaying && playerUiState !== "PLAYER_BAR_ONLY";

    if (!shouldAnimate) {
      cancelAnimationFrame(animationFrameId.current);
      return;
    }

    const loop = () => {
      savedFunc.current();
      animationFrameId.current = requestAnimationFrame(loop);
    };

    animationFrameId.current = requestAnimationFrame(loop);

    return () => {
      console.log("Animation: Cleaning up");
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [isSongPlaying, playerUiState]);
}

export default useAnimation;
