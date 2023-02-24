import { css } from "@emotion/react";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import TabBar from "./components/TabBar";
import ActivePage from "./components/ActivePage";
import DataStoreSync from "../DataStoreSync";
import ErrorBoundary from "./components/ErrorBoundary";

function Popup() {
  return (
    <div
      className="Popup"
      css={css`
        background-color: rgb(20, 20, 20);
        color: white;
        height: 600px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <DataStoreSync />
      <TopBar />
      <div
        css={css`
          height: 100%;
        `}
      >
        <ErrorBoundary
          fallback={
            <div
              css={css`
                padding: 10px;
              `}
            >
              <h1>Woops. Something doesn't look right. Please reset ThemeSong settings below.</h1>
              <button
                onClick={(e) => {
                  chrome.runtime.sendMessage("reset", (response) => {
                    console.log(`Received response ${response}`);
                  });
                  window.location.reload();
                }}
                css={css`
                  margin: 20px;
                  padding: 10px;
                  font-size: 16px;
                  color: #fff;
                  background-color: tomato;
                  border: 2px solid #fff;
                  border-radius: 5px;

                  :hover {
                    background-color: red;
                  }
                `}
              >
                Reset ThemeSong Defaults
              </button>
            </div>
          }
        >
          <TabBar />
          <ActivePage />
        </ErrorBoundary>
      </div>
      <BottomBar />
    </div>
  );
}

export default Popup;
