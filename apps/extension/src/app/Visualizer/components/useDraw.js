import { useEffect } from "react";

function useDraw(func) {
  useEffect(() => {
    const canvasEl = document.getElementById("ThemeSong-Visualizer-Canvas");

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(() => {
        func();
      }, 1);
    });

    resizeObserver.observe(canvasEl);

    return function () {
      resizeObserver.unobserve(canvasEl);
    };
  }, [func]);
}

export default useDraw;
