/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import PanelPage from './PanelPage';
import Popover from '@mui/material/Popover';
import ThemeSongFontIcon from './components/ThemeSongFontIcon';

function Panel() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
          padding: 12px 10px 8px 3px;
          background-color: transparent;
          color: var(--themesong-tertiary-text-color);
          :hover {
            color: var(--themesong-primary-text-color);
          }
        `}
        title="Open ThemeSong Quick Access Panel"
        onClick={handleClick}
      >
        <ThemeSongFontIcon />
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
            background-color: var(--themesong-playbarbg-color) !important;
          }
        `}
      >
        <PanelPage />
      </Popover>
    </div>
  )
}

export default Panel;