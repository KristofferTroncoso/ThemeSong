/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import Popover from '@mui/material/Popover';
import PanelPage from './PanelPage';

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
    <div>
      <button
        css={css`
          border: 0;
          border-radius: 50%;
          height: 42px;
          width: 42px;
          background-color: transparent;
          font-size: 20px;
          padding: 0;
          cursor: pointer;
          title: 'Open ThemeSong Panel';
          
          :hover {
            background: rgba(255, 255, 255, 0.1);
          }
        `}
        onClick={handleClick}
      >
        🎧
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
      >
        <PanelPage />
      </Popover>
    </div>
  )
}

export default Panel;