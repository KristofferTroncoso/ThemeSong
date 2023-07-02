import { useCallback, useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";
import { scrollbars } from "../../css/core/scrollbars";
import { playerbar_progressbar } from "../../css/core/playerbar_progressbar";
import { backgrounds } from "../../css/core/backgrounds";
import { song_image } from "../../css/extra/song_image";
import { misc_style_improvements } from "../../css/extra/misc_style_improvements";
import { dark_base_colors } from "../../css/colors/dark_base_colors";

function YouTubeMusicMobile() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const playerUiState = useStore((state) => state.player.playerUiState);

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = (dominantColorHSL[1] * 100 * 0.5).toFixed();

  const calcCurvedBrightness = useCallback(
    (brightness) => {
      let hueNum = parseInt(hue, 10);
      let brightnessNum = parseInt(brightness, 10);

      if (hueNum > 35 && hueNum < 200) {
        return brightnessNum * 0.7;
      } else {
        return brightnessNum;
      }
    },
    [hue]
  );

  useEffect(() => {
    if (playerUiState === "PLAYER_PAGE_OPEN") {
      menubar.content = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(20)}%)`;
    } else {
      menubar.content = "#000";
    }
  }, [hue, saturation, playerUiState, calcCurvedBrightness]);

  return (
    <style id="YouTubeMusicMobile">
      {`
        ${dark_base_colors}
        ${scrollbars}
        ${playerbar_progressbar}
        ${misc_style_improvements}
        ${song_image}
      `}
      {(playerUiState === "PLAYER_PAGE_OPEN" || playerUiState === "FULLSCREEN") &&
        ` 
        ${backgrounds}
        :root {
          --ts-navbar-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(20)}%
          );
          --ts-playerpage-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(20)}%
          );
          --ts-playerpageavtoggle-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${21 + (15 / 25) * 14}%
          );
          --ts-playerbar-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(28)}%
          );
          --ts-body-color: #000000;
        }
      `}
    </style>
  );
}

export default YouTubeMusicMobile;
