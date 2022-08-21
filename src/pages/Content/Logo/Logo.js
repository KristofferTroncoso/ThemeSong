/** @jsx jsx */
// import React from 'react';
import { jsx, css } from '@emotion/react';
// import { useSelector } from 'react-redux';
import './Logo.css';

function SongInfoDisplay() {
  // const songName = useSelector(state => state.songDetails.songName);
  // const songArtist = useSelector(state => state.songDetails.songArtist);

  return (
    <div
      id="logoNode"
      css={css`
        color: tomato;
      `}
    >
      <h1>Logo</h1>
    </div>
  )
}

export default SongInfoDisplay;