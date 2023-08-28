import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../../selectors";

import { scrollbars } from "../../../css/core/scrollbars";
import { playerbar_progressbar } from "../../../css/core/playerbar_progressbar";
import { backgrounds } from "../../../css/core/backgrounds";
import { song_image } from "../../../css/extra/song_image";
import { misc_style_improvements } from "../../../css/extra/misc_style_improvements";
import { dark_base_colors } from "../../../css/colors/dark_base_colors";
import { Global, css } from "@emotion/react";

function DynamicDark() {
  const dominantColorLCH = useStore((state) => state.palette.dominant).oklch;
  const dynamicDarkPrefs = useStore(
    (state) => state.theme.prefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb").dark
  );
  const lightness = dynamicDarkPrefs.lightness;

  let hue = dominantColorLCH[2];
  let chroma = dominantColorLCH[1] * dynamicDarkPrefs.saturation;

  useEffect(() => {
    menubar.content = `oklch(${lightness[0]}% ${chroma} ${hue})`;
  }, [hue, chroma, lightness]);

  return (
    <Global
      styles={css`
        ${dark_base_colors}
        ${backgrounds}
        ${scrollbars}
        ${playerbar_progressbar}
        ${song_image}
        ${misc_style_improvements}
        :root {
          --ts-navbar-color: oklch(${lightness[0]}% ${chroma} var(--ts-palette-dominant-h));
          --ts-playerpage-color: oklch(${lightness[1]}% ${chroma} var(--ts-palette-dominant-h));
          --ts-playerpageavtoggle-color: oklch(${lightness[1] + 10}% ${chroma} var(--ts-palette-dominant-h));
          --ts-playerbar-color: oklch(${lightness[2]}% ${chroma} var(--ts-palette-dominant-h));
          --ts-body-color: oklch(${lightness[3]}% ${chroma} var(--ts-palette-dominant-h));

          --ts-playprogress-color: oklch(97% 0.1 var(--ts-palette-1-hue));
          --ts-playprogress-secondary-color: oklch(45% 0.1 var(--ts-palette-2-hue) / 0.7);
          --ts-playprogress-container-color: oklch(50% 0.1 var(--ts-palette-3-hue) / 0.3);
          --ts-playprogress-knob-color: var(--ts-playprogress-color);
        }
      `}
    />
  );
}

export default DynamicDark;
