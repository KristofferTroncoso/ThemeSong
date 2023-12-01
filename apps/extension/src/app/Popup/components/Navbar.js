import { css } from "@emotion/react";
import TabButton from "./TabButton";
import { useStore } from "/src/app/store";
import { IoColorPalette } from "react-icons/io5";
import { GiProtectionGlasses } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import Settings from "@mui/icons-material/Settings";
import useLocalization from "../../Extension/Localization/useLocalization";

function Navbar() {
  const activePopupTab = useStore((state) => state.popup.prefs.activePopupTab);
  const setActivePopupTab = useStore((state) => state.popup.setActivePopupTab);
  const getMessage = useLocalization();

  function handleClick(id) {
    setActivePopupTab(id);
  }

  return (
    <div
      id="Navbar"
      css={css`
        background-color: #181818;
        min-width: 50px;
        width: 50px;
        max-width: 50px;
        padding: 2px;
      `}
    >
      <TabButton key={1} id={1} isActive={activePopupTab === 1} onClick={(e) => handleClick(1)}>
        <IoColorPalette style={{ fontSize: 23 }} />
        <span style={{ marginTop: 2, fontSize: 8 }}>{getMessage("themes")}</span>
      </TabButton>
      <TabButton key={2} id={2} isActive={activePopupTab === 2} onClick={(e) => handleClick(2)}>
        <GiProtectionGlasses style={{ fontSize: 25 }} />
        <span style={{ marginTop: 2, fontSize: 8 }}>{getMessage("visualizers")}</span>
      </TabButton>
      <TabButton key={3} id={3} isActive={activePopupTab === 3} onClick={(e) => handleClick(3)}>
        <GiMusicalNotes style={{ fontSize: 21 }} />
        <span style={{ marginTop: 2, fontSize: 8 }}>{getMessage("pieces")}</span>
      </TabButton>
      <TabButton key={4} id={4} isActive={activePopupTab === 4} onClick={(e) => handleClick(4)}>
        <Settings style={{ fontSize: 24 }} />
        <span style={{ marginTop: 2, fontSize: 8 }}>{getMessage("settings")}</span>
      </TabButton>
    </div>
  );
}

export default Navbar;
