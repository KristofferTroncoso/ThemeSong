import { css } from "@emotion/react";

function StyledPanelDiv({ children, ...props }) {
  return (
    <div
      css={css`
        border: 1px solid var(--ts-base-100-alpha-01-color);
        border-radius: 8px;
        background-color: var(--ts-base-00-alpha-005-color);
        padding: 6px 5px;
        margin-bottom: 6px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default StyledPanelDiv;
