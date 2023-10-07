import { useStore } from "/src/app/store";
import AppleMusicDark from "./AppleMusicDark";
import AppleMusicLight from "./AppleMusicLight";
import AppleMusicSystem from "./AppleMusicSystem";
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
  const appleMusicPrefs = useStore((state) => state.theme.prefs["76dd54c5-78a2-4ca3-9c16-3d0d1aab367f"]);

  function returnVariant() {
    switch (appleMusicPrefs.appearance) {
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
            --ts-theme-apple-4-color: oklch(45% calc(var(--ts-palette-lightvibrant-c) * 0.5) var(--ts-palette-lightvibrant-h));
            --ts-theme-apple-2-color: oklch(40% calc(var(--ts-palette-vibrant-c) * 0.4) var(--ts-palette-vibrant-h));
            --ts-theme-apple-5-color: oklch(35% calc(var(--ts-palette-darkvibrant-c) * 0.35) var(--ts-palette-darkvibrant-h));
            --ts-theme-apple-3-color: oklch(32% calc(var(--ts-palette-muted-c) * 0.3) var(--ts-palette-muted-h));

            --ts-theme-apple-6-color: oklch(40% calc(var(--ts-palette-0-c) * 0.6) var(--ts-palette-0-h));
            --ts-theme-apple-7-color: oklch(35% calc(var(--ts-palette-0-c) * 0.5) var(--ts-palette-0-h));
            
            --ts-navbar-color: linear-gradient(177deg, var(--ts-theme-apple-4-color) 60%, var(--ts-theme-apple-2-color) 140%);
            --ts-sidebar-color: linear-gradient(160deg, var(--ts-theme-apple-4-color) 20%, var(--ts-theme-apple-2-color) 45%, var(--ts-theme-apple-5-color) 70%);
            --ts-playerpage-color: radial-gradient(circle at 80% 600%, var(--ts-theme-apple-3-color) 80%, var(--ts-theme-apple-5-color) 86%, var(--ts-theme-apple-2-color) 94%, var(--ts-theme-apple-4-color) 98%);
            --ts-playerbar-color: linear-gradient(170deg, var(--ts-theme-apple-5-color) 15%, var(--ts-theme-apple-3-color) 60%);
            --ts-playerpageavtoggle-color: oklch(37% calc(var(--ts-palette-vibrant-c) * 0.25) var(--ts-palette-lightvibrant-h));
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
