import { css } from "@emotion/react";

function StyledPanelDiv({ children, ...props }) {
  return (
    <div
      css={css`
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.15);
        padding: 6px 5px 3px;
        margin-bottom: 6px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default StyledPanelDiv;