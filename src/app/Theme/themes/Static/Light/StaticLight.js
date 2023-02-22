import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";

import { scrollbars } from "../../universal/core/scrollbars";
import { playerbar_progressbar } from "../../universal/core/playerbar_progressbar";
import { backgrounds } from "../../universal/core/backgrounds";
import { song_image } from "../../universal/extra/song_image";
import { light_base_colors } from "../../universal/colors/light_base_colors";
import { misc_style_improvements } from "../../universal/extra/misc_style_improvements";
import { texts } from "../../universal/core/texts";
import { icons } from "../../universal/core/icons";
import { gradients_overlays } from "../../universal/core/gradients_overlays";
import { rulers_borders } from "../../universal/core/rulers_borders";

function StaticLight() {
  const { hue, saturation, lightness } = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8").light
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
      {icons}
      {gradients_overlays}
      {rulers_borders}
      {misc_style_improvements}
      {`:root {
        --ts-navbar-color: hsl(${hue}, ${saturation}%, ${lightness[0]}%);
        --ts-playerpage-color: hsl(${hue}, ${saturation}%, ${lightness[1]}%);
        --ts-playerpageavtoggle-color: hsl(${hue}, ${saturation}%, ${21 + (lightness[1] / 25) * 14}%);
        --ts-playerbar-color: hsl(${hue}, ${saturation}%, ${lightness[2]}%);
        --ts-body-color: hsl(${hue}, ${saturation}%, ${lightness[3]}%);
      }`}
    </style>
  );
}

export default StaticLight;
