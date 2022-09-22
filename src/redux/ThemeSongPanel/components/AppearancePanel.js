/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react';
import StyledPanelDiv from "./StyledPanelDiv";
import ThemePanel from "./ThemePanel";
import DarkModePanel from "./DarkModePanel";

function AppearancePanel() {
  return (
    <StyledPanelDiv>
      <ThemePanel />
      <DarkModePanel />
    </StyledPanelDiv>
  )
}

export default AppearancePanel;