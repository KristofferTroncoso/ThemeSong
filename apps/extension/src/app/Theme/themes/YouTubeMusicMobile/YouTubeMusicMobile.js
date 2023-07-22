import { useEffect } from "react";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";
import { scrollbars } from "../../css/core/scrollbars";
import { playerbar_progressbar } from "../../css/core/playerbar_progressbar";
import { backgrounds } from "../../css/core/backgrounds";
import { song_image } from "../../css/extra/song_image";
import { misc_style_improvements } from "../../css/extra/misc_style_improvements";
import { dark_base_colors } from "../../css/colors/dark_base_colors";

function YouTubeMusicMobile() {
  const dominantColorLCH = useStore((state) => state.palette.dominant).oklch;
  const playerUiState = useStore((state) => state.player.playerUiState);

  useEffect(() => {
    if (playerUiState === "PLAYER_PAGE_OPEN") {
      menubar.content = `oklch(0.28 ${dominantColorLCH[1] / 3} ${dominantColorLCH[2]})`;
    } else {
      menubar.content = "#121212";
    }
  }, [playerUiState, dominantColorLCH]);

  return (
    <style id="YouTubeMusicMobile">
      {
        /*css*/ `
        ${dark_base_colors}
        ${scrollbars}
        ${playerbar_progressbar}
        ${misc_style_improvements}
        ${song_image}
        ${backgrounds}

        :root  {
          --ts-navbar-color: #121212;
          --ts-playerpage-color: oklch(0.28 calc(var(--ts-palette-dominant-c) / 3) var(--ts-palette-dominant-h));
          --ts-playerpageavtoggle-color: oklch(0.35 calc(var(--ts-palette-dominant-c) / 3) var(--ts-palette-dominant-h));
          --ts-playerbar-color: #212121;
          --ts-body-color: #000000;
          --ts-body-alpha-gradient-color: rgb(0 0 0 / 0.3);
          --ts-songimg-border-radius: 16px;
        }
      `
      }
      {(playerUiState === "PLAYER_PAGE_OPEN" || playerUiState === "FULLSCREEN") &&
        /* css */ ` 
        :root  {
          --ts-navbar-color: oklch(0.30 calc(var(--ts-palette-dominant-c) / 2.5) var(--ts-palette-dominant-h));
          --ts-playerbar-color: oklch(0.35 calc(var(--ts-palette-dominant-c) / 2) var(--ts-palette-dominant-h));
        }
      `}
    </style>
  );
}

export default YouTubeMusicMobile;
