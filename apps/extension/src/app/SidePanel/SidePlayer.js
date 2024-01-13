import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import SongPanel from "../Song/SongPanel/SongPanel";
import tsicon from "../../assets/icon-128.png";
import { PiSkipBackFill, PiPlayPauseFill, PiSkipForwardFill } from "react-icons/pi";
import YtmIcon from "../YtmLogo/YtmIcon";
import { BiLike, BiSolidLike } from "react-icons/bi";
// import { IoRadioOutline } from "react-icons/io5";

function SidePlayer() {
  const metadata = useStore((state) => state.media.metadata);
  const changeMedia = useStore((state) => state.media.changeMedia);
  const changeMetadataKey = useStore((state) => state.media.changeMetadataKey);

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
          border-radius: 10px;
          text-align: center;
          background: linear-gradient(
            to bottom,
            oklch(from var(--ts-color) 35% c h),
            oklch(from var(--ts-color2) 30% calc(c / 2) h),
            #111
          );
          display: flex;
          flex-direction: column;
          justify-content: space-around;
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
                  filter: drop-shadow(0px 0px 10px oklch(from var(--ts-color2) 85% 100% h));
                }
              `}
            >
              <YtmIcon full />
            </button>
            <div></div>
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

              :hover {
                filter: grayscale(100) brightness(0.7);
              }
            `}
          >
            <img
              id="sideplayerimage"
              src={metadata.artwork[metadata.artwork.length - 1].src || tsicon}
              alt="album cover"
              css={css`
                width: 280px;
                height: 280px;
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

            {metadata.liked ? (
              <button
                css={{
                  border: "0",
                  borderRadius: "50%",
                  backgroundColor: "rgb(0 0 0 / 22%)",
                  height: "36px",
                  width: "36px",
                  cursor: "not-allowed !important",
                }}
              >
                <BiSolidLike
                  css={{
                    padding: "8px",
                    color: "#ff0023",
                    fontSize: "20px",
                  }}
                />
              </button>
            ) : (
              <button
                css={{
                  border: "0",
                  borderRadius: "50%",
                  backgroundColor: "rgb(255 255 255 / 7%)",
                  height: "36px",
                  width: "36px",

                  ":hover": {
                    backgroundColor: "rgb(255 255 255 / 0.2)",
                  },
                }}
                onClick={(e) => {
                  chrome.tabs.query({}, (tabs) => {
                    let ytmTabs = tabs.filter((tab) => "url" in tab);
                    console.log(ytmTabs);
                    chrome.tabs.sendMessage(ytmTabs[0].id, { message: "like" });
                  });
                  setTimeout(() => {
                    changeMetadataKey({ liked: true });
                    changeMedia();
                  }, 500);
                }}
              >
                <BiLike
                  css={{
                    padding: "8px",
                    color: "#ffffff69",
                    fontSize: "20px",

                    ":hover": {
                      color: "#fff",
                    },
                  }}
                />
              </button>
            )}
          </div>
        </div>
        <div>
          {/* <div>
            <button
              css={{
                padding: "5px 16px 3px",
                border: 0,
                borderRadius: "20px",
                backgroundColor: "rgb(255 255 255 / 0.1)",
                color: "#fff",
              }}
              onClick={() => {
                chrome.tabs.query({}, (tabs) => {
                  let ytmTabs = tabs.filter((tab) => "url" in tab);
                  console.log(ytmTabs);
                  chrome.tabs.sendMessage(ytmTabs[0].id, { message: "start-radio" });
                });
              }}
            >
              <IoRadioOutline style={{ fontSize: "25px", color: "#ccc" }} />
            </button>
          </div> */}

          <div
            css={{
              marginTop: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              minWidth: 300,
              maxWidth: 500,
              button: {
                border: 0,
                padding: "10px 16px",
                color: "#ccc",
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
              <PiPlayPauseFill style={{ fontSize: "45px" }} />
            </button>
            <button onClick={handleNext}>
              <PiSkipForwardFill style={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
        <div
          css={css`
            margin-top: 20px;
            text-align: center;

            h3 {
              font-weight: 400 !important;
            }
          `}
        >
          <SongPanel />
        </div>
      </div>
    </div>
  );
}

export default SidePlayer;
