import { css } from "@emotion/react";

function TabButton({ isActive, children, ...props }) {
  return (
    <button
      css={css`
        border-radius: 5px;
        border: ${isActive ? "0; " : "2px solid #333;"};
        width: 110px;
        height: 30px;
        background: ${isActive ? "#fff" : "rgb(40,40,40)"};
        color: ${isActive ? "#000" : "#ccc"};
        padding: 2px;
        margin: 5px 5px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
          background: #fff;
          color: #000;
          border: #fff;
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
