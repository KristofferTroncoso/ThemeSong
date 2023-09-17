import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import PauseIcon from "@mui/icons-material/Pause";

function PausedWarning() {
  const isSongPlaying = useStore((state) => state.player.isSongPlaying);

  return (
    <div id="PausedWarning">
      {!isSongPlaying && (
        <PauseIcon
          css={css`
            margin: 10px;
            padding: 4px;
            background-color: rgb(0 0 0 / 0.5);
            color: rgb(255 255 255 / 0.8);
            border-radius: 10px;
            position: absolute;
            z-index: 1000;
            top: 0;
            left: 0;
            height: 10%;
            width: 10%;
          `}
        />
      )}
    </div>
  );
}

export default PausedWarning;
