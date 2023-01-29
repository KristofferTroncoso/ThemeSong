import { useStore } from "../store";

import Off from "./themes/Off/Off";
import Dynamic from "./themes/Dynamic/Dynamic";
import Static from "./themes/Static/Static";
// import Custom from './themes/Custom/Custom';
import Ditto from "./themes/Ditto/Ditto";

function Themes() {
  const activeTheme = useStore((state) => state.theme.activeTheme);

  function returnTheme() {
    switch (activeTheme) {
      case "themeId:0":
        return <Off />;
      case "themeId:6":
        return <Dynamic />;
      case "themeId:7":
        return <Static />;
      // case "themeId:8":
      //   return <Custom />
      case "themeId:9":
        return <Ditto />;
      default:
        return <Dynamic />;
    }
  }

  return <div id="ThemeSong-Themes">{returnTheme()}</div>;
}

export default Themes;
