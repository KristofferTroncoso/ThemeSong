import { css } from "@emotion/react";

function VariantButton({ id, children, handleClick, isActive, name, ...props }) {
  return (
    <button
      css={css`
        font-size: 11px;
        border-radius: 18px;
        border: 2px solid ${isActive ? "#fff" : "#454545"};
        width: 100%;
        min-height: 28px;
        background: ${isActive ? "#fff" : "#202020"};
        color: ${isActive ? "#000" : "#fff"};
        padding: 2px;
        :hover {
          background: ${isActive ? "#fff" : "#333"};
        }
      `}
      disabled={isActive}
      {...props}
    >
      {name}
    </button>
  );
}

export default VariantButton;
