import { useState } from "react";
import { css } from "@emotion/react";
import YtmIcon from "../../YtmLogo/YtmIcon";

function TopBar() {
  const [extensionVersion] = useState(chrome.runtime.getManifest().version);

  function handleYTMclick() {
    chrome.tabs.query({ url: "https://music.youtube.com/*" }, (tabs) => {
      console.log(tabs);
      if (tabs.length === 0) {
        window.open("https://music.youtube.com");
      } else if (tabs.length === 1) {
        chrome.tabs.update(tabs[0].id, { active: true });
      } else {
        let audibleTabId;
        for (let tab of tabs) {
          switch (tab.audible) {
            case true:
              audibleTabId = tab.id;
              break;
            default:
              break;
          }
        }
        if (audibleTabId) {
          chrome.tabs.update(audibleTabId, { active: true });
        } else {
          chrome.tabs.update(tabs.at(-1).id, { active: true });
        }
      }
    });
  }

  return (
    <div
      className="TopBar"
      css={{
        backgroundColor: "#2a2a2a",
        width: "calc(100% - 20px)",
        height: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 10px 0",
      }}
    >
      <h1 css={{ fontSize: "12px", fontWeight: "400" }}>
        <a
          href={STORE_URL}
          target="_blank"
          rel="noreferrer"
          css={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <span>ThemeSong - </span>
          <span
            css={css`
              font-size: 11px;
            `}
          >
            v{extensionVersion}
          </span>
        </a>
      </h1>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          align-self: center;
          height: 20px;
        `}
      >
        <button
          css={css`
            /* height: 22px; */
            background-color: inherit;
            border: 0;
            padding: 0;
          `}
          onClick={handleYTMclick}
        >
          <YtmIcon
            partial
            circleColor="#f1f1f1"
            stroke="#000"
            css={css`
              height: 16px;
            `}
          />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
