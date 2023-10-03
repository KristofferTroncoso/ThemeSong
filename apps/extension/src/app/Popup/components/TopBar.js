import { css } from "@emotion/react";
import YtmIcon from "../../YtmLogo/YtmIcon";
import ThemesongTextIcon from "./ThemesongTextIcon";

function TopBar() {
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
      className="TopBar"
      css={{
        backgroundColor: "#1f1f1f",
        width: "calc(100% - 15px)",
        height: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 7px 0",
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
          <ThemesongTextIcon />
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
