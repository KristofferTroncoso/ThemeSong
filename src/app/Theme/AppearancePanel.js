import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import ThemePanel from "./ThemePanel";
import DarkModePanel from "./DarkModePanel";

function AppearancePanel() {
  return (
    <StyledPanelDiv
      style={{minHeight: '120px'}}
    >
      <ThemePanel />
      <DarkModePanel />
    </StyledPanelDiv>
  )
}

export default AppearancePanel;