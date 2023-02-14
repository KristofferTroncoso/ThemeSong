import { useCallback, useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";
import { scrollbars } from "../../universal/scrollbars";
import { playerbar_progressbar } from "../../universal/playerbar-progressbar";
import { main_BGs } from "../../universal/main-BGs";
import { songImgStyles } from "../../universal/songImgStyles";
import { misc_style_improvements } from "../../universal/misc-style-improvements";
import { dark_base_colors } from "../../universal/dark-base-colors";
import { texts_and_icons } from "../../universal/texts_and_icons";

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
      menubar.content = `hsl(${hue}, ${saturation}, ${calcCurvedBrightness(20)}%)`;
    } else {
      menubar.content = "#000";
    }
  }, [hue, saturation, playerUiState, calcCurvedBrightness]);

  return (
    <style id="YouTubeMusicMobile">
      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER")
        ? `
        :root {
          --ts-topbarbg-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(20)}%
          );
          --ts-playpagebg-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(20)}%
          );
          --ts-playpageavtoggle-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${21 + (15 / 25) * 14}%
          );
          --ts-playbarbg-color: hsl(
            var(--ts-palette-dominant-hue), 
            ${saturation}%, 
            ${calcCurvedBrightness(28)}%
          );
          --ts-bodybg-color: #000000;
        }

        ${dark_base_colors}
        ${main_BGs}
        ${scrollbars}
        ${playerbar_progressbar}
        ${songImgStyles}
        ${misc_style_improvements}
        ${texts_and_icons}
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
