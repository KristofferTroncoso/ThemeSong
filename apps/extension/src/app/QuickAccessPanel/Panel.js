import { useState } from "react";
import { css } from "@emotion/react";
import PanelPage from "./PanelPage";
import Popover from "@mui/material/Popover";
import Badge from "@mui/material/Badge";
import { useStore } from "/src/app/store";
import SnoozeIcon from "@mui/icons-material/Snooze";
import ThemeSongFontIcon from "../Icon/ThemeSongFontIcon";
import QapIconAlt from "../Piece/pieces/QapIconAlt/QapIconAlt";

function Panel() {
  const showUpdateNote = useStore((state) => state.extension.prefs.showUpdateNote);
  const showNewUserNote = useStore((state) => state.extension.prefs.showNewUserNote);
  const isActive = useStore((state) => state.utilities.sleepTimer.isActive);
  const minutesLeft = useStore((state) => state.utilities.sleepTimer.minutesLeft);
  const quickAccessPanelIconPrefs = useStore((state) => state.piece.prefs["34637b81-0c1a-4982-b130-0ff9ac232e4d"]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div id="Panel">
      <button
        css={css`
          border: 0;
          padding: 8px;
          background-color: transparent;
          color: var(--ts-secondary-icon-color);
          border-radius: 50%;
          :hover {
            color: var(--ts-primary-text-color);
            background-color: var(--ts-base-100-alpha-02-color, rgb(255 255 255 / 0.2));
          }
        `}
        title="Open ThemeSong Quick Access Panel"
        onClick={handleClick}
      >
        <Badge
          variant="dot"
          color="warning"
          invisible={!showUpdateNote && !showNewUserNote}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Badge
            badgeContent={minutesLeft || <SnoozeIcon />}
            color="secondary"
            invisible={!isActive}
            variant="standard"
            css={css`
              .MuiBadge-badge {
                font-size: 12px;
              }
            `}
          >
            {quickAccessPanelIconPrefs.enabled ? <QapIconAlt /> : <ThemeSongFontIcon />}
          </Badge>
        </Badge>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transitionDuration={100}
        css={css`
          .MuiPaper-root {
            background-color: rgb(0 0 0 / 0) !important;
            width: 265px;
            display: flex;
            justify-content: end;
            flex-direction: column;
            transition: none !important;
            border-radius: 8px;
            box-shadow: 0 0 20px rgb(0 0 0 / 15%);
          }
        `}
      >
        <PanelPage />
      </Popover>
    </div>
  );
}

export default Panel;
