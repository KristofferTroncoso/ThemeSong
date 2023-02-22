import { useCallback, useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";
import { scrollbars } from "../../universal/core/scrollbars";
import { playerbar_progressbar } from "../../universal/core/playerbar_progressbar";
import { backgrounds } from "../../universal/core/backgrounds";
import { song_image } from "../../universal/extra/song_image";
import { misc_style_improvements } from "../../universal/extra/misc_style_improvements";
import { dark_base_colors } from "../../universal/colors/dark_base_colors";

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
      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER")
        ? `
        ${dark_base_colors}
        ${backgrounds}
        ${scrollbars}
        ${playerbar_progressbar}
        ${song_image}
        ${misc_style_improvements}
        
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


      `
        : `
        ${dark_base_colors}
        ${scrollbars}
        ${playerbar_progressbar}
        ${misc_style_improvements}
      `}
    </style>
  );
}

export default YouTubeMusicMobile;
