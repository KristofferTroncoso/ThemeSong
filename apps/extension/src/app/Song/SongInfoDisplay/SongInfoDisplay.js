import { css } from "@emotion/react";
import "./SongInfoDisplay.css";
import { useStore } from "/src/app/store";

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
          font-size: 36px;
          color: var(--ts-secondary-text-color);
        `}
      >
        {songName}
      </h1>
      {songSubtitle.split(" • ").map((info, index) => {
        if (index === 0) {
          return (
            <h2
              key={index}
              css={css`
                margin: 14px 0;
                font-size: 26px;
                color: var(--ts-tertiary-text-color);
              `}
            >
              {info}
            </h2>
          );
        } else {
          return (
            <h3
              key={index}
              css={css`
                margin: 14px 0;
                font-size: 20px;
                color: var(--ts-tertiary-text-color);
              `}
            >
              {info}
            </h3>
          );
        }
      })}
    </div>
  );
}

export default SongInfoDisplay;
