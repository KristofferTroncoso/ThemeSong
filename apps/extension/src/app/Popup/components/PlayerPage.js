import { css } from "@emotion/react";
import { useEffect, useState } from "react";

import { useStore } from "/src/app/store";
import SongPanel from "../../Song/SongPanel/SongPanel";
import tsicon from "../../../assets/icon-128.png";
import YtmIcon from "../../YtmLogo/YtmIcon";
import LikeButton from "../../SidePanel/components/LikeButton";
import SongControls from "../../SidePanel/components/SongControls";
import ThiefColorPicker from "../../SidePanel/ThiefColorPicker";

function PlayerPage() {
  const metadata = useStore((state) => state.media.metadata);

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 100);
  }, []);

  function handlePlayPause(e) {
    console.log(e);
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);

      chrome.tabs.sendMessage(ytmTabs[0].id, { message: "playpause" });
    });
  }

  function handleYTMclick() {
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);
      if (ytmTabs.length === 0) {
        window.open("https://music.youtube.com");
      } else if (ytmTabs.length === 1) {
        chrome.windows.update(ytmTabs[0].windowId, { focused: true });
        chrome.tabs.update(ytmTabs[0].id, { active: true });
      } else {
        let audibleTabId;
        for (let tab of ytmTabs) {
          switch (tab.audible) {
            case true:
              audibleTabId = tab.id;
              break;
            default:
              break;
          }
        }
        if (audibleTabId) {
          chrome.windows.update(ytmTabs[0].windowId, { focused: true });
          chrome.tabs.update(ytmTabs[0].id, { active: true });
        } else {
          chrome.tabs.update(ytmTabs.at(-1).id, { active: true });
        }
      }
    });
  }

  return (
    <div
      id="Player-Page"
      css={css`
        width: 400px;
        height: 540px;
      `}
    >
      <div
        css={css`
          margin: 10px;
          padding: 20px;
          width: 335px;
          height: 486px;
          color: white;
          border-radius: 14px;
          text-align: center;
          background: linear-gradient(
            to bottom,
            oklch(from var(--ts-color-0) 35% c h),
            oklch(from var(--ts-color-1) 30% calc(c / 2) h),
            #111
          );
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 280px;
          `}
        >
          <button
            onClick={handleYTMclick}
            css={css`
              border: 0;
              background: 0;
              margin-bottom: 10px;
              text-align: left;
              width: 150px;
              z-index: 1000;
            `}
          >
            <YtmIcon full />
          </button>
          <div></div>
        </div>
        <div>
          <button
            onClick={handlePlayPause}
            css={css`
              width: 200px;
              height: 200px;
              border-radius: 5px;
              margin-bottom: 20px;
              border: 0;
              background: 0;
            `}
          >
            <img
              src={metadata.artwork[metadata.artwork.length - 1].src || tsicon}
              id="sideplayerimage"
              alt="album cover"
              crossOrigin="anonymous"
              css={css`
                width: inherit;
                height: inherit;
                border-radius: 8px;
                background-color: #222;
                object-fit: contain;
                box-shadow: 0 5px 80px black;
              `}
              onError={() => {
                document.getElementById("sideplayerimage").removeAttribute("crossorigin");
              }}
            />
          </button>
          <div
            css={css`
              display: flex;
              justify-content: space-around;
            `}
          >
            <div
              css={css`
                margin-right: 2px;
                text-align: left;
                width: 250px;
              `}
            >
              <h1
                css={css`
                  margin-bottom: 10px;
                  font-size: 14px;
                  text-wrap: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                `}
                title={metadata.title}
              >
                {metadata.title}
              </h1>
              <h2
                css={css`
                  margin-top: "8px";
                  font-size: 12px;
                  color: #dddddd;
                  text-wrap: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                `}
                title={metadata.artist}
              >
                {metadata.artist}
              </h2>
            </div>
            <LikeButton />
          </div>
        </div>
        <SongControls />
        <div
          css={css`
            margin-top: 10px;
            text-align: center;
            width: 280px;
          `}
        >
          <SongPanel />
        </div>
      </div>
      {load && <ThiefColorPicker />}
    </div>
  );
}

export default PlayerPage;
