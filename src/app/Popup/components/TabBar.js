import { css } from "@emotion/react";
import TabButton from "./TabButton";
import { useStore } from "/src/app/store";

function TabBar() {
  const activePopupTab = useStore((state) => state.popup.activePopupTab);
  const changeActivePopupTab = useStore(
    (state) => state.popup.changeActivePopupTab
  );

  function handleClick(id) {
    changeActivePopupTab(id);
    chrome.storage.local.set({ activePopupTab: id });
  }

  return (
    <div
      id="TabBar"
      css={css`
        background-color: #000;
      `}
    >
      <TabButton
        key={1}
        id={1}
        isActive={activePopupTab === 1}
        onClick={(e) => handleClick(1)}
      >
        Themes
      </TabButton>
      <TabButton
        key={2}
        id={2}
        isActive={activePopupTab === 2}
        onClick={(e) => handleClick(2)}
      >
        Visualizers
      </TabButton>
      {/* <TabButton key={3} id={3} isActive={activePopupTab === 3} onClick={e => handleClick(3)}>Snippets (beta)</TabButton> */}
    </div>
  );
}

export default TabBar;
