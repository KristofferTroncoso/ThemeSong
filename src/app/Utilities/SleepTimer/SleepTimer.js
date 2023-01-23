/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../store';

import Dialog from '@mui/material/Dialog';

function StyledButton({children, ...rest}) {
  return (
    <button
      css={css`
        margin: 8px 0;
        padding: 8px;
        border: 1px solid #444;
        border-radius: 20px;
        background-color: #111;
        color: #fff;
        font-size: 16px;

        :hover {
          border: 1px solid #fff;
          background-color: #fff;
          color: #000;
        }
      `}
      {...rest}
    >
      {children}
    </button>
  )
}


function SleepTimer() {
  const isActive = useStore(state => state.utilities.sleepTimer.isActive);
  const minutesLeft = useStore(state => state.utilities.sleepTimer.minutesLeft);
  const changeIsActive = useStore(state => state.utilities.changeIsActive);
  const changeMinutesLeft = useStore(state => state.utilities.changeMinutesLeft);
  const decrementMinutesLeft = useStore(state => state.utilities.decrementMinutesLeft);
  const songName = useStore(state => state.song.songName);
  const isDialogOpen = useStore(state => state.utilities.sleepTimer.isDialogOpen);
  const changeIsDialogOpen = useStore(state => state.utilities.changeIsDialogOpen);
  const [isLastSong, setIsLastSong] = React.useState(false);

  let timeoutId;
  let intervalId;

  React.useEffect(() => {
    console.log('SONGNAME EFFEEEEEEEEECT')
    function lastSongDone() {
      if (document.getElementById("movie_player").classList.contains('playing-mode')) {
        document.getElementById("play-pause-button").click()
      }
      changeIsActive(false);
      alert(`ThemeSong: Sleep Timer completed`)
    };
    isLastSong && (
      lastSongDone()
    )
  }, [songName])

  function handleLastSongClick() {
    clearTimeout(timeoutId);
    changeMinutesLeft(0);
    setIsLastSong(true);
    changeIsActive(true);
    changeIsDialogOpen(false);
  }
  
  function handleTimerClick(minutes) {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    changeMinutesLeft(minutes);
    intervalId = setInterval(() => {
      decrementMinutesLeft();
    }, 60000);
    timeoutId = setTimeout(() => {
      if (document.getElementById("movie_player").classList.contains('playing-mode')) {
        document.getElementById("play-pause-button").click()
      }
      clearInterval(intervalId);
      changeIsActive(false);
      alert(`ThemeSong: ${minutes}-minute Sleep Timer completed`)
    }, minutes * 60000);
    changeIsActive(true);
    changeIsDialogOpen(false);
  }

  const handleDialogClose = () => {
    changeIsDialogOpen(false);
  };

  const handleCancelTimer = () => {
    clearTimeout(timeoutId);
    changeIsActive(false);
    changeIsDialogOpen(false);
  }

  return (
    <div>
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        css={css`
          .MuiDialog-paper {
            border-radius: 5px;
            border: 1px solid #aaa;
          }
        `}
      >
        <div
          css={css`
            width: 300px;
            height: 510px;
            background-color: #222;
            color: #fff;
            padding: 20px;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <h1>Sleep Timer</h1>
            {isActive && <h1 css={css`color: #ac13cf;`}>{minutesLeft} minutes left</h1>}
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding: 10px 0;
            `}
          >
            <StyledButton onClick={handleLastSongClick}>Finish this song</StyledButton>
            <StyledButton onClick={e => handleTimerClick(5)}>5 minutes</StyledButton>
            <StyledButton onClick={e => handleTimerClick(10)}>10 minutes</StyledButton>
            <StyledButton onClick={e => handleTimerClick(20)}>20 minutes</StyledButton>
            <StyledButton onClick={e => handleTimerClick(25)}>25 minutes</StyledButton>
            <StyledButton onClick={e => handleTimerClick(30)}>30 minutes</StyledButton>
            <StyledButton onClick={e => handleTimerClick(60)}>60 minutes</StyledButton>
          </div>
          <button
            css={css`
              margin: 8px 0;
              padding: 8px;
              border-radius: 20px;
              border: 1px solid tomato;
              background-color: red;
              color: #fff;
              font-size: 16px;
              width: 100%;

              :hover {
                border: 1px solid red;
                background-color: tomato;
                color: #fff;
              }
            `}
            onClick={handleCancelTimer}    
          >
            Cancel Timer
          </button>
        </div>
      </Dialog>
    </div>
  )
}

export default SleepTimer;