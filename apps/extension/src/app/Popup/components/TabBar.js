import { css } from "@emotion/react";
import TabButton from "./TabButton";
import { useStore } from "/src/app/store";

function TabBar() {
  const activePopupTab = useStore((state) => state.popup.prefs.activePopupTab);
  const setActivePopupTab = useStore((state) => state.popup.setActivePopupTab);

  function handleClick(id) {
    setActivePopupTab(id);
  }

  return (
    <div
      id="TabBar"
      css={css`
        background-color: #000;
      `}
    >
      <TabButton key={1} id={1} isActive={activePopupTab === 1} onClick={(e) => handleClick(1)}>
        Themes
      </TabButton>
      <TabButton key={2} id={2} isActive={activePopupTab === 2} onClick={(e) => handleClick(2)}>
        Visualizers
      </TabButton>
      <TabButton key={3} id={3} isActive={activePopupTab === 3} onClick={(e) => handleClick(3)}>
        Piece
      </TabButton>
    </div>
  );
}

export default TabBar;
