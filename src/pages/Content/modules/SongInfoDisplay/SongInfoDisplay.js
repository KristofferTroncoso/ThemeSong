/** @jsx jsx */
// import React from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import './SongInfoDisplay.css';

function SongInfoDisplay() {
  const songName = useSelector(state => state.songDetails.songName);
  const songArtist = useSelector(state => state.songDetails.songArtist);

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
          color: var(--ts-primary-text-color);
        `}
      >
        {songName}
      </h1>
      <h2 
        css={css`
          padding: 30px 0; 
          font-size: 30px; 
          color: var(--ts-secondary-text-color);
        `}
      >
        {songArtist}
      </h2>
    </div>
  )
}

export default SongInfoDisplay;