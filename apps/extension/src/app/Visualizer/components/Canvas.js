import { useEffect, useState, forwardRef } from "react";
import { css } from "@emotion/react";

const Canvas = forwardRef(function Canvas(props, ref) {
  const [clientHeight, setClientHeight] = useState(800);
  const [clientWidth, setClientWidth] = useState(800);

  useEffect(() => {
    const parentElement = document.getElementById("ThemeSong-Visualizer-Canvas").parentElement;
    const resizeObserver = new ResizeObserver(() => {
      setClientHeight(parentElement.clientHeight);
      setClientWidth(parentElement.clientWidth);
    });

    resizeObserver.observe(parentElement);

    return function () {
      resizeObserver.unobserve(parentElement);
    };
  }, []);

  return (
    <canvas
      id="ThemeSong-Visualizer-Canvas"
      height={clientHeight}
      width={clientWidth}
      css={css`
        height: 100%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      `}
      ref={ref}
      {...props}
    />
  );
});

export default Canvas;
