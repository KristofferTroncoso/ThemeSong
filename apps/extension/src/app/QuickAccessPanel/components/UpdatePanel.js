import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import StyledPanelDiv from "./StyledPanelDiv";
// import useLocalization from "../../Extension/Localization/useLocalization";

function UpdatePanel() {
  const setShowUpdateNote = useStore((state) => state.extension.setShowUpdateNote);
  // const getMessage = useLocalization();

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
          <b>v1.0.7</b>
          <span> (December 2023)</span>
        </p>
        <br></br>
        <h4>Changes:</h4>
        <p>
          - <b>(Popup) New Piece</b>: High res song image option
        </p>
        <p>
          - <b>(Popup) Now Playing page</b>: Will add more functionality later
        </p>
        <p>
          - <b>(Panel) Song search</b>: Now uses your default search engine
        </p>
        <p>- Styling improvements</p>
        <br></br>
        <p style={{ color: "#410645" }}>
          I've read all your reviews on the store <span style={{ fontSize: "16px" }}>😂❤️</span> . Thanks!{" "}
          <span style={{ fontSize: "16px" }}>🙏🎧</span> -- dev
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
