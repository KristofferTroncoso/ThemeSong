import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import StyledPanelDiv from "./StyledPanelDiv";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import LaunchIcon from "@mui/icons-material/Launch";
import { FaGithubAlt } from "react-icons/fa";

function UpdatePanel() {
  const setShowUpdateNote = useStore((state) => state.extension.setShowUpdateNote);

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
          <b>v1.0.0</b>
          <span> (September 1, 2023)</span>
          <span> 🎉</span>
        </p>
        <p>
          (Some settings may have been <b>SOFT-RESET</b>)
        </p>
        <br></br>
        <FaGithubAlt style={{ fontSize: "18px" }} />
        <p>
          It's finally here! OPEN-SOURCE. You're invited to contribute on{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/KristofferTroncoso/ThemeSong">
            GitHub
          </a>
          !
        </p>
        <br></br>
        <h4>Changes:</h4>
        <p>
          - <b>Notifications</b>: Toggle desktop notifications for song changes (Panel).
        </p>
        <p>
          - <b>Pieces</b>: Toggle on small UI options such as hiding the Cast icon (Popup).
        </p>
        <p>
          - <b>styling and performance improvements</b>
        </p>
        <br></br>
        <p>
          <b>
            <i>Thanks to the first 2000 users! I've seen all the stars and reviews! You guys are awesome!</i>
          </b>
        </p>
        <p>
          <i>-- Kris / Graphite Eater</i>
          <span style={{ fontSize: "16px" }}> 😃</span>
        </p>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          align-content: center;
        `}
      >
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
        <a
          href={STORE_URL}
          target="_blank"
          rel="noreferrer"
          css={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <button
            css={css`
              margin: 5px 8px 0 15px;
              width: 130px;
              height: 30px;
              padding: 3px;
              background-color: #63a9c9;
              border: 1px solid black;
              border-radius: 3px;
              color: #000;
              display: flex;
              justify-content: space-evenly;
              align-content: center;
              align-items: center;

              :hover {
                background-color: yellow;
              }
            `}
          >
            <StarBorderIcon style={{ fontSize: "20px" }} />
            <span>Rate</span>
            <LaunchIcon />
          </button>
        </a>
      </div>
    </StyledPanelDiv>
  );
}

export default UpdatePanel;
