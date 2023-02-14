import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";
import { scrollbars } from "../../universal/scrollbars";
import { playerbar_progressbar } from "../../universal/playerbar-progressbar";
import { main_BGs } from "../../universal/main-BGs";
import { songImgStyles } from "../../universal/songImgStyles";
import { misc_style_improvements } from "../../universal/misc-style-improvements";
import { dark_base_colors } from "../../universal/dark-base-colors";
import { texts_and_icons } from "../../universal/texts_and_icons";

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
        /*css*/ `:root {
        --themesong-topbarbg-color: hsl(${hue}, ${saturation}%, ${lightness[0]}%);
        --themesong-playpagebg-color: hsl(${hue}, ${saturation}%, ${lightness[1]}%);
        --themesong-playpageavtoggle-color: hsl(${hue}, ${saturation}%, ${21 + (lightness[1] / 25) * 14}%);
        --themesong-playbarbg-color: hsl(${hue}, ${saturation}%, ${lightness[2]}%);
        --themesong-bodybg-color: hsl(${hue}, ${saturation}%, ${lightness[3]}%);
      }
      
      ${dark_base_colors}
      ${main_BGs}
      ${scrollbars}
      ${playerbar_progressbar}
      ${songImgStyles}
      ${misc_style_improvements}
      `
      }
    </style>
  );
}

export default StaticDark;
