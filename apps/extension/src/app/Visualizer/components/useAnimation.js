import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";

export default function useAnimation(func, fps) {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);
  const intervalId = useRef();

  useEffect(() => {
    console.log("Setup animate");

    if (!isSongPlaying) {
      clearInterval(intervalId.current);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => requestAnimationFrame(func), 1000 / (fps || 60));
    }

    return function cleanUp() {
      console.log("Animation: Cleaning up");
      clearInterval(intervalId.current);
    };
  }, [func, fps, isSongPlaying]);
}
