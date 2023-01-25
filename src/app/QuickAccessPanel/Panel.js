import { useState } from 'react';
import { css } from '@emotion/react';
import PanelPage from './PanelPage';
import Popover from '@mui/material/Popover';
import Badge from '@mui/material/Badge';
import ThemeSongFontIcon from './components/ThemeSongFontIcon';
import { useStore } from '../store';
import SnoozeIcon from '@mui/icons-material/Snooze';

function Panel() {
  const showUpdateNote = useStore(state => state.extension.showUpdateNote);
  const isActive = useStore(state => state.utilities.sleepTimer.isActive);
  const minutesLeft = useStore(state => state.utilities.sleepTimer.minutesLeft);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div id="Panel">
      <button
        css={css`
          border: 0;
          padding: 12px 16px 10px 6px;
          background-color: transparent;
          color: var(--themesong-tertiary-text-color);
          :hover {
            color: var(--themesong-primary-text-color);
          }
        `}
        title="Open ThemeSong Quick Access Panel"
        onClick={handleClick}
      >
        <Badge 
          variant="dot" 
          color="warning"
          invisible={!showUpdateNote}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Badge
            badgeContent={minutesLeft || <SnoozeIcon />}
            color="secondary"
            invisible={!isActive}
            variant="standard"
            css={css`
              .MuiBadge-badge {
                font-size: 12px;
              }
            `}
          >
            <ThemeSongFontIcon />
          </Badge>
        </Badge>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        css={css`
          .MuiPaper-root {
            background-color: rgba(0,0,0,0) !important;
            min-height: 600px;
            display: flex;
            justify-content: end;
            flex-direction: column;
            box-shadow: none !important;
            transition: none !important;
          }
        `}
      >
        <PanelPage />
      </Popover>
    </div>
  )
}

export default Panel;