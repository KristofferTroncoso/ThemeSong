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
  }

  return (
    <>
      <button css={{ background: 0, border: 0, color: "white" }} onClick={handleClick} title="Settings">
        <Settings style={{ fontSize: "16px" }} />
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
