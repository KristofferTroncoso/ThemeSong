import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import SongPanel from "../../Song/SongPanel/SongPanel";
import tsicon from "../../../assets/icon-128.png";
import { PiSkipBackFill, PiPlayPauseFill, PiSkipForwardFill } from "react-icons/pi";

function PlayerPage() {
  const [songName, songArtist, songImg] = useStore((state) => [
    state.song.songName,
    state.song.songArtist,
    state.song.songImg,
  ]);

  function handlePrevious() {
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);
      chrome.tabs.sendMessage(ytmTabs[0].id, { message: "previous-button" });
    });
  }

  function handlePlayPause(e) {
    console.log(e);
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);

      chrome.tabs.sendMessage(ytmTabs[0].id, { message: "playpause" });
    });
  }

  function handleNext() {
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);
      chrome.tabs.sendMessage(ytmTabs[0].id, { message: "next-button" });
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
          height: 490px;
          color: white;
          border-radius: 10px;
          text-align: center;
          background: linear-gradient(to bottom, #222, #111);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div>
          <button
            onClick={handleYTMclick}
            css={css`
              width: 170px;
              height: 170px;
              border-radius: 5px;
              margin-bottom: 20px;
              border: 0;
              background: 0;
            `}
          >
            <img
              src={songImg || tsicon}
              alt="album cover"
              css={css`
                width: 170px;
                height: 170px;
                border-radius: 5px;
                border: 1px solid #333;
                background-color: #222;
              `}
            />
          </button>
          <h1
            css={css`
              margin-bottom: 10px;
              font-size: 20px;
            `}
          >
            {songName}
          </h1>
          <h2
            css={css`
              margin-top: "8px";
              font-size: 16px;
              color: #dddddd;
            `}
          >
            {songArtist}
          </h2>
        </div>
        <div
          css={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            button: {
              border: 0,
              padding: "10px 16px",
              color: "#aaa",
              background: 0,
              ":hover": {
                color: "#fff",
              },
            },
          }}
        >
          <button onClick={handlePrevious}>
            <PiSkipBackFill style={{ fontSize: "25px" }} />
          </button>
          <button onClick={handlePlayPause}>
            <PiPlayPauseFill style={{ fontSize: "50px" }} />
          </button>
          <button onClick={handleNext}>
            <PiSkipForwardFill style={{ fontSize: "25px" }} />
          </button>
        </div>
        <div
          css={css`
            margin-top: 20px;
            text-align: center;
          `}
        >
          <SongPanel />
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
