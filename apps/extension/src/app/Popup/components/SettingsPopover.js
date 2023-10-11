import { useState } from "react";
import { css } from "@emotion/react";
import Popover from "@mui/material/Popover";
import Settings from "@mui/icons-material/Settings";
import { BiReset } from "react-icons/bi";
import LocaleSettings from "../../Extension/Localization/LocaleSettings";

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
        <LocaleSettings />
        <div
          css={css`
            padding: 10px;
            width: 200px;
            display: flex;
            align-items: center;
            align-content: center;
          `}
        >
          <span
            css={css`
              font-size: 15px;
            `}
          >
            Repair/Reset:{" "}
          </span>
          <button
            onClick={handleReset}
            css={css`
              color: white;
              background: red;
              border: 1px solid black;
              border-radius: 2px;
              margin-left: 5px;
              padding: 3px;
              width: 100px;
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
            `}
          >
            <BiReset
              css={css`
                font-size: 16px;
                margin-right: 5px;
              `}
            />{" "}
            <span>RESET</span>
          </button>
        </div>
      </Popover>
    </>
  );
}

export default SettingsPopover;
