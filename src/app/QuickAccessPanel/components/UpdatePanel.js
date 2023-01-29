import { css } from "@emotion/react";

import { useStore } from "../../store";

import StyledPanelDiv from "./StyledPanelDiv";

function UpdatePanel() {
  const changeShowUpdateNote = useStore(
    (state) => state.extension.changeShowUpdateNote
  );

  return (
    <StyledPanelDiv
      css={css`
        background-color: #d95600;
      `}
    >
      <h2
        css={css`
          padding: 0 2px;
          color: var(--themesong-primary-text-color);
        `}
      >
        <u>ThemeSong Update / Notes</u>
      </h2>
      <div
        css={css`
          color: var(--themesong-primary-text-color);
          padding: 2px;
          font-size: 13px;
          max-width: 280px;
        `}
      >
        <p>
          <b>v0.4.7 Sleep Timer (Jan 29, 2023)</b>
        </p>
        <p>* Sleep Timer is here! Try it out right above this note ^</p>
        <p>
          * Ditto-AppleMusic Theme now has dark-mode that auto-adjusts with your
          system.
        </p>
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
          console.log("hi");
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
