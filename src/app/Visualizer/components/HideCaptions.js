import ClosedCaptionDisabledIcon from "@mui/icons-material/ClosedCaptionDisabled";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import { css } from "@emotion/react";
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
      onClick={handleToggle}
      title={hideCaptions ? "Unhide Captions" : "Hide Captions"}
      css={css`
        border: 0;
        background-color: transparent;
        height: 100%;
        width: 100%;
        display: flex;
        padding: 0 10px;
        justify-content: center;
        align-items: center;
        align-content: center;
        cursor: pointer;
      `}
    >
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
