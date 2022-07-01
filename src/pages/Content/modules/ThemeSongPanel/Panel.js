import React from 'react';
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
        style={{
          border: '0',
          borderRadius: "3px",
          height: "30px",
          width: "30px",
          backgroundColor: "transparent",
          fontSize: "20px",
          padding: "0",
          cursor: "pointer",
          title: "Open ThemeSong Panel"
        }}
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