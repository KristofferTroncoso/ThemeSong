import { css } from "@emotion/react";

import { useStore } from "/src/app/store";

import StyledPanelDiv from "./StyledPanelDiv";

function UpdatePanel() {
  const changeShowUpdateNote = useStore((state) => state.extension.changeShowUpdateNote);

  return (
    <StyledPanelDiv
      css={css`
        background-color: #ff771e;
        border: 1px solid orange;
      `}
    >
      <h2
        css={css`
          padding: 0 2px;
          color: #000000;
        `}
      >
        <u>ThemeSong Update / Notes</u>
      </h2>
      <div
        css={css`
          color: #000000;
          padding: 2px;
          font-size: 13px;
          max-width: 280px;
        `}
      >
        <p>
          <b>v0.5.7</b>
          <span> (August 8, 2023)</span>
        </p>
        <p>- fix "End of Track" sleep feature</p>
        <p>- better styling</p>
      </div>
      <button
        css={css`
          margin-top: 5px;
          width: 100px;
          padding: 4px;
          background-color: orange;
          border: 1px solid black;
          border-radius: 3px;

          :hover {
            background-color: white;
          }
        `}
        onClick={(e) => {
          changeShowUpdateNote(false);
          chrome.storage.local.set({ showUpdateNote: false }, () =>
            console.log("chrome.storage.local.set({showUpdateNote}")
          );
        }}
      >
        ok
      </button>
    </StyledPanelDiv>
  );
}

export default UpdatePanel;
