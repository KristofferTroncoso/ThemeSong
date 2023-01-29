import { css } from "@emotion/react";
import "./SongInfoDisplay.css";
import { useStore } from "../../store";

function SongInfoDisplay() {
  const songName = useStore((state) => state.song.songName);
  const songSubtitle = useStore((state) => state.song.songSubtitle);

  return (
    <div
      id="songDivNode"
      css={css`
        padding: 80px 0 80px 80px;
      `}
    >
      <h1
        css={css`
          font-size: 40px;
          color: var(--themesong-secondary-text-color);
        `}
      >
        {songName}
      </h1>
      {songSubtitle.split(" • ").map((info) => (
        <h2
          key={Math.floor(Math.random() * 10000)}
          css={css`
            margin: 14px 0;
            font-size: 32px;
            color: var(--themesong-tertiary-text-color);
          `}
        >
          {info}
        </h2>
      ))}
    </div>
  );
}

export default SongInfoDisplay;
