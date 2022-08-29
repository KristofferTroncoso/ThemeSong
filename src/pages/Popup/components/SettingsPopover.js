/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Settings from '@mui/icons-material/Settings';
// import { useDispatch } from 'react-redux';

function SettingsPopover() {
  // const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function handleReset(e) {
    chrome.runtime.sendMessage('reset', response => {
      console.log(`Received response ${response}`);
      handleClose();
    })
  }

  return (
    <>
      <button css={{background: 0, border: 0, color: 'white'}} onClick={handleClick} title="Settings">
        <Settings style={{fontSize: '16px'}} />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 1 }}>
          Repair/Reset to extension defaults: 
          <button onClick={handleReset} css={{color: 'white', background: 'red', border: '1px solid black', borderRadius: '2px'}}>
            RESET
          </button>
        </Typography>
      </Popover>
    </>
  )
}

export default SettingsPopover;