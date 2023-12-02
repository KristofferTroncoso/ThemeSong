import { css } from "@emotion/react";
import TabButton from "./TabButton";
import { useStore } from "/src/app/store";
import { IoColorPalette } from "react-icons/io5";
import { GiProtectionGlasses } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
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
      <TabButton
        key={0}
        id={0}
        title={getMessage("nowPlaying")}
        isActive={activePopupTab === 0}
        onClick={(e) => handleClick(0)}
      >
        <PlayCircleOutlineIcon style={{ fontSize: 23 }} />
      </TabButton>
      <TabButton
        key={1}
        id={1}
        title={getMessage("themes")}
        isActive={activePopupTab === 1}
        onClick={(e) => handleClick(1)}
      >
        <IoColorPalette style={{ fontSize: 23 }} />
      </TabButton>
      <TabButton
        key={2}
        id={2}
        title={getMessage("visualizers")}
        isActive={activePopupTab === 2}
        onClick={(e) => handleClick(2)}
      >
        <GiProtectionGlasses style={{ fontSize: 25 }} />
      </TabButton>
      <TabButton
        key={3}
        id={3}
        title={getMessage("pieces")}
        isActive={activePopupTab === 3}
        onClick={(e) => handleClick(3)}
      >
        <GiMusicalNotes style={{ fontSize: 21 }} />
      </TabButton>
      <TabButton
        key={4}
        id={4}
        title={getMessage("settings")}
        isActive={activePopupTab === 4}
        onClick={(e) => handleClick(4)}
      >
        <Settings style={{ fontSize: 24 }} />
      </TabButton>
    </div>
  );
}

export default Navbar;
