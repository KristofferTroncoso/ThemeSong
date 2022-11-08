/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../store';

function PausedWarning() {
  const playPauseState = useStore(state => state.player.playPauseState);

  return (
    <div id="PausedWarning">
      {(playPauseState === 'Pause') && (
        <h1
          css={css`
            font-size: 20px;
            margin: 10px;
            position: absolute;
            z-index: 1000;
            bottom: 0;
            left: 0;
            background-color: rgba(0,0,0,0.7);
            border: 4px solid #777;
            color: #eee;
            padding: 10px;
            border-radius: 10px;
          `}
        >
          PAUSED
        </h1>
      )}
    </div>
  )
}

export default PausedWarning;