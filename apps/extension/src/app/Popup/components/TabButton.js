import { css } from "@emotion/react";

function TabButton({ isActive, children, ...props }) {
  return (
    <button
      css={css`
        border-radius: 5px;
        border: 0;
        width: 46px;
        height: 54px;
        background: ${isActive ? "#333" : "none"};
        color: ${isActive ? "#fff" : "#ccc"};
        padding: 8px 4px;
        margin: 4px 2px 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        :hover {
          background: #333;
        }
      `}
      disabled={isActive}
      {...props}
    >
      {children}
    </button>
  );
}

export default TabButton;
