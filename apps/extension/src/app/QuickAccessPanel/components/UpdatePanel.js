import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import StyledPanelDiv from "./StyledPanelDiv";
import useLocalization from "../../Extension/Localization/useLocalization";

function UpdatePanel() {
  const setShowUpdateNote = useStore((state) => state.extension.setShowUpdateNote);
  const getMessage = useLocalization();
  // const browser = useStore((state) => state.extension.prefs.browser);
  const metadata = useStore((state) => state.media.metadata);

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
        <u>{getMessage("themesongUpdateNotes")}</u>
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
          <b>v1.1.7</b>
          <span> (March 2024)</span>
        </p>
        <br></br>
        <p>- New Piece: Center Song Controls.</p>
        <p>- Add "next" button to notifications.</p>
        <p>- Minor styling fixes.</p>
        <p>- Tip: Check out the popup icon on browser toolbar for more UI customization options.</p>
        <br></br>
        <p>
          <b>{getMessage("thanksForTheComments")}</b>
        </p>
        <p>
          <span style={{ fontSize: 12 }}>🎶💿</span> {metadata.artist} !!<span style={{ fontSize: 12 }}>🤘😍</span>
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
