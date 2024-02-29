import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import useLocalization from "./Localization/useLocalization";
import { AiFillLike } from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import { locales } from "./Localization/locales";

function WelcomeMessage() {
  const [isTimeOverDialogOpen, setIsTimeOverDialogOpen] = useState(true);
  const setShowNewUserNote = useStore((state) => state.extension.setShowNewUserNote);
  const getMessage = useLocalization();
  const metadata = useStore((state) => state.media.metadata);
  const locale = useStore((state) => state.extension.prefs.locale);

  return (
    <Dialog
      open={isTimeOverDialogOpen}
      onClose={(e) => setIsTimeOverDialogOpen(false)}
      css={css`
        .MuiDialog-paper {
          border-radius: 10px;
          background-color: #222;
        }
      `}
    >
      <div
        css={css`
          width: 500px;
          height: 400px;
          background-color: #222;
          color: #fff;
          padding: 20px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;

          * {
            border: 1px solid tomato;
          }
        `}
      >
        <img width="250" src={chrome.runtime.getURL(`./assets/ThemeSongFullLogo.png`)} alt="ThemeSong Full Text Logo" />

        <div>
          <p
            css={css`
              font-family: cursive;
              font-size: 18px;
            `}
          >
            <b>Thank you for installing ThemeSong! 🎧</b>
          </p>
        </div>
        <div>
          <p
            css={css`
              font-size: 14px;
            `}
          >
            {" "}
            Language auto-set to {locales[locale]}. Change through Popup Settings.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              height: 40px;
              width: 100%;
              margin-top: 6px;
              font-family: sans-serif;
              font-size: 14px;
              color: lightgrey;
              align-items: center;
              align-content: center;
            `}
          >
            <button
              css={css`
                width: 90px;
                padding: 4px;
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
              OK <AiFillLike size={16} />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default WelcomeMessage;
