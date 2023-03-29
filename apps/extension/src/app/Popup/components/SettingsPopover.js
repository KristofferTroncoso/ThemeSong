import { useState } from "react";
import { css } from "@emotion/react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Settings from "@mui/icons-material/Settings";

function SettingsPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function handleReset(e) {
    chrome.runtime.sendMessage("reset", (response) => {
      console.log(`Received response ${response}`);
      handleClose();
    });
    window.location.reload();
  }

  return (
    <>
      <button
        css={css`
          background: 0;
          border: 0;
          padding: 0 2px 0 4px;
        `}
        onClick={handleClick}
        title="Settings"
      >
        <Settings
          css={css`
            font-size: 16px;
            color: #fff;
            padding: 2px;
            transition: transform 0.2s ease-in-out;
            :hover {
              color: #ff8000;
              transform: rotate(45deg);
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
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 1 }}>
          <span
            css={css`
              font-size: 15px;
            `}
          >
            Repair/Reset to extension defaults:{" "}
          </span>
          <button
            onClick={handleReset}
            css={{
              color: "white",
              background: "red",
              border: "1px solid black",
              borderRadius: "2px",
              marginLeft: "5px",
            }}
          >
            RESET
          </button>
        </Typography>
      </Popover>
    </>
  );
}

export default SettingsPopover;
