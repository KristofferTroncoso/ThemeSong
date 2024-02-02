import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import StyledPanelDiv from "./StyledPanelDiv";
import useLocalization from "../../Extension/Localization/useLocalization";

function UpdatePanel() {
  const setShowUpdateNote = useStore((state) => state.extension.setShowUpdateNote);
  const getMessage = useLocalization();
  // const browser = useStore((state) => state.extension.prefs.browser);

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
          <b>v1.1.2</b>
          <span> (February 2024)</span>
        </p>
        <br></br>
        <p>
          <b>Dynamic & Static Themes</b>
          <br></br>
          <span> {getMessage("v112")}</span>
        </p>
        <br></br>
        <p>
          <span>🙋‍♂️{getMessage("hello")}</span>
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
