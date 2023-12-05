import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import StyledPanelDiv from "./StyledPanelDiv";
import useLocalization from "../../Extension/Localization/useLocalization";

function UpdatePanel() {
  const setShowUpdateNote = useStore((state) => state.extension.setShowUpdateNote);
  const getMessage = useLocalization();

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
          <b>v1.0.5 (PATCH)</b>
          <span> (December 2023)</span>
        </p>
        <br></br>
        <p>
          <span>- Quick Fix: Visualizer not playing</span>
        </p>
        <p>
          <span>- i have to adapt to ytm code changes. Should work now. TY!</span>
        </p>
      </div>
      <button
        css={css`
          margin-top: 5px;
          width: 130px;
          height: 30px;
          padding: 4px;
          background-color: orange;
          border: 1px solid black;
          border-radius: 3px;
          color: #000;

          :hover {
            background-color: white;
          }
        `}
        onClick={(e) => {
          setShowUpdateNote(false);
        }}
      >
        OK
      </button>
    </StyledPanelDiv>
  );
}

export default UpdatePanel;
