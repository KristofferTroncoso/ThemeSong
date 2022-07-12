/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

function SongInfoDisplay() {
  const songName = useSelector(state => state.songDetails.songName);
  const songArtist = useSelector(state => state.songDetails.songArtist);

  return (
    <div>
      <h1 
        css={css`font-size: 40px; color: var(--ts-primary-text-color);`}
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