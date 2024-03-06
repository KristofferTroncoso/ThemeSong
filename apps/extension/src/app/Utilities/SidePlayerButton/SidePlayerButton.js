import { css } from "@emotion/react";
import useLocalization from "../../Extension/Localization/useLocalization";
import PanelButton from "../../QuickAccessPanel/components/PanelButton";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";

function SidePlayerButton() {
  const getMessage = useLocalization();

  function handleSideplayerClick() {
    chrome.runtime.sendMessage("openSidePlayer", (response) => {
      console.log(`Received response ${response}`);
    });
  }

  return (
    <PanelButton onClick={handleSideplayerClick} title={getMessage("openSidePlayer")} hoverColor="red">
      <BsReverseLayoutSidebarInsetReverse
        css={css`
          font-size: 22px;
        `}
      />
    </PanelButton>
  );
}

export default SidePlayerButton;
