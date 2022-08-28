/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import Popover from '@mui/material/Popover';
import PanelPage from './PanelPage';

import InterestsIcon from '@mui/icons-material/Interests';

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
          padding: 10px 8px;
          text-align: center;
          cursor: pointer;
          :hover {
            background: rgba(0,0,0,0.2);
          }
        `}
        title="Open ThemeSong Quick Access Panel"
        onClick={handleClick}
      >
        <InterestsIcon css={css`font-size: 24px; color: var(--ts-primary-text-color);`} />
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