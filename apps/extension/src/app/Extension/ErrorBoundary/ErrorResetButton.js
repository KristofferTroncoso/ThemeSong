import { css } from "@emotion/react";

function ErrorResetButton({ ...props }) {
  return (
    <button
      onClick={(e) => {
        chrome.runtime.sendMessage("reset", (response) => {
          console.log(`Received response ${response}`);
        });
        window.location.reload();
      }}
      css={css`
        margin: 20px;
        padding: 10px;
        font-size: 16px;
        color: #fff;
        background-color: tomato;
        border: 2px solid #fff;
        border-radius: 5px;

        :hover {
          background-color: red;
        }
      `}
      {...props}
    >
      Error: Reset ThemeSong Defaults
    </button>
  );
}

export default ErrorResetButton;
