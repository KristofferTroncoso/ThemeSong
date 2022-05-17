/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function SettingsPopover({fetchSyncStorage}) {
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
      fetchSyncStorage();
      handleClose();
    })
  }

  return (
    <>
      <button css={{background: 0, border: 0, color: 'white', fontSize: '22px'}} onClick={handleClick} title="Settings">⚙</button>
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
          Repair/Reset to extension defaults: <button onClick={handleReset} css={{color: 'white', background: 'red', border: '1px solid black', borderRadius: '2px'}}>RESET</button>
        </Typography>
      </Popover>
    </>
  )
}

export default SettingsPopover;