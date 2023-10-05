import { css } from "@emotion/react";
import TabButton from "./TabButton";
import { useStore } from "/src/app/store";
import { IoColorPalette } from "react-icons/io5";
import { GiProtectionGlasses } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";

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
        font-size: 20px;
        display: flex;
      `}
    >
      <TabButton key={1} id={1} isActive={activePopupTab === 1} onClick={(e) => handleClick(1)}>
        <IoColorPalette />
        <span style={{ marginLeft: 5 }}>Themes</span>
      </TabButton>
      <TabButton key={2} id={2} isActive={activePopupTab === 2} onClick={(e) => handleClick(2)}>
        <GiProtectionGlasses style={{ fontSize: 16 }} />
        <span style={{ marginLeft: 5 }}>Visualizers</span>
      </TabButton>
      <TabButton key={3} id={3} isActive={activePopupTab === 3} onClick={(e) => handleClick(3)}>
        <GiMusicalNotes />
        <span style={{ marginLeft: 5 }}>Pieces</span>
      </TabButton>
    </div>
  );
}

export default TabBar;
