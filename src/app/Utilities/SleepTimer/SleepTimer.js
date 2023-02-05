import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import Dialog from "@mui/material/Dialog";

function StyledButton({ children, ...rest }) {
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
  );
}

let timeoutId;
let intervalId;

function SleepTimer() {
  const isActive = useStore((state) => state.utilities.sleepTimer.isActive);
  const minutesLeft = useStore(
    (state) => state.utilities.sleepTimer.minutesLeft
  );
  const changeIsActive = useStore((state) => state.utilities.changeIsActive);
  const changeMinutesLeft = useStore(
    (state) => state.utilities.changeMinutesLeft
  );
  const decrementMinutesLeft = useStore(
    (state) => state.utilities.decrementMinutesLeft
  );
  const songName = useStore((state) => state.song.songName);
  const isDialogOpen = useStore(
    (state) => state.utilities.sleepTimer.isDialogOpen
  );
  const changeIsDialogOpen = useStore(
    (state) => state.utilities.changeIsDialogOpen
  );
  const [isLastSong, setIsLastSong] = useState(false);
  const [isTimeOverDialogOpen, setIsTimeOverDialogOpen] = useState(false);

  useEffect(() => {
    function lastSongDone() {
      if (
        document
          .getElementById("movie_player")
          .classList.contains("playing-mode")
      ) {
        document.getElementById("play-pause-button").click();
      }
      setIsLastSong(false);
      changeIsActive(false);
      setIsTimeOverDialogOpen(true);
    }
    isLastSong && lastSongDone();
  }, [songName]);

  function handleLastSongClick() {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    changeMinutesLeft(0);
    setIsLastSong(true);
    changeIsActive(true);
    changeIsDialogOpen(false);
  }

  function handleTimerClick(minutes) {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    setIsLastSong(false);
    changeMinutesLeft(minutes);
    intervalId = setInterval(() => {
      decrementMinutesLeft();
    }, 60000);
    timeoutId = setTimeout(() => {
      if (
        document
          .getElementById("movie_player")
          .classList.contains("playing-mode")
      ) {
        document.getElementById("play-pause-button").click();
      }
      clearInterval(intervalId);
      changeIsActive(false);
      setIsTimeOverDialogOpen(true);
    }, minutes * 60000);
    changeIsActive(true);
    changeIsDialogOpen(false);
  }

  const handleDialogClose = () => {
    changeIsDialogOpen(false);
  };

  const handleCancelTimer = () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    setIsLastSong(false);
    changeIsActive(false);
    changeIsDialogOpen(false);
  };

  return (
    <div id="ThemeSong-SleepTimer">
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
            {isActive && (
              <h1
                css={css`
                  color: #ac13cf;
                `}
              >
                {minutesLeft} minutes left
              </h1>
            )}
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding: 10px 0;
            `}
          >
            <StyledButton onClick={handleLastSongClick}>
              Finish this song
            </StyledButton>
            <StyledButton onClick={(e) => handleTimerClick(5)}>
              5 minutes
            </StyledButton>
            <StyledButton onClick={(e) => handleTimerClick(10)}>
              10 minutes
            </StyledButton>
            <StyledButton onClick={(e) => handleTimerClick(20)}>
              20 minutes
            </StyledButton>
            <StyledButton onClick={(e) => handleTimerClick(25)}>
              25 minutes
            </StyledButton>
            <StyledButton onClick={(e) => handleTimerClick(30)}>
              30 minutes
            </StyledButton>
            <StyledButton onClick={(e) => handleTimerClick(60)}>
              60 minutes
            </StyledButton>
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
      <Dialog
        open={isTimeOverDialogOpen}
        onClose={(e) => setIsTimeOverDialogOpen(false)}
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
            height: 170px;
            background-color: #222;
            color: #fff;
            padding: 20px;
            display: flex;
            flex-direction: column;
          `}
        >
          <h1
            css={css`
              margin-bottom: 20px;
            `}
          >
            Sleep Timer completed
          </h1>
          <StyledButton
            css={css`
              background-color: #0ea135;
            `}
            onClick={(e) => setIsTimeOverDialogOpen(false)}
          >
            OK
          </StyledButton>
          <StyledButton
            css={css`
              background-color: #ac13cf;
            `}
            onClick={(e) => {
              setIsTimeOverDialogOpen(false);
              changeIsDialogOpen(true);
            }}
          >
            Set new Timer
          </StyledButton>
        </div>
      </Dialog>
    </div>
  );
}

export default SleepTimer;
