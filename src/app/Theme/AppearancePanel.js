import React from "react";
import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import ThemePanel from "./ThemePanel";
import DarkModePanel from "./DarkModePanel";

function AppearancePanel() {
  return (
    <StyledPanelDiv
      style={{minHeight: '130px'}}
    >
      <ThemePanel />
      <DarkModePanel />
    </StyledPanelDiv>
  )
}

export default AppearancePanel;