import { useStore } from "/src/app/store";
import AppleMusicDark from "./AppleMusicDark";
import AppleMusicLight from "./AppleMusicLight";
import AppleMusicSystem from "./AppleMusicSystem";
import { icons_buttons } from "../../css/core/icons_buttons";
import { gradients_overlays } from "../../css/core/gradients_overlays";
import { rulers_borders } from "../../css/core/rulers_borders";
import { scrollbars } from "../../css/core/scrollbars";
import { playerbar_progressbar } from "../../css/core/playerbar_progressbar";
import { backgrounds } from "../../css/core/backgrounds";
import { song_image } from "../../css/extra/song_image";
import { misc_style_improvements } from "../../css/extra/misc_style_improvements";
import { zebra_stripes } from "../../css/extra/zebra_stripes";
import { nowplaying_overlay } from "../../css/extra/nowplaying_overlay";

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

  return (
    <div id="AppleMusic">
      <style>
        {icons_buttons}
        {gradients_overlays}
        {rulers_borders}
        {backgrounds}
        {scrollbars}
        {playerbar_progressbar}
        {song_image}
        {misc_style_improvements}
        {zebra_stripes}
        {nowplaying_overlay}
      </style>
      {returnVariant()}
    </div>
  );
}

export default AppleMusic;
