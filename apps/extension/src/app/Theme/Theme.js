import { useStore } from "/src/app/store";

import Off from "./themes/Off/Off";
import Dynamic from "./themes/Dynamic/Dynamic";
import Static from "./themes/Static/Static";
// import Custom from './themes/Custom/Custom';
import AppleMusic from "./themes/AppleMusic/AppleMusic";
import YouTubeMusicMobile from "./themes/YouTubeMusicMobile/YouTubeMusicMobile";

function Theme() {
  const activeTheme = useStore((state) => state.theme.activeTheme);

  function returnTheme() {
    switch (activeTheme) {
      case "416034f2-bfb8-46e8-9929-5805dd59a688":
        return <Off />;
      case "db8854e3-6753-4639-b244-c8091f3b9fcb":
        return <Dynamic />;
      case "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8":
        return <Static />;
      // case "8383a680-c786-4c8d-82ee-59e0f1ea7c50":
      //   return <Custom />
      case "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f":
        return <AppleMusic />;
      case "55f83bbd-d794-49a8-8912-2b53af3f1d3f":
        return <YouTubeMusicMobile />;
      default:
        return <Dynamic />;
    }
  }

  return <div id="ThemeSong-Theme">{returnTheme()}</div>;
}

export default Theme;
