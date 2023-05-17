import { css } from "@emotion/react";

function Circles({ analyser, dataArray, bufferLength }) {
  return (
    <div
      id="ThemeSong-Visualizer-Experimental-Container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: rgba(0, 0, 0, 0.5);
      `}
    ></div>
  );
}

export default Circles;
