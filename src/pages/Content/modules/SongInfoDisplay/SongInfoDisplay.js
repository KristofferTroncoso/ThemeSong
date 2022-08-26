/** @jsx jsx */
// import React from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import './SongInfoDisplay.css';

function SongInfoDisplay() {
  const songName = useSelector(state => state.songDetails.songName);
  const songSubtitle = useSelector(state => state.songDetails.songSubtitle);

  return (
    <div
      id="songDivNode"
      css={css`
        padding: 80px 0 80px 80px;
        height: 600px;
        max-width: 900px;
      `}
    >
      <h1 
        css={css`
          font-size: 40px; 
          color: var(--ts-secondary-text-color);
        `}
      >
        {songName}
      </h1>
      {songSubtitle.split(" • ").map(info => (
        <h2 
          key={info}
          css={css`
            margin: 14px 0;
            font-size: 32px; 
            color: var(--ts-secondary-text-color);
          `}
        >
          {info}
        </h2>
      ))}
    </div>
  )
}

export default SongInfoDisplay;