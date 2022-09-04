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
          padding: 5px 4px 0px;
          border-radius: 50%;
          background-color: transparent;
        `}
        title="Open ThemeSong Quick Access Panel"
        onClick={handleClick}
      >
        <InterestsIcon 
          css={css`
            font-size: 24px; 
            padding: 10px;
            border-radius: 50%;
            color: var(--ts-tertiary-text-color);
            :hover {
              color: var(--ts-primary-text-color);
            }
          `} 
        />
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