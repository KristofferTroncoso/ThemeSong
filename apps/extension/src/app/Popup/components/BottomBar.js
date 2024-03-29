import { css } from "@emotion/react";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import RatePopover from "./RatePopover";
import { useStore } from "/src/app/store";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import useLocalization from "../../Extension/Localization/useLocalization";

function BottomBar() {
  const store = useStore();
  const getMessage = useLocalization();

  return (
    <div
      className="BottomBar"
      css={css`
        background-color: #1a1a1a;
        height: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        padding: 0 10px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        `}
      >
        <h3
          css={css`
            margin-right: 5px;
            font-size: 13px;
            font-weight: 400;
          `}
        >
          {getMessage("greeting")}
        </h3>
        <HeadphonesIcon
          css={css`
            font-size: 12px;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        `}
      >
        {process.env.NODE_ENV === "development" && (
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              align-content: center;
              margin-right: 20px;
            `}
          >
            <button
              css={css`
                color: white;
                background-color: black;
                margin: 0 2px;
                border: 1px solid #888;
                padding: 2px 4px 0;
              `}
              onClick={(e) => console.log(store)}
              title="log local store"
            >
              <DataObjectIcon
                css={css`
                  font-size: 12px;
                `}
              />
            </button>
            <button
              css={css`
                color: white;
                background-color: black;
                margin: 0 2px;
                border: 1px solid #888;
                padding: 2px 4px 0;
              `}
              onClick={(e) => {
                chrome.storage.local.get(null, (res) => console.log(res));
              }}
              title="log cloud store"
            >
              <CloudQueueIcon
                css={css`
                  font-size: 12px;
                `}
              />
            </button>
          </div>
        )}
        <RatePopover />
      </div>
    </div>
  );
}

export default BottomBar;
