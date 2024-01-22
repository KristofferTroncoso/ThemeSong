import { css } from "@emotion/react";

function VisualizerButton({ id, children, handleClick, isActive, name, ...props }) {
  return (
    <button
      css={css`
        border-radius: 24px;
        border: 4px solid ${isActive ? "#999" : "#2d2d2d"};
        width: 100%;
        min-height: 60px;
        height: 100%;
        background: #111;
        color: white;
        padding: 10px;
        :hover {
          background: ${isActive ? "#111" : "#222"};
        }
      `}
      disabled={isActive}
      {...props}
    >
      {children}
    </button>
  );
}

export default VisualizerButton;
