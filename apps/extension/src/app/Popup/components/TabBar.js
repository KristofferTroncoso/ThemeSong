import { css } from "@emotion/react";
import TabButton from "./TabButton";
import { useStore } from "/src/app/store";
import { IoColorPalette } from "react-icons/io5";
import { GiProtectionGlasses } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import useLocalization from "../../Extension/Localization/useLocalization";

function TabBar() {
  const activePopupTab = useStore((state) => state.popup.prefs.activePopupTab);
  const setActivePopupTab = useStore((state) => state.popup.setActivePopupTab);
  const getMessage = useLocalization();

  function handleClick(id) {
    setActivePopupTab(id);
  }

  return (
    <div
      id="TabBar"
      css={css`
        background-color: #000;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      `}
    >
      <TabButton key={1} id={1} isActive={activePopupTab === 1} onClick={(e) => handleClick(1)}>
        <IoColorPalette style={{ fontSize: 18 }} />
        <span style={{ marginLeft: 5, fontSize: 11 }}>{getMessage("themes")}</span>
      </TabButton>
      <TabButton key={2} id={2} isActive={activePopupTab === 2} onClick={(e) => handleClick(2)}>
        <GiProtectionGlasses style={{ fontSize: 22 }} />
        <span style={{ marginLeft: 5, fontSize: 11 }}>{getMessage("visualizers")}</span>
      </TabButton>
      <TabButton key={3} id={3} isActive={activePopupTab === 3} onClick={(e) => handleClick(3)}>
        <GiMusicalNotes style={{ fontSize: 16 }} />
        <span style={{ marginLeft: 5, fontSize: 11 }}>{getMessage("pieces")}</span>
      </TabButton>
    </div>
  );
}

export default TabBar;
