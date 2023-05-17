import { useStore } from "/src/app/store";
import AppleMusicDark from "./AppleMusicDark";
import AppleMusicLight from "./AppleMusicLight";
import AppleMusicSystem from "./AppleMusicSystem";

function AppleMusic() {
  const appearance = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f").appearance
  );

  function returnVariant() {
    switch (appearance) {
      case "dark":
        return <AppleMusicDark />;
      case "light":
        return <AppleMusicLight />;
      case "system":
        return <AppleMusicSystem />;
      default:
        return <AppleMusicSystem />;
    }
  }

  return <div id="AppleMusic">{returnVariant()}</div>;
}

export default AppleMusic;
