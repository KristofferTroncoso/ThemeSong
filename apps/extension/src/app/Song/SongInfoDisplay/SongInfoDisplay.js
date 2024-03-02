import { css } from "@emotion/react";
import "./SongInfoDisplay.css";
import { useStore } from "/src/app/store";

function SongInfoDisplay() {
  const metadata = useStore((state) => state.media.metadata);

  return (
    <div
      id="songDivNode"
      css={css`
        padding: 80px 0 80px 80px;
      `}
    >
      <h1
        css={css`
          font-size: 32px;
          color: var(--ts-secondary-text-color);
        `}
      >
        {metadata.title}
      </h1>
      <h2
        css={css`
          margin: 14px 0;
          font-size: 26px;
          color: var(--ts-secondary-text-color);
        `}
      >
        {metadata.artist}
      </h2>
      <h3
        css={css`
          margin: 14px 0;
          font-size: 20px;
          color: var(--ts-secondary-text-color);
        `}
      >
        {metadata.album}
      </h3>
    </div>
  );
}

export default SongInfoDisplay;
