import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import StyledPanelDiv from "./StyledPanelDiv";
import useLocalization from "../../Extension/Localization/useLocalization";
import { IoMdClose } from "react-icons/io";

function WelcomePanel() {
  const setShowNewUserNote = useStore((state) => state.extension.setShowNewUserNote);
  const getMessage = useLocalization();
  const metadata = useStore((state) => state.media.metadata);
  // const locale = useStore((state) => state.extension.prefs.locale);
  // const browser = useStore((state) => state.extension.prefs.browser);

  return (
    <StyledPanelDiv
      css={css`
        background-color: #c90a0a;
        border: 1px solid red;
        color: #fff;
        font-size: 13px;
        font-family: "YouTube Sans", "Poppins";
      `}
    >
      <div
        css={css`
          padding: 2px;
          font-size: 13px;
          max-width: 280px;
        `}
      >
        <p>
          <span style={{ fontSize: 16 }}>🎶💿</span> {metadata.artist} !!<span style={{ fontSize: 16 }}>🤘😍</span>
        </p>
        <br></br>
        <p>{getMessage("welcomeQap")}</p>
      </div>
      <div>
        <button
          css={css`
            margin: 5px 0 2px;
            width: 60px;
            padding: 2px;
            background-color: orange;
            border: 1px solid darkred;
            border-radius: 3px;
            color: #000;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            align-content: center;

            :hover {
              background-color: orangered;
            }
          `}
          onClick={(e) => {
            setShowNewUserNote(false);
          }}
        >
          <IoMdClose size={18} />
        </button>
      </div>
    </StyledPanelDiv>
  );
}

export default WelcomePanel;
