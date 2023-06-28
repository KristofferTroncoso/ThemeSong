import { css } from "@emotion/react";

import { useStore } from "/src/app/store";

import StyledPanelDiv from "./StyledPanelDiv";

function UpdatePanel() {
  const changeShowUpdateNote = useStore((state) => state.extension.changeShowUpdateNote);

  return (
    <StyledPanelDiv
      css={css`
        background-color: #d95600;
      `}
    >
      <h2
        css={css`
          padding: 0 2px;
          color: var(--ts-primary-text-color);
        `}
      >
        <u>ThemeSong Update / Notes</u>
      </h2>
      <div
        css={css`
          color: var(--ts-primary-text-color);
          padding: 2px;
          font-size: 13px;
          max-width: 280px;
        `}
      >
        <p>
          <b>v0.5.3</b>
        </p>
        <br></br>
        <p>
          <b>New Visualizers!</b>
        </p>
        <p>* Spider-Verse, Experimental, Snowfall, Retro Bars, and Disco Ball.</p>
        <br></br>
        <p>
          <b>Theme styling fixed for new sidebar layout</b>
        </p>
        <p>* For those with the new sidebar layout, all themes should look better now.</p>
        <br></br>
        <p>
          <b>Reminder:</b> There are additional options available through the ThemeSong popup icon on your toolbar.
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
