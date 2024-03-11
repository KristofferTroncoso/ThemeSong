import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import SongPanel from "../Song/SongPanel/SongPanel";
import tsicon from "../../assets/icon-128.png";
import YtmIcon from "../YtmLogo/YtmIcon";
// import { IoRadioOutline } from "react-icons/io5";
import LikeButton from "./components/LikeButton";
import SongControls from "./components/SongControls";
import { useState } from "react";

function SidePlayer() {
  const metadata = useStore((state) => state.media.metadata);
  const [showPalette, setShowPalette] = useState(false);

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
      id="SidePlayer"
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      <div
        id="sideplayer-bg"
        css={css`
          padding: 20px;
          height: calc(100vh - 40px);
          color: white;
          text-align: center;
          background: linear-gradient(
            to bottom,
            oklch(from var(--ts-color-0) 35% c h),
            oklch(from var(--ts-color-1) 30% calc(c / 2) h),
            #111
          );
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          align-content: center;
        `}
      >
        <div
          css={css`
            width: 280px;
          `}
        >
          <div
            css={css`
              width: 280px;
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            `}
          >
            <button
              onClick={handleYTMclick}
              css={css`
                border-radius: 5px;
                border: 0;
                background: 0;

                :hover {
                  filter: drop-shadow(0px 0px 10px oklch(from var(--ts-color-1) 85% 100% h));
                }
              `}
            >
              <YtmIcon full />
            </button>
            <div
              css={css`
                height: 15px;
                width: 90px;
                display: flex;
                margin: 5px 5px 0;
                box-shadow: 0 0 20px rgb(0 0 0 / 0.1);
                filter: ${showPalette ? "opacity(1)" : "opacity(0)"};
                cursor: pointer;
              `}
              onClick={(e) => (showPalette ? setShowPalette(false) : setShowPalette(true))}
            >
              <div style={{ background: "var(--ts-color-0)", width: "15px", height: "15px" }}></div>
              <div style={{ background: "var(--ts-color-1)", width: "15px", height: "15px" }}></div>
              <div style={{ background: "var(--ts-color-2)", width: "15px", height: "15px" }}></div>
              <div style={{ background: "var(--ts-color-3)", width: "15px", height: "15px" }}></div>
              <div style={{ background: "var(--ts-color-4)", width: "15px", height: "15px" }}></div>
              <div style={{ background: "var(--ts-color-5)", width: "15px", height: "15px" }}></div>
            </div>
          </div>
          <button
            onClick={handlePlayPause}
            css={css`
              border-radius: 10px;
              margin-bottom: 30px;
              width: 280px;
              height: 280px;
              border: 0;
              background: rgb(255 255 255 / 0.05);
              transition: filter 0.2s ease-in-out;
              :hover {
                filter: grayscale(100) brightness(0.7);
              }
            `}
          >
            <img
              id="sideplayerimage"
              src={metadata.artwork[metadata.artwork.length - 1].src || tsicon}
              alt="album cover"
              crossOrigin="anonymous"
              css={css`
                width: inherit;
                height: inherit;
                border-radius: 10px;
                object-fit: contain;
                box-shadow: 0 0 40px rgb(0 0 0 / 0.5);
              `}
              onError={() => {
                document.getElementById("sideplayerimage").removeAttribute("crossorigin");
              }}
            />
          </button>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 5px;
            `}
          >
            <div
              css={css`
                text-align: left;
                margin-right: 4px;
              `}
            >
              <h1
                css={css`
                  margin-bottom: 6px;
                  font-size: 16px;
                  font-weight: 600;
                  text-wrap: pretty;
                `}
              >
                {metadata.title}
              </h1>
              <h2
                css={css`
                  font-size: 14px;
                  color: #eee;
                  font-weight: 400;
                `}
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
            margin-top: 5px;
            text-align: center;
            width: 280px;

            h3 {
              font-weight: 400 !important;
            }
          `}
          id="songpanel"
        >
          <SongPanel />
        </div>
      </div>
    </div>
  );
}

export default SidePlayer;
