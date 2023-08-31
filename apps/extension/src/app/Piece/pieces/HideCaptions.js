import ClosedCaptionDisabledIcon from "@mui/icons-material/ClosedCaptionDisabled";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import { css, Global } from "@emotion/react";
import { useStore } from "/src/app/store";

function HideCaptions() {
  const hideCaptionsPrefs = useStore((state) => state.piece.prefs["fe8f93d0-45a3-4214-afa5-3e3db4274e1b"]);
  const togglePiece = useStore((state) => state.piece.togglePiece);

  function handleToggle(e) {
    e.stopPropagation();
    togglePiece("fe8f93d0-45a3-4214-afa5-3e3db4274e1b");
  }

  return (
    <button
      id="ts-hidecaptions-button"
      onClick={handleToggle}
      title={hideCaptionsPrefs.enabled ? "Unhide Captions" : "Hide Captions"}
      css={css`
        border: 0;
        background-color: transparent;
        display: none;
        padding: 0 10px;
      `}
    >
      <Global
        styles={css`
          #player-page[video-mode_] #ts-hidecaptions-button {
            display: block;
          }
        `}
      ></Global>
      {hideCaptionsPrefs.enabled ? (
        <>
          <style>
            {`
              #ytp-caption-window-container {
                display: none;
              }
            `}
          </style>
          <ClosedCaptionDisabledIcon
            onClick={handleToggle}
            css={css`
              font-size: 24px;
              color: #fff;
            `}
          />
        </>
      ) : (
        <ClosedCaptionIcon
          onClick={handleToggle}
          css={css`
            font-size: 24px;
            color: #fff;
          `}
        />
      )}
    </button>
  );
}

export default HideCaptions;
