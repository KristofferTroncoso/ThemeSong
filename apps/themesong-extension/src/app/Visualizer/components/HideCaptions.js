import ClosedCaptionDisabledIcon from "@mui/icons-material/ClosedCaptionDisabled";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import { css, Global } from "@emotion/react";
import { useStore } from "/src/app/store";

function HideCaptions() {
  const hideCaptions = useStore((state) => state.player.hideCaptions);
  const changeHideCaptions = useStore((state) => state.player.changeHideCaptions);

  function handleToggle(e) {
    e.stopPropagation();
    changeHideCaptions(!hideCaptions);
    chrome.storage.local.set({ hideCaptions: !hideCaptions });
  }

  return (
    <button
      id="ts-hidecaptions-button"
      onClick={handleToggle}
      title={hideCaptions ? "Unhide Captions" : "Hide Captions"}
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
      {hideCaptions ? (
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
