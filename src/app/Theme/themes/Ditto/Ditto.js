import YouTubeMusicMobile from "./YouTubeMusicMobile/YouTubeMusicMobile";
import AppleMusic from "./AppleMusic/AppleMusic";
import { useStore } from "/src/app/store";

function Ditto() {
  const activeVariant = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f"
      ).activeVariant
  );

  function returnVariant() {
    switch (activeVariant) {
      case "55f83bbd-d794-49a8-8912-2b53af3f1d3f":
        return <YouTubeMusicMobile />;
      case "3f71704c-d344-4bd0-9013-a2da7bda13ef":
        return <AppleMusic />;
      default:
        return <AppleMusic />;
    }
  }

  return <div id="Ditto">{returnVariant()}</div>;
}

export default Ditto;
