import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";
import { scrollbars } from "../../universal/core/scrollbars";
import { playerbar_progressbar } from "../../universal/core/playerbar_progressbar";
import { backgrounds } from "../../universal/core/backgrounds";
import { song_image } from "../../universal/extra/song_image";
import { misc_style_improvements } from "../../universal/extra/misc_style_improvements";
import { dark_base_colors } from "../../universal/colors/dark_base_colors";

function StaticDark() {
  const { hue, saturation, lightness } = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8").dark
  );

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturation}%, ${lightness[0]}%)`;
  }, [hue, saturation, lightness]);

  return (
    <style id="StaticDark">
      {
        /*css*/ `
        ${dark_base_colors}
        ${backgrounds}
        ${scrollbars}
        ${playerbar_progressbar}
        ${song_image}
        ${misc_style_improvements}
        
        :root {
          --ts-navbar-color: hsl(${hue}, ${saturation}%, ${lightness[0]}%);
          --ts-playerpage-color: hsl(${hue}, ${saturation}%, ${lightness[1]}%);
          --ts-playerpageavtoggle-color: hsl(${hue}, ${saturation}%, ${21 + (lightness[1] / 25) * 14}%);
          --ts-playerbar-color: hsl(${hue}, ${saturation}%, ${lightness[2]}%);
          --ts-body-color: hsl(${hue}, ${saturation}%, ${lightness[3]}%);
        }
      
      `
      }
    </style>
  );
}

export default StaticDark;
