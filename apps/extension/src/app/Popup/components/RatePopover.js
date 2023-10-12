import { useState } from "react";
import { css } from "@emotion/react";
import Popover from "@mui/material/Popover";
import Star from "@mui/icons-material/Star";
import LaunchIcon from "@mui/icons-material/Launch";
import useLocalization from "../../Extension/Localization/useLocalization";
import { TbHandOff } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";

function RatePopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const getMessage = useLocalization();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <button
        css={css`
          background: none;
          border: none;
          padding: 0 4px;
        `}
        onClick={handleClick}
        title="Rate and comment!"
      >
        <Star
          css={css`
            font-size: 18px;
            color: #fff;
            :hover {
              color: yellow;
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
        <div css={{ padding: "10px", fontSize: "14px", color: "black" }}>
          <div>
            <p css={{ marginBottom: "5px", fontSize: "15px" }}>{getMessage("likeAndComment")}</p>
            <div
              css={css`
                display: flex;
                justify-content: space-around;
              `}
            >
              <a
                href={STORE_URL}
                target="_blank"
                rel="noreferrer"
                css={{
                  textDecoration: "none",
                  color: "white",
                }}
                title="😃"
              >
                <button
                  css={css`
                    display: flex;
                    height: 30px;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    margin: 0 5px;
                    color: white;
                    background-color: #1b8541;
                    border: 1px solid #000;
                    padding: 2px 50px;
                    border-radius: 4px;
                  `}
                >
                  <span
                    css={css`
                      padding-right: 5px;
                    `}
                  >
                    <AiFillLike style={{ fontSize: 22 }} />
                  </span>
                  <LaunchIcon
                    css={css`
                      font-size: 12px;
                    `}
                  />
                </button>
              </a>
              <button
                onClick={handleClose}
                title="😦"
                css={{
                  fontSize: "12px",
                  color: "white",
                  backgroundColor: "#858585",
                  border: "1px solid #2e2e2e",
                  borderRadius: "4px",
                  padding: "0 10px",
                }}
              >
                <TbHandOff style={{ fontSize: 20 }} />
              </button>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}

export default RatePopover;
