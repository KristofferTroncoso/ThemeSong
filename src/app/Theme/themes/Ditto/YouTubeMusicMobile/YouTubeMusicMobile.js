import { useCallback, useEffect } from "react";
import { useStore } from "/src/app/store";
import { youtubemusicmobile_css } from "./YouTubeMusicMobileCss";
import { menubar } from "../../selectors";
import { playerbar_progressbar } from "../../universal/playerbar-progressbar";

function YouTubeMusicMobile() {
  const dominantColorHSL = useStore((state) => state.palette.dominant).hsl;
  const playerUiState = useStore((state) => state.player.playerUiState);

  let hue = (dominantColorHSL[0] * 360).toFixed();
  let saturation = `${(dominantColorHSL[1] * 100 * 0.5).toFixed()}%`;

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
      menubar.content = `hsl(${hue}, ${saturation}, ${calcCurvedBrightness(
        20
      )}%)`;
    } else {
      menubar.content = "#000";
    }
  }, [hue, saturation, playerUiState, calcCurvedBrightness]);

  return (
    <style id="YouTubeMusicMobile">
      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER")
        ? `
        :root {
          --themesong-theme-dynamic-saturation: ${saturation};
          --themesong-theme-dynamic-topbarbg-light: ${calcCurvedBrightness(
            20
          )}%;
          --themesong-theme-dynamic-playpagebg-light: ${calcCurvedBrightness(
            20
          )}%;
          --themesong-theme-dynamic-playbarbg-light: ${calcCurvedBrightness(
            28
          )}%;
          --themesong-theme-dynamic-playpageavtoggle-light: ${
            21 + (15 / 25) * 14
          }%;
        }
        ${youtubemusicmobile_css}
        #songDivContainer {
          display: none;
        }
      `
        : `
        :root {
          --themesong-playprogress-color: #fff;
        }
        ${playerbar_progressbar}
      `}
    </style>
  );
}

export default YouTubeMusicMobile;
