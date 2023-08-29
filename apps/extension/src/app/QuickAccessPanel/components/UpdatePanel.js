import { css } from "@emotion/react";

import { useStore } from "/src/app/store";

import StyledPanelDiv from "./StyledPanelDiv";

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
          <span> (August 27, 2023)</span>
          <span> 🎉</span>
        </p>
        <br></br>
        <p>
          It's finally here! MIT OPEN-SOURCE. You're invited to contribute on{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/KristofferTroncoso/ThemeSong">
            GitHub
          </a>
          !
        </p>
        <br></br>
        <h4>Changes:</h4>
        <p>
          - <b>Notifications</b>: Toggle desktop notifications for song changes.
        </p>
        <p>
          - <b>Pieces</b>: Toggle on small UI options such as hiding the Cast icon.
        </p>
        <br></br>
        <p>
          <b>
            <i>Thanks to the first 2000 users! I've seen all the stars and reviews! You guys are great!</i>
          </b>
        </p>
        <p>
          <i>-- Kris / GraphiteEater</i>
          <span style={{ fontSize: "18px" }}> 😃</span>
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
            width: 100px;
            padding: 3px;
            background-color: dodgerblue;
            border: 1px solid black;
            border-radius: 3px;
            color: #000;

            :hover {
              background-color: yellow;
            }
          `}
        >
          ⭐️ Leave a rating
        </button>
      </a>
    </StyledPanelDiv>
  );
}

export default UpdatePanel;
