import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../../selectors";

import { scrollbars } from "../../../css/core/scrollbars";
import { playerbar_progressbar } from "../../../css/core/playerbar_progressbar";
import { backgrounds } from "../../../css/core/backgrounds";
import { song_image } from "../../../css/extra/song_image";
import { light_base_colors } from "../../../css/colors/light_base_colors";
import { misc_style_improvements } from "../../../css/extra/misc_style_improvements";
import { texts } from "../../../css/core/texts";
import { icons_buttons } from "../../../css/core/icons_buttons";
import { gradients_overlays } from "../../../css/core/gradients_overlays";
import { rulers_borders } from "../../../css/core/rulers_borders";
import useLightAppearance from "../../../components/useLightAppearance";

function StaticLight() {
  useLightAppearance();

  const { hue, saturation, lightness } = useStore(
    (state) => state.theme.prefs["b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"].light
  );

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturation}%, ${lightness[0]}%)`;
  }, [hue, saturation, lightness]);

  return (
    <style id="StaticLight">
      {light_base_colors}
      {backgrounds}
      {scrollbars}
      {playerbar_progressbar}
      {song_image}
      {texts}
      {icons_buttons}
      {gradients_overlays}
      {rulers_borders}
      {misc_style_improvements}
      {`:root {
        --ts-navbar-color: hsl(${hue}, ${saturation}%, ${lightness[0]}%);
        --ts-playerpage-color: hsl(${hue}, ${saturation}%, ${lightness[1]}%);
        --ts-playerpageavtoggle-color: hsl(${hue}, ${saturation}%, ${21 + (lightness[1] / 25) * 14}%);
        --ts-playerbar-color: hsl(${hue}, ${saturation}%, ${lightness[2]}%);
        --ts-body-color: hsl(${hue}, ${saturation}%, ${lightness[3]}%);
        --ts-body-alpha-gradient-color: hsl(${hue} ${saturation}% ${lightness[3]}% / 90%);
        --ts-overlay-color: rgb(0 0 0 / 0.6);

        --ts-secondary-text-color: var(--ts-base-80-color);
      }`}
    </style>
  );
}

export default StaticLight;
