import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import ThemePanel from "./ThemePanel";
import DarkModePanel from "./DarkModePanel";

function AppearancePanel() {
  return (
    <StyledPanelDiv>
      <ThemePanel />
      <DarkModePanel />
    </StyledPanelDiv>
  );
}

export default AppearancePanel;
