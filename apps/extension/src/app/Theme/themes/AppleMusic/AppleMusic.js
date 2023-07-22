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
import { frosted_glass } from "../../css/extra/frosted_glass";
import { texts_selection } from "../../css/extra/texts_selection";
import { thumbnail_border } from "../../css/extra/thumbnail_border";

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
        {gradients_overlays}
        {rulers_borders}
        {backgrounds}
        {scrollbars}
        {playerbar_progressbar}
        {song_image}
        {misc_style_improvements}
        {zebra_stripes}
        {nowplaying_overlay}
        {frosted_glass}
        {texts_selection}
        {thumbnail_border}
        {
          /*css*/ `
          :root {
            --ts-theme-apple-1-color: hsl(var(--ts-palette-dominant-hue), calc(var(--ts-palette-dominant-saturation) * 0.3), 25%);
            --ts-theme-apple-2-color: hsl(var(--ts-palette-vibrant-hue), calc(var(--ts-palette-vibrant-saturation) * 0.2), 32%);
            --ts-theme-apple-3-color: hsl(var(--ts-palette-muted-hue), calc(var(--ts-palette-muted-saturation) * 0.2), 26%);
            --ts-theme-apple-4-color: hsl(var(--ts-palette-lightvibrant-hue), calc(var(--ts-palette-lightvibrant-saturation) * 0.2), 35%);
            --ts-theme-apple-5-color: hsl(var(--ts-palette-darkvibrant-hue), calc(var(--ts-palette-darkvibrant-saturation) * 0.2), 28%);
            
            --ts-navbar-color: var(--ts-theme-apple-4-color);
            --ts-sidebar-color: linear-gradient(180deg, var(--ts-theme-apple-4-color) 0%, var(--ts-theme-apple-1-color) 80%);
            --ts-playerpage-color: linear-gradient(180deg, var(--ts-theme-apple-4-color) 0%, var(--ts-theme-apple-2-color) 20%, var(--ts-theme-apple-5-color) 80%, var(--ts-theme-apple-3-color) 100%);
            --ts-playerbar-color: var(--ts-theme-apple-3-color);
            --ts-playerpageavtoggle-color: hsl(var(--ts-palette-lightvibrant-hue), calc(var(--ts-palette-dominant-saturation) * 0.2), 27%);
          }

          /* i think ytm is putting a 'padding-top: 100%' on this. i have to set it to 0 for my gradient to be good */
          ytmusic-player[player-ui-state=FULLSCREEN] #song-image.ytmusic-player {
            padding-top: 0;
          }
        `
        }
      </style>
      {returnVariant()}
    </div>
  );
}

export default AppleMusic;
